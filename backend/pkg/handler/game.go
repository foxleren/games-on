package handler

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/gin-gonic/gin"
	"net/http"
)

func (h *Handler) createGame(c *gin.Context) {
	//id, ok := c.Get(userCtx)
	//if !ok {
	//	newErrorResponse(c, http.StatusInternalServerError, "user not found")
	//	return
	//}

	var input models.Game
	if err := c.BindJSON(&input); err != nil {
		newErrorResponse(c, http.StatusBadRequest, err.Error())
		return
	}

	id, err := h.services.CreateGame(input)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"id": id,
	})
}

func (h *Handler) buyGame(c *gin.Context) {

}

func (h *Handler) getGameByID(c *gin.Context) {

}

func (h *Handler) getAllGames(c *gin.Context) {

}
