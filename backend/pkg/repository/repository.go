package repository

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/jmoiron/sqlx"
)

type Authorization interface {
	CreateUser(user models.User) error
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
	UpdateCart(userId int, cart *models.Cart) error
	CreateCartItem(userId, gameId int) error
	GetAllCartItems(userId int) ([]models.Game, error)
	DeleteAllCartItems(userId int) error
	DeleteCartItemsById(userId, cartItemId int) error
}

type Library interface {
	AddGamesToLibrary(userId int) error
	GetAllLibraryGames(userId int) ([]models.Game, error)
}

type Repository struct {
	Authorization
	User
	Game
	Cart
	Library
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{
		Authorization: NewAuthPostgres(db),
		User:          NewUserPostgres(db),
		Cart:          NewCartPostgres(db),
		Game:          NewGamePostgres(db),
		Library:       NewLibraryPostgres(db),
	}
}
