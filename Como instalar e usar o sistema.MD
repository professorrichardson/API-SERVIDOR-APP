# 🎬 Projeto Web API + Mobile + MySQL

Sistema completo usando:

✅ MySQL  
✅ Node.js + Express  
✅ React Native com Expo  
✅ API REST  
✅ CRUD completo de filmes

----------

# 📁 Estrutura do Projeto

O repositório possui duas pastas:

```
APIfilmesReal
```

👉 Servidor/API (Node + Express + MySQL)

----------

```
APIfilmesRealmobile
```

👉 Aplicativo Mobile (React Native + Expo)

----------

# 🚀 PASSO 1 — Clonar o  esse Repositório

```
git clone https://github.com/professorrichardson/API-SERVIDOR-APP.git
```

Entre na pasta:

```
cd API-SERVIDOR-APP
```

----------

# 🗄️ PASSO 2 — Criar Banco de Dados no MySQL

Abra o:

-   MySQL Workbench  
    OU
-   terminal MySQL

----------

# ✅ Criar Database

```sql
CREATE DATABASE filmes_db;
```

----------

# ✅ Usar Banco

```sql
USE filmes_db;
```

----------

# ✅ Criar Tabela

```sql
CREATE TABLE filmes (  
id INT AUTO_INCREMENT PRIMARY KEY,  
nome VARCHAR(255),  
ano INT,  
genero VARCHAR(100),  
capa TEXT
);
```

----------

# 🔥 TESTE

No Workbench:

Atualize os schemas.

Você deverá ver:

```sql
filmes_db
```

e dentro:

```sql
tabela filmes
```

----------

# ⚙️ PASSO 3 — Configurar o Servidor

Entre na pasta:

```bash
cd APIfilmesReal
code .
```

----------

# 📄 Abrir Arquivo

```bash
db.js
```

----------

# ✏️ Alterar Usuário e Senha do MySQL

Procure:

```bash
user: "root",
password: ""
```

----------

# ✅ Exemplo

```javascript
const mysql = require("mysql2");
const conexao = mysql.createConnection({ 
 host: "localhost",  
 user: "root",  
 password: "APAGUE_E_COLOQUE_SUA_SENHA_AQUI",  
 database: "filmes_db"
 });
 module.exports = conexao;
```

----------

# 📦 PASSO 4 — Instalar Pacotes do Servidor

Ainda dentro da pasta:

```bash
APIfilmesReal
```

Execute:

```bash
npm install
```

----------

# 🚀 PASSO 5 — Iniciar Servidor

Execute:

```bash
node server.js
```

----------

# ✅ SE TUDO DER CERTO

Aparecerá algo parecido:

```bash
Servidor rodando na porta 3000
Banco conectado
```

----------

# 🧪 PASSO 6 — Testar API no Navegador

Abra:

```
http://localhost:3000/filmes
```

----------

# ✅ Resultado esperado

```
[]
```

ou lista de filmes.

----------

# 📱 PASSO 7 — Configurar App Mobile

Abra outro terminal.

Entre na pasta:

```bash
cd APIfilmesRealmobile
code .
```

----------

# 📦 Instalar Pacotes do App

```
npm install
```

----------

# 🤖 PASSO 8 — Abrir Emulador Android

Abra o Android Studio.

Depois:

✅ Device Manager  
✅ Inicie o emulador Android

Espere ele abrir completamente.

----------

# 🌐 PASSO 9 — Verificar IP da API

No emulador Android usamos:

```
http://10.0.2.2:3000/filmes
```

----------

# 📄 Verifique no App

Abra o arquivo:

```bash
App.js
```

----------

# ✅ A URL deve estar assim:

```javascript
const API = "http://10.0.2.2:3000/filmes";
```

----------

# 🚀 PASSO 10 — Iniciar Projeto Expo

Ainda dentro da pasta mobile:

```bash
npx expo start -c
```

----------

# 🔥 O QUE O COMANDO FAZ?

```bash
-c
```

limpa o cache do Expo.

Isso evita muitos erros.

----------

# 📱 PASSO 11 — Abrir no Emulador

Quando o Expo abrir:

Pressione:

```bash
A
```

----------

# ✅ O APP ABRIRÁ NO EMULADOR

Agora o sistema estará conectado:

```
APP → API → MYSQL
```

----------

# 🎬 FUNCIONALIDADES

✅ Listar filmes  
✅ Adicionar filmes  
✅ Excluir filmes  
✅ Mostrar imagens  
✅ Comunicação com API real  
✅ Dados salvos no MySQL
