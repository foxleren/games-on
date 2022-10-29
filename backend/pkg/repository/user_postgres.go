package repository

import (
	"fmt"
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/jmoiron/sqlx"
	"github.com/siruspen/logrus"
)

type UserPostgres struct {
	db *sqlx.DB
}

func NewUserPostgres(db *sqlx.DB) *UserPostgres {
	return &UserPostgres{db: db}
}

func (r *UserPostgres) GetUserAccount(userId int) (models.User, error) {
	var user models.User
	query := fmt.Sprintf("SELECT id, email FROM %s WHERE id = $1", usersTable)
	err := r.db.Get(&user, query, userId)

	logrus.Printf("id: %s, email: %s", userId, user.Email)

	return user, err
}

func (r *UserPostgres) GetUserGames(userId int) ([]models.Game, error) {
	var games []models.Game
	query := fmt.Sprintf("SELECT games FROM %s WHERE id = $1", usersTable)
	err := r.db.Get(&games, query, userId)

	//logrus.Printf("id: %s, email: %s", userId, user.Email)

	return games, err
}
