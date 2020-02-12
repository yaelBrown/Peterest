drop database if exists Peterest;

create database Peterest;

use Peterest;

create table users (
  id int UNSIGNED not null primary key auto_increment,
  username varchar(50) unique,
  pw varchar(100),
  isAdmin boolean not null,
  name varchar(50)
);

insert into users (username, pw, isAdmin, name) values ("admin", "admin", True, "Admin");
insert into users (username, pw, isAdmin, name) values ("test", "test", False, "Test");
insert into users (username, pw, isAdmin, name) values ("yael", "yael", False, "Yael");