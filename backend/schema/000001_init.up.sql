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

CREATE TABLE carts
(
    id          serial   not null unique,
    user_id     serial   not null unique,
    total_price float(2) not null
);

CREATE TABLE carts_games
(
    user_id int references users (id) on delete cascade not null,
    cart_id int references carts (id) on delete cascade not null,
    game_id int references games (id) on delete cascade not null,
    PRIMARY KEY (cart_id, game_id)
);

CREATE TABLE library
(
    user_id int references users (id) on delete cascade not null,
    game_id int references games (id) on delete cascade not null,
    PRIMARY KEY (user_id, game_id)
);

CREATE TABLE games_images
(
    game_id int references games (id) on delete cascade not null,
    image   varchar(255)                                not null
);