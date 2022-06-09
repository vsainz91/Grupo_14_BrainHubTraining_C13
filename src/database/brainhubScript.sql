
-- Host: localhost    Database: brainhub_db

-- brainhub_db.categories definition

CREATE TABLE `categories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `course_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- brainhub_db.course_images definition

CREATE TABLE `course_images` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- brainhub_db.courses definition

CREATE TABLE `courses` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` int(11) NOT NULL,
  `price` int(10) unsigned NOT NULL,
  `description` text NOT NULL,
  `instructor` varchar(100) NOT NULL,
  `practice_time` int(10) unsigned NOT NULL,
  `lessons` int(10) unsigned NOT NULL,
  `content_hours` int(11) NOT NULL,
  `category_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- brainhub_db.users definition

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

CREATE TABLE `users_rol` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol_name` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;