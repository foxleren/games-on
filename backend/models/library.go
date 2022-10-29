package models

type Library struct {
	Id    int     `json:"-" db:"id"`
	Games []*Game `json:"games" db:"games"`
}
