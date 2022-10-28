package repository

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GetUser(email, password string) (models.User, error)
}

type Game interface {
	CreateGame(game models.Game) (int, error)
	BuyGame(userId int, game models.Game) (int, error)
	GetAllGames() ([]models.Game, error)
	GetGameById(gameId int) (models.Game, error)
}

type Repository struct {
	Authorization
	Game
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		Game:          NewGamePostgres(db),
	}
}
