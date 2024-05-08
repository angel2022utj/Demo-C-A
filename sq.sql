create database Demo;

create table producto(
	id_producto  int auto_increment not null primary key,
    nombre varchar(255) not null,
    precio varchar(255) not null
);

create table detalle_producto(
	id_detalle int auto_increment not null primary key,
    id_producto int not null,
    color varchar(255) not null,
    imagen  varchar(255) not null
)