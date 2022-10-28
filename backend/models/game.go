package models

type Game struct {
	ID          int64   `json:"id"`
	Title       string  `json:"title" binding:"required"`
	Description string  `json:"description"  binding:"required"`
	Price       float64 `json:"price" binding:"required"`
}
