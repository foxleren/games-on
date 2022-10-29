package repository

import (
	"fmt"
	"github.com/foxleren/GamesOn/backend/models"
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

func (r *LibraryPostgres) GetAllLibraryGames(userId int) ([]models.Game, error) {
	var games []models.Game

	getAllCartItemsQuery := fmt.Sprintf("SELECT id, title, description, price, download_link FROM %s gt INNER JOIN %s ul on gt.id = ul.game_id WHERE ul.user_id = %d", gamesTable, libraryTable, userId)
	err := r.db.Select(&games, getAllCartItemsQuery)

	for i := 0; i < len(games); i++ {
		query := fmt.Sprintf("SELECT image FROM %s WHERE game_id = %d", gamesImagesTable, games[i].ID)
		err = r.db.Select(&games[i].Images, query)
	}

	return games, err
}
