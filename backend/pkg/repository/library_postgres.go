package repository

import (
	"fmt"
	"github.com/jmoiron/sqlx"
)

type LibraryPostgres struct {
	db *sqlx.DB
}

func NewLibraryPostgres(db *sqlx.DB) *LibraryPostgres {
	return &LibraryPostgres{db: db}
}

func (r *LibraryPostgres) AddGamesToLibrary(userId int) error {
	var cartId int
	getCartIdQuery := fmt.Sprintf("SELECT id FROM %s WHERE user_id = %d", cartsTable, userId)
	row := r.db.QueryRow(getCartIdQuery)

	if err := row.Scan(&cartId); err != nil {
		return err
	}

	getAllCartItemsQuery := fmt.Sprintf("INSERT INTO %s (user_id, game_id) SELECT user_id, game_id FROM %s cg INNER JOIN %s gt on cg.game_id = gt.id WHERE cg.cart_id = %d", libraryTable, cartsGamesTable, gamesTable, cartId)
	err := r.db.QueryRow(getAllCartItemsQuery)

	return err.Err()
}
