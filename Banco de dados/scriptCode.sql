drop database codecraft;

use codecraft;

create table endereco (
idEndereco int primary key auto_increment,
cep char(9),
uf varchar(20),
cidade varchar(45),
bairro varchar(45),
rua varchar(45),
complemento varchar(45)
);

create table usuario (
idUsuario int primary key auto_increment,
email varchar(100),
senha char(20),
nome varchar(45),
telefone char(11),
fkEndereco int,
constraint fkUsuarioEndereco foreign key (fkEndereco)
	references endereco(idEndereco)
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

INSERT INTO endereco (idEndereco, cep, uf, cidade, bairro, rua, complemento) VALUES
(1, '12345-678', 'Estado1', 'Cidade1', 'Bairro1', 'Rua1', 'Complemento1'),
(2, '98765-432', 'Estado2', 'Cidade2', 'Bairro2', 'Rua2', 'Complemento2'),
(3, '54321-876', 'Estado3', 'Cidade3', 'Bairro3', 'Rua3', 'Complemento3'),
(4, '24680-135', 'Estado4', 'Cidade4', 'Bairro4', 'Rua4', 'Complemento4'),
(5, '11111-222', 'Estado5', 'Cidade5', 'Bairro5', 'Rua5', 'Complemento5');

INSERT INTO usuario (email, senha, nome, telefone, fkEndereco) VALUES
('usuario1@example.com', 'senha1', 'Usuário 1', '11111111111', 1),
('usuario2@example.com', 'senha2', 'Usuário 2', '22222222222', 2),
('usuario3@example.com', 'senha3', 'Usuário 3', '33333333333', 3),
('usuario4@example.com', 'senha4', 'Usuário 4', '44444444444', 4),
('usuario5@example.com', 'senha5', 'Usuário 5', '55555555555', 5);

select * from usuario;