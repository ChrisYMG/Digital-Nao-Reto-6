# Proyecto de API de Restaurantes y Usuarios

Este proyecto es una API para gestionar restaurantes y usuarios. Permite registrar, actualizar, eliminar y buscar restaurantes, así como registrar usuarios.

## Requisitos

- Node.js
- Express
- MongoDB

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    ```
2. Instala las dependencias:
    ```bash
    cd tu_repositorio
    npm install
    ```
3. Configura las variables de entorno en un archivo `.env`:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
    ```

## Uso

1. Inicia el servidor:
    ```bash
    npm start
    ```
2. La API estará disponible en `http://localhost:3000`.

## Endpoints

### Endpoints de Restaurantes

#### 1. Registrar un nuevo restaurante
- **Ruta**: `/restaurants/register`
- **Método**: `POST`
- **Descripción**: Registra un nuevo restaurante en la base de datos.
- **Parámetros de Entrada**:
  - `name` (String): Nombre del restaurante.
  - `cuisine` (String): Tipo de cocina del restaurante.
  - `address` (Object):
    - `street` (String): Calle del restaurante.
    - `city` (String): Ciudad del restaurante.
    - `coords` (Object):
      - `latitude` (Number): Latitud de la ubicación del restaurante.
      - `longitude` (Number): Longitud de la ubicación del restaurante.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Object): Datos del restaurante registrado.

#### 2. Añadir un comentario a un restaurante
- **Ruta**: `/restaurants/addComment`
- **Método**: `POST`
- **Descripción**: Añade un comentario a un restaurante específico.
- **Parámetros de Entrada**:
  - `restaurantId` (String): ID del restaurante.
  - `comment` (String): Comentario a añadir.
  - `userId` (String): ID del usuario que añade el comentario.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Object): Datos del comentario añadido.

#### 3. Añadir una calificación a un restaurante
- **Ruta**: `/restaurants/addGrade`
- **Método**: `POST`
- **Descripción**: Añade una calificación a un restaurante específico.
- **Parámetros de Entrada**:
  - `restaurantId` (String): ID del restaurante.
  - `grade` (Number): Calificación a añadir.
  - `userId` (String): ID del usuario que añade la calificación.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Object): Datos de la calificación añadida.

#### 4. Actualizar un restaurante
- **Ruta**: `/restaurants/update`
- **Método**: `PUT`
- **Descripción**: Actualiza la información de un restaurante específico.
- **Parámetros de Entrada**:
  - `restaurantId` (String): ID del restaurante.
  - `updateData` (Object): Datos a actualizar.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Object): Datos del restaurante actualizado.

#### 5. Eliminar (desactivar) un restaurante
- **Ruta**: `/restaurants/delete`
- **Método**: `DELETE`
- **Descripción**: Desactiva un restaurante específico.
- **Parámetros de Entrada**:
  - `restaurantId` (String): ID del restaurante.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Object): Datos del restaurante desactivado.

#### 6. Reactivar un restaurante
- **Ruta**: `/restaurants/reactivate`
- **Método**: `PUT`
- **Descripción**: Reactiva un restaurante específico.
- **Parámetros de Entrada**:
  - `restaurantId` (String): ID del restaurante.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Object): Datos del restaurante reactivado.

#### 7. Encontrar restaurantes cercanos
- **Ruta**: `/restaurants/findNearby`
- **Método**: `GET`
- **Descripción**: Encuentra restaurantes cercanos a la ubicación del usuario.
- **Parámetros de Entrada**:
  - `userId` (String): ID del usuario.
  - `cuisine` (String, opcional): Tipo de cocina para filtrar.
  - `name` (String, opcional): Nombre del restaurante para filtrar.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Array): Lista de restaurantes cercanos con sus respectivas distancias.

### Endpoints de Usuarios

#### 1. Registrar un nuevo usuario
- **Ruta**: `/users/register`
- **Método**: `POST`
- **Descripción**: Registra un nuevo usuario en la base de datos.
- **Parámetros de Entrada**:
  - `name` (String): Nombre del usuario.
  - `lastname` (String): Apellido del usuario.
  - `coords` (Object):
    - `latitude` (Number): Latitud de la ubicación del usuario.
    - `longitude` (Number): Longitud de la ubicación del usuario.
  - `email` (String): Correo electrónico del usuario.
- **Formato del Output**:
  - `status` (String): Estado de la operación.
  - `data` (Object): Datos del usuario registrado.