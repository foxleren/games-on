package repository

import (
	"fmt"
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

func (r *CartPostgres) ClearCart(userId int) error {
	clearCartQuery := fmt.Sprintf("UPDATE %s SET total_price = 0 WHERE user_id = %d", cartsTable, userId)

	_, err := r.db.Exec(clearCartQuery)
	return err
}

//func (r *CartPostgres) CreateCart(userId int) (int, error) {
//	tx, err := r.db.Begin()
//	if err != nil {
//		return 0, err
//	}
//
//	var id int
//	createCartQuery := fmt.Sprintf("INSERT INTO %s (user_id, total_price) VALUES ($1, $2) RETURNING id", cartsTable)
//	row := tx.QueryRow(createCartQuery, userId, 0)
//
//	if err := row.Scan(&id); err != nil {
//		tx.Rollback()
//		return 0, err
//	}
//
//	createUsersCartQuery := fmt.Sprintf("INSERT INTO %s (user_id, cart_id) VALUES ($1, $2)", usersCartsTable)
//	_, err = tx.Exec(createUsersCartQuery, userId, id)
//	if err != nil {
//		tx.Rollback()
//		return 0, err
//	}
//	return id, tx.Commit()
//}
