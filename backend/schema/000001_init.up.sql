CREATE TABLE users
(
    id            serial       not null unique,
    email         varchar(255) not null unique,
    password_hash varchar(255) not null
);

CREATE TABLE games
(
    id          serial       not null unique,
    title       varchar(255) not null,
    description varchar(255) not null,
    price       float(2)     not null
);