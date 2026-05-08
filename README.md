

# API - SERVIDO - APP 
# 🍔 EXEMPLO (Hamburgueria)



# 📱 APP MOBILE = CLIENTE

No celular:

-   pede comida
-   vê cardápio
-   adiciona pedido

O app NÃO sabe cozinhar.

Ele só FAZ PEDIDOS.

----------

# 👨‍🍳 API = COZINHA / GARÇOM

A API:

-   recebe pedidos
-   organiza
-   conversa com banco
-   devolve resposta

Ela é o “intermediário inteligente”.

----------

# 🗄️ BANCO = ESTOQUE / CADERNO

O banco:

-   guarda dados
-   salva tudo
-   lembra dos pedidos
-   devolve quando for pedido

# 🎬 NO PROJETO DE VOCÊS



# 📱 MOBILE

```javascript
fetch(API)
```

O celular está dizendo:

> “API, me manda os filmes”

----------

# 🌐 API

```javascript
app.get("/filmes")
```

A API responde:

> “Banco, me passa os filmes”

----------

# 🗄️ MYSQL

```sql
SELECT * FROM filmes;
```

Banco responde:

> “Aqui estão”

----------

# 🌐 API

Transforma em JSON:

```javascript
[  
  { 
    "nome":"Batman",    
     "ano":2022 
  }
]
```

----------

# 📱 MOBILE

Recebe e mostra:

```javascript
setFilmes(dados)
```

# 💡 O MAIOR PROBLEMA

Como vocês enxergam:

```
App → magia → aparece filme
```

Mas precisam enxergar:

```
					App 
					 ↓
					HTTP 
					 ↓
					API 
					 ↓
					SQL 
					 ↓
					Banco 
					 ↓
					Resposta JSON 
					 ↓
					Tela
```

----------

![enter image description here](https://private-user-images.githubusercontent.com/125823124/589240051-3ebef9d3-c3d2-44ab-b758-9961cec72986.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzgxOTkyNzYsIm5iZiI6MTc3ODE5ODk3NiwicGF0aCI6Ii8xMjU4MjMxMjQvNTg5MjQwMDUxLTNlYmVmOWQzLWMzZDItNDRhYi1iNzU4LTk5NjFjZWM3Mjk4Ni5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUwOFQwMDA5MzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZjFlNTRjNjA3YmU3MWU5MDc3MWIxNDY1Y2MyZjVjNDQzYjc5YjdhMjhkYmUxMTMxMTIxY2NlODNiYmFkM2U0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.xBvjDghxfKi-FYdvM_F0FrqsVNOtRuOxDInqVI_Hj24)

-----------

🚀 TABELA PERFEITA
| Verbo |Ação| SQL | Exemplo |
|--|--|--|--|
|GET  | Buscar |SELECT|  Ver filmes|
| POST |Criar| INSERT |  Adicionar filme|
| PUT |Atualizar|UPDATE| Editar filme |
| DELETE |Excluir|DELETE| Remover filme |
--------


# 👉 O verbo diz o que queremos fazer



# 🌐 MESMA ROTA

Pode fazer coisas diferentes.

----------

# EXEMPLO

```
/filmes
```

----------

# GET /filmes

👉 buscar filmes

----------

# POST /filmes

👉 adicionar filme

----------

# PUT /filmes/1

👉 editar filme 1

----------

# DELETE /filmes/1

👉 excluir filme 1

----------

# 🤯 ISSO É O QUE MAIS CONFUNDE

Voçês acham:

-   rota diferente
-   URL diferente

Mas:

# o verbo muda o comportamento
# 🎬 API = PORTA

A rota:

```
/filmes
```

é a porta.

----------

# 🚶 O VERBO DIZ O QUE A PESSOA VAI FAZER



# 🚶 GET     “vim olhar”


# 🚶 POST   “vim adicionar”


# 🚶 PUT   “vim alterar”


# 🚶 DELETE  “vim remover”




# 🚀 OUTRA COISA IMPORTANTE



# ❌ MOBILE NÃO ACESSA MYSQL DIRETO



## 💥 ISSO CONFUNDE MUITO

Muitos pensam:

```
Celular → Banco
```

----------

# ✅ Veja

O celular:

-   NÃO sabe SQL
-   NÃO acessa banco
-   NÃO deve acessar

Quem conversa com banco:

-   é a API

----------

# 🎯 FRASE BOA PRA FIXAR

> “A API é o tradutor entre o app e o banco”
------------

# “Raio-X do Sistema”

Quando clicar no botão:

```
				[APP]
			enviando POST...
				[API]
			recebi requisição...
				[MYSQL]
			salvando...
				[API]
			devolvendo resposta...
				[APP]
			atualizando tela...
```

----------------------

![enter image description here](https://private-user-images.githubusercontent.com/125823124/589239886-0a7717ab-af78-4be4-bd53-9ccd4c53d3f9.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzgxOTkyNjAsIm5iZiI6MTc3ODE5ODk2MCwicGF0aCI6Ii8xMjU4MjMxMjQvNTg5MjM5ODg2LTBhNzcxN2FiLWFmNzgtNGJlNC1iZDUzLTljY2Q0YzUzZDNmOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwNTA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDUwOFQwMDA5MjBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NmUwOGU1NTA1ZjQ5MTI3MDI4NDdiN2UwZjdlOTA3NDE2MWZlODFiNDc2YTFiYjhlMmUyMGMyODdmYmRiMjY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZyZXNwb25zZS1jb250ZW50LXR5cGU9aW1hZ2UlMkZwbmcifQ.naxLVBsuiIB-lkTn3vXSuNRQI7mTv27BDdDl0z79uu4)
