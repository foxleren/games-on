package service

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/foxleren/GamesOn/backend/pkg/repository"
)

type GameService struct {
	repo repository.Game
}

func NewGameService(repo repository.Game) *GameService {
	return &GameService{repo: repo}
}

func (s *GameService) CreateGame(game models.Game) (int, error) {
	return s.repo.CreateGame(game)
}

func (s *GameService) BuyGame(userId int, game models.Game) (int, error) {
	return s.repo.BuyGame(userId, game)
}

func (s *GameService) GetAllGames() ([]models.Game, error) {
	return s.repo.GetAllGames()
}

func (s *GameService) GetGameById(gameId int) (models.Game, error) {
	return s.repo.GetGameById(gameId)
}
