package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
) 

func main() {
	r := gin.Default()
	
	v1 := r.Group("/v1/api")
	{
		v1.GET("/demo", func (c *gin.Context) {
			c.JSON(http.StatusOK, gin.H {
				"message": "Hello World",
			})
		})
	
	} 
	

	r.Run(":8000")
}

