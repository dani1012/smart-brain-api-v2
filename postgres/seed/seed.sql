BEGIN TRANSACTION;

INSERT into users(name, email, entries, joined, age, hobby) values ('dani', 'dani@hotmail.com', 2, '2020-09-20', 20, 'swimming');

INSERT into login(hash, email) values ('$2a$10$KTCHxFWi12N3uCxjuD6uRuH37W4FYETJGJagOhwas7yb0yfYeXtfC', 'dani@hotmail.com');


COMMIT;