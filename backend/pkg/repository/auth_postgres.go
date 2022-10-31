package repository

import (
	"fmt"
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/jmoiron/sqlx"
)

type AuthPostgres struct {
	db *sqlx.DB
}

func NewAuthPostgres(db *sqlx.DB) *AuthPostgres {
	return &AuthPostgres{db: db}
}

func (p *AuthPostgres) CreateUser(user models.User) error {
	query := fmt.Sprintf("INSERT INTO %s (email, password_hash) values ($1, $2) RETURNING id", usersTable)
	err := p.db.QueryRow(query, user.Email, user.Password)

	return err.Err()
}

func (p *AuthPostgres) GetUser(email, password string) (models.User, error) {
	var user models.User
	query := fmt.Sprintf("SELECT id FROM %s WHERE email=$1 AND password_hash=$2", usersTable)
	err := p.db.Get(&user, query, email, password)

	return user, err
}
