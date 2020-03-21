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

create table pets (
  id int not null primary key auto_increment,
  owner_id int,
  catOrDog boolean NOT NULL,
  name varchar(50) not null,
  birthday DATE not null,
  gender boolean not null,
  pictureUrl varchar(255),
  FOREIGN KEY (owner_id) REFERENCES users(id)
);

INSERT INTO pets VALUES (2,15,1,'Fluffy','2020-02-12',1,'https://cdn2.thecatapi.com/images/MTc3NDcwNQ.jpg'),(3,15,1,'Quibbles','2020-02-12',1,'https://cdn2.thecatapi.com/images/MTc3NDcwNQ.jpg'),(5,15,0,'sniffles','2020-02-12',1,'https://cdn2.thecatapi.com/images/MTc3NDcwNQ.jpg');