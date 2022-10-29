package service

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/foxleren/GamesOn/backend/pkg/repository"
)

type UserService struct {
	repo repository.User
}

func NewUserService(repo repository.User) *UserService {
	return &UserService{repo: repo}
}

func (s *UserService) GetUserAccount(userId int) (models.User, error) {
	return s.repo.GetUserAccount(userId)
}

func (s *UserService) GetUserGames(userId int) ([]models.Game, error) {
	return s.repo.GetUserGames(userId)
}
