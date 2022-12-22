# GamesOn 

## Current status: MVP

## [MVP demo](https://games-on-dev.vercel.app/)

Platform for selling indie games.

# Run

To run application you need:
- .env file

## Env configuration

To run API locally you should create your own .env file in the ```backend``` directory  
Example `.env`:

```env
DB_PASSWORD=password
SALT_KEY=salted_key
SIGNING_KEY=signing_key
DOMAIN=domain
```

## Local run

```
> make migrate-up
> make run
```

# API

Base url: `<host>:8000/api/`

API documentation can be found [soon...]()

# Implementation

- REST API
- Clean architecture design
- Using PostgreSQL as a main data storage
- Env based application configuration
- Automatically generated Swagger API docs (soon...)
- Run with docker-compose
- Full automated CI/CD process (soon...)
- React.js frontend (*in progress*)

### Project structure

```
.
├── backend
│        ├── cmd    // entry point
│        ├── configs 
│        ├── models // models for api
│        ├── pkg
│        │     ├── handler     // http handlers layer
│        │     ├── repository  // database repository layer
│        │     ├── service     // business logic services layer
│        ├── schema     // migrations  
```

# Diagram
