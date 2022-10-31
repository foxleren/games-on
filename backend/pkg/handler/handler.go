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

func CORS() gin.HandlerFunc {
	return func(c *gin.Context) {

		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "*")
		/*
		   c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		   c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		   c.Writer.Header().Set("Access-Control-Allow-Headers", "access-control-allow-origin, access-control-allow-headers")
		   c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, DELETE, OPTIONS, PATCH")
		*/

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func (h *Handler) InitRoutes() *gin.Engine {
	router := gin.Default()

	router.Use(CORS())
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
