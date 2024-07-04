# Jooycar Web Application
Esta es la aplicación web de Jooycar. A continuación se detallan los pasos para ejecutar la aplicación usando Docker y también cómo ejecutarla localmente.

Nota: Para que la aplicación web funcione correctamente, asegúrate de que la API de Jooycar esté ejecutándose primero.

## Requisitos
 * Docker
 * Node.js (mínimo versión 18)

## Ejecución usando Docker

### 1. Construir la imagen Docker
Construye la imagen Docker.

```bash
docker build -t jooycar-web .
```
 * -t jooycar-web: Etiqueta la imagen como jooycar-web.

### 2. Ejecutar la aplicación en Docker
Ejecuta ka aplicación Vue.js en un contenedor Docker.

```bash
docker run -it -p 8080:8080 --rm --name jooycar-web jooycar-web
```

 * -it: Ejecuta el contenedor en modo interactivo.
 * -p 8080:8080: Mapea el puerto 8080 del contenedor al puerto 8080 de tu máquina host.
 * --rm: Elimina el contenedor automáticamente cuando se detiene.
 * --name jooycar-web: Asigna el nombre jooycar-web al contenedor.

Ahora deberías poder acceder a la aplicación web en http://localhost:8080.

## Ejecución local

### 1. Requisitos previos
Asegúrate de tener Node.js (mínimo versión 18) instalado en tu máquina.

### 2. Clonar el repositorio
Clona este repositorio en tu máquina local.

```bash
git clone https://github.com/tu-usuario/jooycar-web.git
cd jooycar-web
```

### 3. Instalar dependencias
Instala las dependencias del proyecto.

```bash
npm install
```

### 4. Ejecutar la API de Jooycar
Asegúrate de que la API de Jooycar esté ejecutándose. Sigue las instrucciones en el repositorio de la API para ejecutar la API localmente o en un contenedor Docker.

### 5. Ejecutar la aplicación
Para ejecutar la aplicación en modo desarrollo:

```bash
npm run dev
```

Para ejecutar las pruebas unitarias:

```bash
npm run test:unit
```
