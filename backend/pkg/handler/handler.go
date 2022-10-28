package handler

import (
	"github.com/foxleren/GamesOn/backend/pkg/service"
	"github.com/gin-gonic/gin"
)

type Handler struct {
	services *service.Service
}

func NewHandler(s *service.Service) *Handler {
	return &Handler{services: s}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.New()

	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", h.signUp)
		auth.POST("/sign-in", h.signIn)
	}

	api := router.Group("/api", h.userIdentity)
	{
		games := api.Group("/games")
		{
			games.GET("/", h.getAllGames)
			games.GET("/:id", h.getGameByID)
		}
	}

	return router
}
