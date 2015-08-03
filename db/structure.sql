drop table if exists users;
create table users (
  id serial primary key,
  name varchar(255),
  email_address varchar(255),
  password_hash varchar(255),
  created_at timestamp,
  updated_at timestamp,
  picture_url varchar(255)
);

drop table if exists game;
create table game (
	id serial primary key,
	game_name varchar(255),
	paired boolean,
	created_at timestamp
);

drop table if exists players;
create table players (
  id serial primary key,
  player_name varchar(255),
  gameid int,
  santa_for int,
  email_address varchar(255)
);

