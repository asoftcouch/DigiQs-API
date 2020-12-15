# DigiQs-API
API para las requests de DIGIQS

Esta API contiene el back-end de la App DigiQs para hacer Fetch de datos, para poder iniciar el servidor se ocupan instalar todos las dependencias
en el archivo de package.JSON. 

# Comando para instalar dependencias: 

````````bash
npm install body-parser cors dotenv express mongoose nodemon
````````

# Credenciales de MongoDB

Agregar clave para acceder a la base de datos

`````````javascript
const connectionString = '' ;
`````````

# Iniciar el Servidor 

Al termina esto, solo hay que iniciar el servidor (server.js) utilizando el comando:

```````bash
node server
``````````

Una vez iniciado el servidor, la app digiqs en github-pages estara conectada. 

# mongoDb

Al haber hecho todos estos pasos correctamente, la consola tendra el mensaje: 

```````bash
Conexion a la base de datos ha sido exitosa, server escuchando en el puerto: 5000
```````
