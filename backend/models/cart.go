package models

type Cart struct {
	Id         int        `json:"-" db:"id"`
	TotalPrice string     `json:"total_price"`
	CartItems  []CartItem `json:"cart_items"`
}

type CartItem struct {
	Id int `json:"id" db:"id"`
}
