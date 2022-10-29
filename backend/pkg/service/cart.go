package service

import (
	"github.com/foxleren/GamesOn/backend/models"
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

func (s *CartService) UpdateCart(userId int, cart *models.Cart) error {
	return s.repo.UpdateCart(userId, cart)
}

func (s *CartService) CreateCartItem(userId, gameId int) error {
	return s.repo.CreateCartItem(userId, gameId)
}

func (s *CartService) GetAllCartItems(userId int) ([]models.Game, error) {
	return s.repo.GetAllCartItems(userId)
}

func (s *CartService) DeleteAllCartItems(userId int) error {
	return s.repo.DeleteAllCartItems(userId)
}

func (s *CartService) DeleteCartItemsById(userId, cartItemId int) error {
	return s.repo.DeleteCartItemsById(userId, cartItemId)
}
