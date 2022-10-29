package models

type Game struct {
	ID          int     `json:"id" db:"id"`
	Title       string  `json:"title" db:"title" binding:"required"`
	Description string  `json:"description" db:"description" binding:"required"`
	Price       float64 `json:"price" db:"price" binding:"required"`
}
