### Schema

CREATE DATABASE user_db;
USE user_db;

CREATE TABLE users
(
	id int NOT NULL AUTO_INCREMENT,
	client_name varchar(255) NOT NULL,
	business BOOLEAN DEFAULT false,
	email VARCHAR (255), 
	client_password VARCHAR (255), 
	client_address varchar (255) NOT NULL, 
	phone int (11) NOT NULL, 
	PRIMARY KEY (id)
);

###

CREATE DATABASE schedule_db; 
USE schedule_db; 

CREATE TABLE scheduling
(
	id int NOT NULL AUTO_INCREMENT, 
	sched_date VARCHAR (20), 
	sched_time VARCHAR (10), 
	PRIMARY KEY (id)
); 

###

CREATE DATABASE delivery_db; 
USE delivery_db; 

CREATE TABLE deliveries
(
	id int NOT NULL AUTO_INCREMENT, 
	sched_id VARCHAR (255) NOT NULL, 
	product_id VARCHAR (255) NOT NULL, 
	quantity INT (100) NOT NULL
); 

###

CREATE DATABASE product_db; 
USE product_db; 

CREATE TABLE product
(
	id int NOT NULL AUTO_INCREMENT, 
	prod_name VARCHAR (255) NOT NULL, 
	price int (100) NOT NULL
); 