INSERT INTO users (name, admin, email, password,  phone) VALUES ('Chester Copperpot', true, 'sls@test.com', 'password',  '5555555555');
INSERT INTO users (name, admin, email, password,  phone) VALUES ('Theodore Sheckler', false, 'ted@test.com', 'password', '5555555555');
INSERT INTO users (name, admin, email, password,  phone) VALUES ('P. Newton Shandy', false, 'lawn@test.com', 'password', '5555555555');

INSERT INTO deliveries (address, zipcode, city, state, phone, date, time, quantity, total, userId) VALUES ("Somewhere Someplace", "84000", "My City", "UT", "1111111", "03/11/2020", "10:00", 2, 10, 2);
INSERT INTO deliveries (address, zipcode, city, state, phone, date, time, quantity, total, userId) VALUES ("Another place", "84000", "My City", "UT", "1111111", "03/09/2020", "11:00", 1, 10, 2);
INSERT INTO deliveries (address, zipcode, city, state, phone, date, time, quantity, total, userId) VALUES ("mars", "84000", "My City", "UT", "1111111", "03/08/2020", "06:00", 3, 10, 3);
INSERT INTO deliveries (address, zipcode, city, state, phone, date, time, quantity, total, userId) VALUES ("Mordor", "84000", "My City", "UT", "1111111", "03/18/2020", "10:00", 5, 10, 3);