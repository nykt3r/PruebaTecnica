# 🚗 API Carros

Resolución de prueba técnica Backend Middle (Cars). Se encarga de gestionar un catálogo de automóviles incluyendo una conexión a una base de datos relacional SQL (MySQL) y una API RESTful.

## 🧾 Tabla de contenido

- [🚗 API Carros](#-api-carros)
  - [🧾 Tabla de contenido](#-tabla-de-contenido)
  - [🛠️ Instalación](#️-instalación)
  - [🕹️ Uso](#️-uso)
  - [✨ Características](#-características)
  - [🧰 Tecnologías](#-tecnologías)
  - [👨‍💻 Autores](#-autores)

## 🛠️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/nykt3r/PruebaTecnica.git
cd PruebaTecnica
```

## 🕹️ Uso 
**NOTA** Debes tener instalado Docker en tu máquina.

Una vez estés en la carpeta main, ejecuta:

```bash
docker compose build
```

**Espera la ejecucion del build** y posterior a ello, ejecuta:

```bash
docker compose up
```

Con esto tendrás dos contenedores corriendo:
La base de datos estará ejecutándose en el puerto **3307**
La app node con la API estará ejecutándose en el puerto **8020**

Y eso es todo!
Ve a probar los endpoints partiendo de **localhost:8020/api/carros**
No olvides el endpoint **/usuario** que permite **/registrar** e **/ingresar** haciendo uso del JWT.

## ✨ Características

* Usa contenedores docker.
* Ejecución completa en dos comandos gracias al uso el docker compose.
* Implementa autenticación JWT para los métodos POST, PUT y DELETE.
* Manejo de errores y excepciones personalizado.
* Genera logs en cada visita al **localhost:8020/api/carros**
* Permite utilizar filtros avanzados **/carros/filtro?**
* Endpoint principal (GET /api/carros) cuenta con paginación dinámica.
* Implementa Sequelize como ORM para migraciones, modelos y seeders.

## 🧰 Tecnologías 

* Nodejs
* MySQL
* Dotenv
* Express
* Express-validator
* Sequelize
* UUID
* Bcryptjs
* JWT
* Winston
* Jest y Supertet (para pruebas)

## 👨‍💻 Autores

Desarrollado por:
- **Juan Alvarez**
- **Santiago Goez**