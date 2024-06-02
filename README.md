# A Colleita
A Colleita es una página web que tiene como objetivo conectar a los consumidores con los agricultores locales de Galicia. Nuestro objetivo principal es impulsar el consumo de productos frescos y de alta calidad, al mismo tiempo que ayudamos a los pequeños productores de la región. Al eliminar a los intermediarios, garantizamos que tanto los agricultores como los consumidores reciban beneficios justos y directos.
## Abstract
A Colleita is a website that aims to connect consumers with local farmers in Galicia. Our  principal objective is to increase the consumption of fresh and high quality products, while helping small producers in the region. By removing the intermediary, we ensure that farmers and customers receive fair and direct benefits.
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

 9. Flecha en rojo indica donde hay que poner el nombre de la base de datos y la flecha en verde indica donde se tiene que poner la contraseña del usuario root
     
     ![properties](https://github.com/Javiponte29/A-Colleita/assets/116550466/eae09114-7b8c-4d80-b953-5d50bea90799)

 11. Iniciar el back, AColleitaSpring.

 12. Iniciar el front, ColleitaReact. Utilizando el siguiente comando.
 ```
    npm run dev
 ```
## ALgunas capturas de la web
### Home
![Home](https://github.com/Javiponte29/A-Colleita/assets/116550466/b661e170-b276-492e-85cc-75c21593e012)

### Productos
![Productos](https://github.com/Javiponte29/A-Colleita/assets/116550466/235c5139-6821-4a7a-bd8d-d4a521daf798)

### Perfil
![CarritoProductos](https://github.com/Javiponte29/A-Colleita/assets/116550466/ff54ac99-4781-4d91-afc1-e5c03cefd3c4)

### Ver Producto
![VerProducto](https://github.com/Javiponte29/A-Colleita/assets/116550466/89e16c6a-cb17-48a4-80cd-bdb0e96878f2)

### Modal
![Modal-Productos](https://github.com/Javiponte29/A-Colleita/assets/116550466/be61d5ac-c4bd-4ef0-ad70-18fa41b5d53d)
