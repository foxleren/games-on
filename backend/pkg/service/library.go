package service

import "github.com/foxleren/GamesOn/backend/pkg/repository"

type LibraryService struct {
	repo repository.Library
}

func NewLibraryService(repo repository.Library) *LibraryService {
	return &LibraryService{repo: repo}
}

func (s *LibraryService) AddGamesToLibrary(userId int) error {
	return s.repo.AddGamesToLibrary(userId)
}
