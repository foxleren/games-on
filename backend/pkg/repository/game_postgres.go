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

//func (r *GamePostgres) addGameToUser(userId int, game models.Game) (int, error) {
//	tx, err := r.db.Begin()
//	if err != nil {
//		return 0, err
//	}
//	var id int
//	createGameQuery := fmt.Sprintf("INSERT INTO %s (title, description, price) VALUES ($1, $2, $3)", gamesTable)
//	row := tx.QueryRow(createGameQuery, game.Title, game.Description, game.Price)
//	if err := row.Scan(&id); err != nil {
//		tx.Rollback()
//		return 0, err
//	}
//}
