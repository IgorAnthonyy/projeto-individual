create database codecraft;


use codecraft;


create table usuario (
idUsuario int primary key auto_increment,
email varchar(100) UNIQUE,
senha char(20),
nome varchar(45),
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

INSERT INTO quizHtml (qtdDeAcertos, qtdDeErros) VALUES (2, 5);

select * from usuario;	


select * from quizcss;

select count(idTentativa) from quizHtml; 