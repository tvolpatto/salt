INSERT INTO users (client_name, business, email, client_password, client_address, phone) VALUES ('Chester Copperpot', 'Salt City Services', 'sls@test.com', 'password', '1212 Lane Lane', '5555555555');
INSERT INTO users (client_name, business, email, client_password, client_address, phone) VALUES ('Theodore Sheckler', 'Teds Movie Memorobilia', 'ted@test.com', 'password', '5151 Court Court', '5555555555');
INSERT INTO users (client_name, business, email, client_password, client_address, phone) VALUES ('P. Newton Shandy', 'Outdoor Wholesale', 'lawn@test.com', 'password', '99 Spicy Memory Drive' '5555555555');


INSERT INTO scheduling (sched_date, sched_time) VALUES ('January 1st', '11 AM');
INSERT INTO scheduling (sched_date, sched_time) VALUES ('January 15th', '2 PM');
INSERT INTO scheduling (sched_date, sched_time) VALUES ('January 30th', '4 PM');

INSERT INTO deliveries (sched_id, product_id, quantity) VALUES ('1', '1', '500');
INSERT INTO deliveries (sched_id, product_id, quantity) VALUES ('2', '2', '99');
INSERT INTO deliveries (sched_id, product_id, quantity) VALUES ('3', '3', '15');

INSERT INTO product (prod_name, price) VALUES ('Rock Salt', 8);
INSERT INTO product (prod_name, price) VALUES ('John Travoltas wig', 8000);
INSERT INTO product (prod_name, price) VALUES ('Garden Hose', 20);