# Selecionar banco de dados
USE nome_do_banco

# Mostrar tabelas
show tables;

# Mostrar dados de uma tabelas
SELECT * FROM nome_da_tabela

# Atualizar registro
UPDATE usuarios SET nome = "Nome de Teste" WHERE nome = "Luis Silva";

# Deletar registro
DELETE FROM usuarios WHERE nome = "Victor";

# Criar tabelas
CREATE TABLE usuarios (
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Leonardo",
    "Lcezare@gmail.com",
    33    
);

# Criar novo Banco de dados
CREATE DATABASE nome_do_banco;


