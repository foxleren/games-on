package main

import (
	"github.com/foxleren/GamesOn/backend/models"
	"github.com/foxleren/GamesOn/backend/pkg/handler"
	"github.com/siruspen/logrus"
	"github.com/spf13/viper"
)

func main() {
	logrus.SetFormatter(&logrus.JSONFormatter{})
	if err := initConfig(); err != nil {
		logrus.Fatalf("Caught error while initializing config: ", err.Error())
	}

	handlers := handler.NewHandler()

	srv := new(models.Server)
	if err := srv.Run(viper.GetString("port"), handlers.InitRoutes()); err != nil {
		logrus.Fatalf("Caught error while running http server: ", err.Error())
	}
}

func initConfig() error {
	viper.AddConfigPath("configs")
	viper.SetConfigName("config")

	return viper.ReadInConfig()
}
