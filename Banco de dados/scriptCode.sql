create database codecraft;


use codecraft;

create table endereco (
idEndereco int primary key auto_increment,
cep char(9),
uf varchar(20),
cidade varchar(45),
bairro varchar(45),
rua varchar(45),
complemento varchar(45),
fkUsuario int,
constraint fkUsuarioforeign foreign key (fkUsuario)
	references usuario(idUsuario)
);

create table usuario (
idUsuario int primary key auto_increment,
email varchar(100),
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

select * from usuario;
