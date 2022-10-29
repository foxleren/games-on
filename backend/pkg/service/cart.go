package service

import (
	"github.com/foxleren/GamesOn/backend/pkg/repository"
)

type CartService struct {
	repo repository.Cart
}

func NewCartService(repo repository.Cart) *CartService {
	return &CartService{repo: repo}
}

func (s *CartService) CreateCart(userId int) (int, error) {
	return s.repo.CreateCart(userId)
}

func (s *CartService) ClearCart(userId int) error {
	return s.repo.ClearCart(userId)
}

func (s *CartService) CreateCartItem(userId, gameId int) error {
	return s.repo.CreateCartItem(userId, gameId)
}
