CREATE DATABASE kane;

CREATE TABLE users (
	id SERIAL NOT NULL,
	name varchar NULL,
	email varchar NOT NULL,
	"password" varchar NULL,
	CONSTRAINT users_pk PRIMARY KEY (id)
);

INSERT INTO public.users
("name", email, "password")
VALUES('kane', 'kane.ly@gmail.com', '123456');
