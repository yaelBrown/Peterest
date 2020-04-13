DROP DATABASE IF EXISTS Peterest;

CREATE DATABASE Peterest;

USE Peterest;

-- users table
CREATE TABLE users (
  id INT UNSIGNED NOT NULL PRIMARY KEY auto_increment,
  username VARCHAR(50) unique,
  pw VARCHAR(100),
  isAdmin BOOLEAN NOT NULL,
  NAME VARCHAR(50)
);

INSERT INTO users (username, pw, isAdmin, NAME) VALUES ("admin", "admin", True, "Admin");
INSERT INTO users (username, pw, isAdmin, NAME) VALUES ("test", "test", False, "Test");
INSERT INTO users (username, pw, isAdmin, NAME) VALUES ("yael", "yael", False, "Yael");

-- pets table
CREATE TABLE pets (
  id INT NOT NULL PRIMARY KEY auto_increment,
  owner_id INT,
  catOrDog BOOLEAN NOT NULL,
  NAME VARCHAR(50) NOT NULL,
  birthday DATE NOT NULL,
  gender BOOLEAN NOT NULL,
  pictureUrl VARCHAR(255),
  FOREIGN KEY (owner_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO pets VALUES (2,15,1,'Fluffy','2020-02-12',1,'https://cdn2.thecatapi.com/images/MTc3NDcwNQ.jpg'),(3,15,1,'Quibbles','2020-02-12',1,'https://cdn2.thecatapi.com/images/MTc3NDcwNQ.jpg'),(5,15,0,'sniffles','2020-02-12',1,'https://cdn2.thecatapi.com/images/MTc3NDcwNQ.jpg');

-- pictures table
CREATE TABLE pictures (
  id INT NOT NULL PRIMARY KEY auto_increment,
  comments JSON,
  author_id INT(10) UNSIGNED NOT NULL,
  pet_id INT NOT NULL,
  dt DATETIME NOT NUll,
  caption VARCHAR(255),
  imgURL VARCHAR(255),
  likes INT,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);