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


## Documentación de la Base de Datos

### Base de Datos: Tattler

#### Colección: restaurants

##### Ejemplo de Documento
```json
{
  "_id": "66ce470b980aad7147f43240",
  "address": {
    "building": "123",
    "coords": {
      "latitude": 40.7128,
      "longitude": -74.006
    },
    "street": "Main St",
    "zipcode": "10001",
    "borough": "Manhattan"
  },
  "cuisine": "Italian",
  "name": "Nearby 1",
  "active": 1,
  "grades": [],
  "comments": [
    {
      "date": "2024-08-29T06:04:21.980+00:00",
      "comment": "Great place!",
      "userId": "66ce4b2de3312fa3d9944da9"
    }
  ],
  "__v": 1
}
```

#### Campos

- **_id**: `ObjectId` - Identificador único del restaurante.
- **address**: `Object` - Dirección del restaurante.
  - **building**: `String` - Número del edificio.
  - **coords**: `Object` - Coordenadas de la ubicación del restaurante.
    - **latitude**: `Double` - Latitud de la ubicación.
    - **longitude**: `Double` - Longitud de la ubicación.
  - **street**: `String` - Calle del restaurante.
  - **zipcode**: `String` - Código postal del restaurante.
  - **borough**: `String` - Distrito del restaurante.
- **cuisine**: `String` - Tipo de cocina del restaurante.
- **name**: `String` - Nombre del restaurante.
- **active**: `Int32` - Estado del restaurante (1 para activo, 0 para inactivo).
- **grades**: `Array` - Lista de calificaciones del restaurante (actualmente vacío).
- **comments**: `Array` - Lista de comentarios del restaurante.
  - **date**: `Date` - Fecha del comentario.
  - **comment**: `String` - Texto del comentario.
  - **userId**: `ObjectId` - Identificador del usuario que hizo el comentario.
- **__v**: `Int32` - Versión del documento.


#### Colección: users

##### Ejemplo de Documento
```json
{
  "_id": "66ce4b2de3312fa3d9944da9",
  "name": "Yael",
  "lastname": "Mejia",
  "email": "yael.mejia@example.com",
  "coords": {
    "latitude": 40.7128,
    "longitude": -74.006
  },
  "__v": 0
}
```

#### Campos

- **_id**: `ObjectId` - Identificador único del usuario.
- **name**: `String` - Nombre del usuario.
- **lastname**: `String` - Apellido del usuario.
- **email**: `String` - Correo electrónico del usuario.
- **coords**: `Object` - Coordenadas de la ubicación del usuario.
  - **latitude**: `Double` - Latitud de la ubicación.
  - **longitude**: `Double` - Longitud de la ubicación.
- **__v**: `Int32` - Versión del documento.
