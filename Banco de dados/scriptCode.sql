create database codecraft;
use codecraft;

create table usuario (
idUsuario int primary key auto_increment,
email varchar(100),
senha char(20),
telefone char(11)
);

create table quizHtml (
idTentativa int primary key auto_increment,
qtdDeAcertos int,
qtdDeErros int,
fkUsuario int,
constraint fkUhtml foreign key (fkUsuario)
	references usuario(idUsuario)
);
create table quizCss (
idTentativa int primary key auto_increment,
qtdDeAcertos int,
qtdDeErros int,
fkUsuario int,
constraint fkUcss foreign key (fkUsuario)
	references usuario(idUsuario)
);
create table quizJs (
idTentativa int primary key auto_increment,
qtdDeAcertos int,
qtdDeErros int,
fkUsuario int,
constraint fkUjs foreign key (fkUsuario)
	references usuario(idUsuario)
);


select * from usuario;