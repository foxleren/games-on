package service

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/foxleren/GamesOn/backend/pkg/repository"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GenerateToken(email, password string) (string, error)
	ParseToken(token string) (int, error)
}

type User interface {
	GetUserAccount(userId int) (models.User, error)
	GetUserGames(userId int) ([]models.Game, error)
}

type Game interface {
	CreateGame(game models.Game) (int, error)
	GetAllGames() ([]models.Game, error)
	GetGameById(gameId int) (models.Game, error)
}

type Cart interface {
	CreateCart(userId int) (int, error)
	ClearCart(userId int) error
}

type Service struct {
	Authorization
	User
	Game
	Cart
}

func NewService(repos *repository.Repository) *Service {
	return &Service{
		Authorization: NewAuthService(repos.Authorization),
		User:          NewUserService(repos.User),
		Cart:          NewCartService(repos.Cart),
		Game:          NewGameService(repos.Game),
	}
}
