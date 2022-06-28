
-- Host: localhost    Database: brainhub_db

-- brainhub_db.categories definition

DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--  Auto-generated SQL script #202206091730
INSERT INTO brainhub_db.categories (name)
	VALUES ('Idiomas');
INSERT INTO brainhub_db.categories (name)
	VALUES ('Programacion');


-- brainhub_db.courses definition
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(11) unsigned NOT NULL,
  `description` text NOT NULL,
  `instructor` varchar(100) NOT NULL,
  `practice_time` int(10) unsigned NOT NULL,
  `lessons` int(10) unsigned NOT NULL,
  `content_hours` int(11) NOT NULL,
  `courses_images_id` int(10) null,
  `category_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
  KEY `courses_FK` (`category_id`),
  CONSTRAINT `courses_FK` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Curso Completo de Ingles: Iniciacion', 3500, 'Curso completo de ingl�s para dominar la gram�tica, traducci�n, conversaci�n, vocabulario, pronunciaci�n y mucho m�s.', 'Mark Thompson', 16, 28, 2, 1, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Portugu�s de Brasil b�sico', 4050, 'Este curso est� dise�ado para hispanohablantes y ense�a de forma objetiva, con explicaciones claras y concisas, el idioma portugu�s', 'Joao Fernandez', 25, 73, 4, 1, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Aprender Chino a la primera', 5500, 'Curso de chino. Empieza desde cero y habla desde el primer v�deo de la forma m�s din�mica y divertida.', 'Ariel Lin', 41, 210, 14, 1, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Curso de Introducci�n a React.js', 4500, 'Trabaja con componentes, propiedades, estado y efectos. Almacena tu informaci�n en Local Storage, implementa React Context para comunicar componentes y teletransporta componentes con React Portals. Crea tu primer proyecto web con React junto a tu profesor.', 'Pepita Perez', 14, 21, 5, 2, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('C�mo y Por Qu� Aprender Data Science e Inteligencia Artificial', 5000, 'Conoce c�mo iniciar una carrera en data science e inteligencia artificial entendiendo c�mo funciona esta �rea de la tecnolog�a, qu� oportunidades tiene y qu� caminos seguir para conseguir tu primer trabajo en datos.', 'Mariano Rodriguez', 12, 22, 2, 2, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Curso de Backend con Node.js: API REST con Express.js', 5300, 'Trabaja con rutas, servidores y middlewares de Express.js. Construye una API, manipula errores y haz validaci�n de datos. Despliega tu aplicaci�n a producci�n en Heroku.', 'Juan Garc�a', 12, 25, 3, 2, NULL);


-- brainhub_db.courses_images definition
DROP TABLE IF EXISTS `courses_images`;
CREATE TABLE `courses_images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image_name` varchar(100) NOT NULL,
  `course_id` int(10) NOT null,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--  Auto-generated SQL script #202206091725
INSERT INTO brainhub_db.courses_images (image_name,course_id)
	VALUES ('curso-english1.jpg',1);
INSERT INTO brainhub_db.courses_images (image_name,course_id)
	VALUES ('curso-portugues.jpg',2);
INSERT INTO brainhub_db.courses_images (image_name,course_id)
	VALUES ('curso-chino1.jpg',3);
INSERT INTO brainhub_db.courses_images (image_name,course_id)
	VALUES ('curso-reactjs1.png',4);
INSERT INTO brainhub_db.courses_images (image_name,course_id)
	VALUES ('curso-DataScience.jpg',5);
INSERT INTO brainhub_db.courses_images (image_name,course_id)
	VALUES ('curso-Nodejs.jpg',6);

-- brainhub_db.users_rol definition
DROP TABLE IF EXISTS `users_rols`;
CREATE TABLE `users_rols` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--  Auto-generated SQL script #202206091748
INSERT INTO brainhub_db.users_rols (rol_name)
	VALUES ('USER');
INSERT INTO brainhub_db.users_rols (rol_name)
	VALUES ('ADMIN');

-- brainhub_db.users definition
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE brainhub_db.users ADD CONSTRAINT users_FK FOREIGN KEY (rol_id) REFERENCES brainhub_db.users_rol(id);

DROP TABLE IF EXISTS `users_courses`;
CREATE TABLE brainhub_db.users_courses (
	id INT UNSIGNED auto_increment NOT NULL,
	user_id INT UNSIGNED NOT NULL,
	course_id INT UNSIGNED NOT NULL,
	CONSTRAINT users_courses_pk PRIMARY KEY (id),
	CONSTRAINT users_courses_FK FOREIGN KEY (user_id) REFERENCES brainhub_db.users(id),
	CONSTRAINT users_courses_FK_1 FOREIGN KEY (course_id) REFERENCES brainhub_db.courses(id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci;


