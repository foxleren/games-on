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
	router := gin.Default()

	router.Use(CORSMiddleware())
	auth := router.Group("/auth")
	{
		auth.POST("/sign-up", h.signUp)
		auth.POST("/sign-in", h.signIn)
	}

	api := router.Group("/api")
	{
		authenticated := api.Group("/user", h.userIdentity)
		{
			authenticated.GET("/", h.getUserAccount)
			games := authenticated.Group("/games")
			{
				games.POST("/", h.addGameToUser)
				games.GET("/", h.getUserGames)
			}
			cart := authenticated.Group("/cart")
			{
				cart.POST("/", h.createCart)
				cart.PUT("/", h.updateCart)

				items := cart.Group("/items")
				{
					items.POST("/:id", h.createCartItem)
					items.GET("/", h.getAllCartItems)
					items.DELETE("/:id", h.deleteCartItemByID)
					items.DELETE("/", h.deleteAllCartItems)
				}
			}
			library := authenticated.Group("/library")
			{

				library.POST("/", h.addGamesToLibrary)
				library.GET("/", h.getLibraryGames)
			}
		}
		games := api.Group("/games")
		{
			games.POST("/", h.createGame)
			games.GET("/", h.getAllGames)
			games.GET("/:id", h.getGameByID)
		}
	}

	return router
}
