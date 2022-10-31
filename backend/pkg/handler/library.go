package handler

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func (h *Handler) addGamesToLibrary(c *gin.Context) {
	userId, err := getUserId(c)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	err = h.services.Library.AddGamesToLibrary(userId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"request": "add games to library",
	})
}

func (h *Handler) getLibraryGames(c *gin.Context) {
	var games []models.Game
	userId, err := getUserId(c)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}
	games, err = h.services.Library.GetAllLibraryGames(userId)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, games)
}
