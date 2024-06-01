# A Colleita
A Colleita es una página web de productos agrícolas destinado a que los agricultores gallegos puedan mostrar y vender sus productos al mayor número de gente posible
## Instalación y configuración
1. Clonar el repositorio en el directorio elegido
 ```
    git clone <https://github.com/Javiponte29/A-Colleita>
 ```
2. Crea tu propia base de datos y ponle el nombre que quieras, para crearla tiene que ejecutar el siguiente comando y en vez de “nombre_bd” le pones el nombre que tu quieras.
 ```
    CREATE DATABASE nombre_bd;
 ```
3. Navega al directorio donde has clonado el proyecto y accede a la carpeta  “ColleitaReact” una vez ahí ejecuta el siguiente comando:
 ```
    npm install
 ```
 4. Sal de esta carpeta y navega a la carpeta de “AColleitaSpring” una vez ahí tienes que ir al fichero “application.properties” la ruta hasta el es:
 ```
    AcolleitaSpring\src\main\resources\application.properties
 ```
 5. Dentro de este fichero cambia el nombre de la base de datos que se encuentra al final de la segunda línea:
 ```
    spring.datasource.url=jdbc:mysql://localhost:3306/colleita
 ```
 6. Cambia “colleita” por el nombre de tu base de datos.
 7. Ahora tienes que configurar la contraseña del usuario root que se encuentra en la cuarta línea:
 ```
    spring.datasource.password= 
 ```
 8. Tienes que poner la contraseña que tengas asignada al usuario root después del "=" en mi caso no tengo puesto nada porque no tengo ninguna contraseña asignada al usuario root.
 9. Iniciar el back, AColleitaSpring.
 10. Iniciar el front, ColleitaReact. Utilizando el siguiente comando.
 ```
    npm run dev
 ```