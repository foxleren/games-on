package service

import (
	"crypto/sha1"
	"errors"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/foxleren/GamesOn/backend/pkg/repository"
	"github.com/siruspen/logrus"
	"os"
	"time"
)

const tokenTTL = 12 * time.Hour

type tokenClaims struct {
	jwt.StandardClaims
	UserId int `json:"user_id"`
}

type AuthService struct {
	repo repository.Authorization
}

func NewAuthService(repo repository.Authorization) *AuthService {
	return &AuthService{repo: repo}
}

func (s *AuthService) CreateUser(user models.User) error {
	user.Password = generateHashPassword(user.Password)
	return s.repo.CreateUser(user)
}

func (s *AuthService) GenerateToken(email, password string) (string, error) {
	user, err := s.repo.GetUser(email, generateHashPassword(password))
	if err != nil {
		return "", err
	}

	logrus.Printf("GenerateToken: \n id: %d, email: %s, password: %s", user.Id, user.Email, user.Password)

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, &tokenClaims{jwt.StandardClaims{
		ExpiresAt: time.Now().Add(tokenTTL).Unix(),
		IssuedAt:  time.Now().Unix(),
	}, user.Id})
	logrus.Printf("Generated new TOKEN")
	return token.SignedString([]byte(os.Getenv("SIGNING_KEY")))
}

func generateHashPassword(password string) string {
	hash := sha1.New()
	hash.Write([]byte(password))

	tmp := fmt.Sprintf("%x", hash.Sum([]byte(os.Getenv("SALT_KEY"))))

	//logrus.Printf("GenerateHashPassword: %s", tmp)

	return tmp
}

func (s *AuthService) ParseToken(accessToken string) (int, error) {
	token, err := jwt.ParseWithClaims(accessToken, &tokenClaims{}, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, errors.New("invalid signing method")
		}

		return []byte(os.Getenv("SIGNING_KEY")), nil
	})
	if err != nil {
		return 0, err
	}

	claims, ok := token.Claims.(*tokenClaims)
	if !ok {
		return 0, errors.New("token claims are not of type *tokenClaims")
	}

	return claims.UserId, nil
}
