package models

type Cart struct {
	Id         int        `json:"-" db:"id"`
	TotalPrice string     `json:"total_price"`
	CartItems  []CartItem `json:"cart_items"`
}

type CartItem struct {
	Id          int     `json:"id" db:"id"`
	ID          int     `json:"id" db:"id"`
	Title       string  `json:"title" db:"title" binding:"required"`
	Description string  `json:"description" db:"description" binding:"required"`
	Price       float64 `json:"price" db:"price" binding:"required"`
}
