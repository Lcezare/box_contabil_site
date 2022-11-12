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

# Acessar banco de dados pelo terminal
mysql -u root -p usuarios < database_name. sql