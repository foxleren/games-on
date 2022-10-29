package handler

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func (h *Handler) createCart(c *gin.Context) {
	id, err := getUserId(c)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	cartId, err := h.services.Cart.CreateCart(id)
	if err != nil {
		newErrorResponse(c, http.StatusInternalServerError, err.Error())
		return
	}

	c.JSON(http.StatusOK, map[string]interface{}{
		"cart_id": cartId,
	})
}
