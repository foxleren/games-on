package repository

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user models.User) (int, error)
	GetUser(email, password string) (models.User, error)
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
}

type Repository struct {
	Authorization
	User
	Game
	Cart
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		User:          NewUserPostgres(db),
		Cart:          NewCartPostgres(db),
		Game:          NewGamePostgres(db),
	}
}
