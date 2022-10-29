package repository

import (
	"fmt"
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/jmoiron/sqlx"
)

type CartPostgres struct {
	db *sqlx.DB
}

func NewCartPostgres(db *sqlx.DB) *CartPostgres {
	return &CartPostgres{db: db}
}

func (r *CartPostgres) CreateCart(userId int) (int, error) {
	var id int
	createCartQuery := fmt.Sprintf("INSERT INTO %s (user_id, total_price) VALUES ($1, $2) RETURNING id", cartsTable)
	row := r.db.QueryRow(createCartQuery, userId, 0)

	if err := row.Scan(&id); err != nil {
		return 0, err
	}
	return id, nil
}

func (r *CartPostgres) UpdateCart(userId int, cart *models.Cart) error {
	var cartId int
	getCartIdQuery := fmt.Sprintf("SELECT id FROM %s WHERE user_id = %d", cartsTable, userId)
	row := r.db.QueryRow(getCartIdQuery)

	if err := row.Scan(&cartId); err != nil {
		return err
	}

	clearCartQuery := fmt.Sprintf("UPDATE %s SET total_price = %f WHERE user_id = %d", cartsTable, cart.TotalPrice, userId)
	_, err := r.db.Exec(clearCartQuery)
	return err
}

func (r *CartPostgres) CreateCartItem(userId, gameId int) error {
	var cartId int
	getCartIdQuery := fmt.Sprintf("SELECT id FROM %s WHERE user_id = %d", cartsTable, userId)
	row := r.db.QueryRow(getCartIdQuery)

	if err := row.Scan(&cartId); err != nil {
		return err
	}

	var cartItemId int
	addCartItemQuery := fmt.Sprintf("INSERT INTO %s (user_id, cart_id, game_id) VALUES ($1, $2, $3) RETURNING 1", cartsGamesTable)
	row = r.db.QueryRow(addCartItemQuery, userId, cartId, gameId)

	if err := row.Scan(&cartItemId); err != nil {
		return err
	}

	return nil
}

func (r *CartPostgres) GetAllCartItems(userId int) ([]models.Game, error) {
	var cartItems []models.Game

	var cartId int
	getCartIdQuery := fmt.Sprintf("SELECT id FROM %s WHERE user_id = %d", cartsTable, userId)
	row := r.db.QueryRow(getCartIdQuery)

	if err := row.Scan(&cartId); err != nil {
		return nil, err
	}

	getAllCartItemsQuery := fmt.Sprintf("SELECT id, title, description, price FROM %s cg INNER JOIN %s gt on cg.game_id = gt.id WHERE cg.cart_id = %d", cartsGamesTable, gamesTable, cartId)
	err := r.db.Select(&cartItems, getAllCartItemsQuery)

	for i := 0; i < len(cartItems); i++ {
		query := fmt.Sprintf("SELECT image FROM %s WHERE game_id = %d", gamesImagesTable, cartItems[i].ID)
		err = r.db.Select(&cartItems[i].Images, query)
	}

	return cartItems, err
}

func (r *CartPostgres) DeleteAllCartItems(userId int) error {
	var cartId int
	getCartIdQuery := fmt.Sprintf("SELECT id FROM %s WHERE user_id = %d", cartsTable, userId)
	row := r.db.QueryRow(getCartIdQuery)

	if err := row.Scan(&cartId); err != nil {
		return err
	}

	deleteAllCartItemsQuery := fmt.Sprintf("DELETE FROM %s WHERE cart_id = %d", cartsGamesTable, cartId)
	_, err := r.db.Exec(deleteAllCartItemsQuery)
	return err
}

func (r *CartPostgres) DeleteCartItemsById(userId, cartItemId int) error {
	deleteCartItemByIDQuery := fmt.Sprintf("DELETE FROM %s cg WHERE cg.game_id = %d",
		cartsGamesTable, cartItemId)
	_, err := r.db.Exec(deleteCartItemByIDQuery)

	return err
}
