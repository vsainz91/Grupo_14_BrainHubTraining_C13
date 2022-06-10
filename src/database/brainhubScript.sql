
-- Host: localhost    Database: brainhub_db

-- brainhub_db.categories definition

DROP TABLE IF EXISTS `categories`];
CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--  Auto-generated SQL script #202206091730
INSERT INTO brainhub_db.categories (name)
	VALUES ('Idiomas');
INSERT INTO brainhub_db.categories (name)
	VALUES ('Programacion');


-- brainhub_db.course_images definition
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


-- brainhub_db.courses definition
DROP TABLE IF EXISTS `courses`;
CREATE TABLE `courses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(55) NOT NULL,
  `price` int(11) unsigned NOT NULL,
  `description` text NOT NULL,
  `instructor` varchar(100) NOT NULL,
  `practice_time` int(10) unsigned NOT NULL,
  `lessons` int(10) unsigned NOT NULL,
  `content_hours` int(11) NOT NULL,
  `courses_images_id` int(10) null,
  `category_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Curso Completo de Inglés: Iniciación', 3500, 'Curso completo de inglés para dominar la gramática, traducción, conversación, vocabulario, pronunciación y mucho más.', 'Mark Thompson', 16, 28, 2, 1, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Portugués de Brasil básico', 4050, 'Este curso está diseñado para hispanohablantes y enseña de forma objetiva, con explicaciones claras y concisas, el idioma portugués', 'Joao Fernandez', 25, 73, 4, 1, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Aprender Chino a la primera', 5500, 'Curso de chino. Empieza desde cero y habla desde el primer vídeo de la forma más dinámica y divertida.', 'Ariel Lin', 41, 210, 14, 1, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Curso de Introducción a React.js', 4500, 'Trabaja con componentes, propiedades, estado y efectos. Almacena tu información en Local Storage, implementa React Context para comunicar componentes y teletransporta componentes con React Portals. Crea tu primer proyecto web con React junto a tu profesor.', 'Pepita Perez', 14, 21, 5, 2, NULL);
INSERT INTO brainhub_db.courses
( name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Cómo y Por Qué Aprender Data Science e Inteligencia Artificial', 5000, 'Conoce cómo iniciar una carrera en data science e inteligencia artificial entendiendo cómo funciona esta área de la tecnología, qué oportunidades tiene y qué caminos seguir para conseguir tu primer trabajo en datos.', 'Mariano Rodriguez', 12, 22, 2, 2, NULL);
INSERT INTO brainhub_db.courses
(name, price, description, instructor, practice_time, lessons, content_hours, category_id, courses_images_id)
VALUES('Curso de Backend con Node.js: API REST con Express.js', 5300, 'Trabaja con rutas, servidores y middlewares de Express.js. Construye una API, manipula errores y haz validación de datos. Despliega tu aplicación a producción en Heroku.', 'Juan García', 12, 25, 3, 2, NULL);


-- brainhub_db.users definition
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `pass` varchar(100) NOT NULL,
  `course_id` int(11) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- brainhub_db.users_rol definition
DROP TABLE IF EXISTS `users_rol`;
CREATE TABLE `users_rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--  Auto-generated SQL script #202206091748
INSERT INTO brainhub_db.users_rol (rol_name)
	VALUES ('USER');
INSERT INTO brainhub_db.users_rol (rol_name)
	VALUES ('ADMIN');


