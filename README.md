# Test Red Efectiva

## Ejecutar aplicación (Instrucciones):

## 1. Herramientas necesarias
  - [Docker](https://www.docker.com/get-started/)
  - [npm >= 8](https://docs.npmjs.com)
  - [Node.js >= 16](https://nodejs.org/en/)

## 2. Ejecución de la aplicación
  - ### Ejecutar aplicación paso a paso utilizando la herramienta Docker

  1. Clonar el repositorio de Gihub.

  2. Abrir una nueva terminal y verificar que estamos ubicacdos en la carpeta del proyecto. En este caso dentro de la carpeta **test-re**.

  3. Para poder ejecutar la aplicación con ayuda de Docker, necesitamos construir una imagen para la aplicación. Esto lo hacemos por medio del comando: 
  ```
  $ docker build -t [nombre de la imagen]:[version de la imagen] .
  ```
  Ejemplo: 
  ```
  $ docker build -t react-docker:1.0.0 .
  ```

  4. Luego que tengamos la imagen creada, necesitamos ejecutar la aplicación utilizando la imagen que hemos creado anteriormente: 
  ```
  $ docker run -p 3000:3000 --name [nombre de la aplicación] [nombre de la imagen creada anteriormente]:[version de la imagen mencionada] 
  ```
  Ejemplo: 

  ```
  $ docker run -p 3000:3000 --name testapp react-docker:1.0.0
  ```

  5. Abrir el navegador y escribir en la barra de navegación la siguiente url: 
   
  ```
    http://localhost:3000/
  ```

 - ### Ejecutar aplicación paso a paso sin utilizar la herramienta Docker

  1. Clonar el repositorio de Gihub.

  2. Abrir una nueva terminal y verificar que estamos ubicacdos en la carpeta del proyecto. En este caso dentro de la carpeta **test-re**.

  3. Ejecutar el siguiente comando para instalar todas las dependencias: 

  ```
    $ npm install
  ```

  4. Luego de que se intalen todas las dependencias, ya podremos ejecutar la aplicación correctamente con el siguiente comando: 

  ```
    $ npm start
  ```


  ### Gracias por su atención y la oportunidad, espero haber hecho una buena solución.


