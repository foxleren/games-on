package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func (h *Handler) getUserAccount(c *gin.Context) {
	id, err := getUserId(c)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	user, err := h.services.User.GetUserAccount(id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, user)
}

func (h *Handler) getUserGames(c *gin.Context) {
	//id, err := getUserId(c)
	//if err != nil {
	//	newErrorResponse(c, http.StatusInternalServerError, err.Error())
	//	return
	//}
	//
	//games, err := h.services.User.GetUserGames(id)
	//if err != nil {
	//	newErrorResponse(c, http.StatusInternalServerError, err.Error())
	//	return
	//}
	//
	//c.JSON(http.StatusOK, games)
}

func (h *Handler) addGameToUser(c *gin.Context) {
	//id, err := getUserId(c)
	//if err != nil {
	//	newErrorResponse(c, http.StatusInternalServerError, err.Error())
	//	return
	//}
	//
	//var input models.Game
	//if err := c.BindJSON(&input); err != nil {
	//	newErrorResponse(c, http.StatusBadRequest, err.Error())
	//	return
	//}
	//
	//gameId, err := h.services.User.addGameToUser(id, input)
	//if err != nil {
	//	newErrorResponse(c, http.StatusInternalServerError, err.Error())
	//	return
	//}
	//
	//c.JSON(http.StatusOK, games)
}
