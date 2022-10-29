package repository

import (
	"fmt"
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/jmoiron/sqlx"
)

type GamePostgres struct {
	db *sqlx.DB
}

func NewGamePostgres(db *sqlx.DB) *GamePostgres {
	return &GamePostgres{db: db}
}

func (r *GamePostgres) CreateGame(game models.Game) (int, error) {
	var id int
	createGameQuery := fmt.Sprintf("INSERT INTO %s (title, description, price) VALUES ($1, $2, $3) RETURNING id", gamesTable)
	row := r.db.QueryRow(createGameQuery, game.Title, game.Description, game.Price)

	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}

func (r *GamePostgres) GetAllGames() ([]models.Game, error) {
	var games []models.Game
	query := fmt.Sprintf("SELECT * FROM %s", gamesTable)
	err := r.db.Select(&games, query)

	return games, err
}

func (r *GamePostgres) GetGameById(gameId int) (models.Game, error) {
	var game models.Game
	query := fmt.Sprintf("SELECT id, title, description, price FROM %s WHERE id = $1", gamesTable)
	err := r.db.Get(&game, query, gameId)

	return game, err
}
