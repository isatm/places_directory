# DOCUMENTACIÓN COMPLETA DE ENDPOINTS API

## Índice
1. [Categorías](#categorías)
2. [Tags (Etiquetas)](#tags-etiquetas)
3. [Places (Lugares)](#places-lugares)
4. [Place-Tags (Relaciones)](#place-tags-relaciones)
5. [Media (Archivos multimedia)](#media-archivos-multimedia)
6. [Reviews (Reseñas)](#reviews-reseñas)
7. [Questions and Answers (Preguntas y Respuestas)](#questions-and-answers-preguntas-y-respuestas)
8. [Files (Archivos)](#files-archivos)

---

## Categorías

### [POST] Crear una categoría
- **URL**: `/categories`
- **Descripción**: Crea una nueva categoría en el sistema.
- **Body (JSON)**:
```json
{
  "cat_name": "Restaurantes y Cafeterías"
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/categories \
  -H "Content-Type: application/json" \
  -d '{
    "cat_name": "Restaurantes y Cafeterías"
  }'
```
- **Respuesta esperada**:
```json
{
  "cat_id": 1,
  "cat_name": "Restaurantes y Cafeterías"
}
```

### [GET] Obtener todas las categorías
- **URL**: `/categories`
- **Descripción**: Obtiene la lista de todas las categorías disponibles.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/categories
```
- **Respuesta esperada**:
```json
[
  {
    "cat_id": 1,
    "cat_name": "Restaurantes y Cafeterías"
  },
  {
    "cat_id": 2,
    "cat_name": "Parques y Recreación"
  }
]
```

### [GET] Obtener una categoría por ID
- **URL**: `/categories/{id}`
- **Descripción**: Obtiene una categoría específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/categories/1
```
- **Respuesta esperada**:
```json
{
  "cat_id": 1,
  "cat_name": "Restaurantes y Cafeterías"
}
```

### [PUT] Actualizar una categoría
- **URL**: `/categories/{id}`
- **Descripción**: Actualiza una categoría existente.
- **Body (JSON)**:
```json
{
  "cat_name": "Restaurantes Gourmet"
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/categories/1 \
  -H "Content-Type: application/json" \
  -d '{
    "cat_name": "Restaurantes Gourmet"
  }'
```
- **Respuesta esperada**:
```json
{
  "cat_id": 1,
  "cat_name": "Restaurantes Gourmet"
}
```

### [DELETE] Eliminar una categoría
- **URL**: `/categories/{id}`
- **Descripción**: Elimina una categoría existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/categories/1
```
- **Respuesta esperada**: Respuesta vacía con código 204 No Content o:
```json
{
  "message": "Categoría eliminada correctamente"
}
```

---

## Tags (Etiquetas)

### [POST] Crear una etiqueta
- **URL**: `/tags`
- **Descripción**: Crea una nueva etiqueta en el sistema.
- **Body (JSON)**:
```json
{
  "tag_name": "Pet-Friendly"
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/tags \
  -H "Content-Type: application/json" \
  -d '{
    "tag_name": "Pet-Friendly"
  }'
```
- **Respuesta esperada**:
```json
{
  "tag_id": 1,
  "tag_name": "Pet-Friendly"
}
```

### [GET] Obtener todas las etiquetas
- **URL**: `/tags`
- **Descripción**: Obtiene la lista de todas las etiquetas disponibles.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/tags
```
- **Respuesta esperada**:
```json
[
  {
    "tag_id": 1,
    "tag_name": "Pet-Friendly"
  },
  {
    "tag_id": 2,
    "tag_name": "Wi-Fi Gratis"
  }
]
```

### [GET] Obtener una etiqueta por ID
- **URL**: `/tags/{id}`
- **Descripción**: Obtiene una etiqueta específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/tags/1
```
- **Respuesta esperada**:
```json
{
  "tag_id": 1,
  "tag_name": "Pet-Friendly"
}
```

### [PUT] Actualizar una etiqueta
- **URL**: `/tags/{id}`
- **Descripción**: Actualiza una etiqueta existente.
- **Body (JSON)**:
```json
{
  "tag_name": "Amigable con Mascotas"
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/tags/1 \
  -H "Content-Type: application/json" \
  -d '{
    "tag_name": "Amigable con Mascotas"
  }'
```
- **Respuesta esperada**:
```json
{
  "tag_id": 1,
  "tag_name": "Amigable con Mascotas"
}
```

### [DELETE] Eliminar una etiqueta
- **URL**: `/tags/{id}`
- **Descripción**: Elimina una etiqueta existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/tags/1
```
- **Respuesta esperada**: Respuesta vacía con código 204 No Content o:
```json
{
  "message": "Etiqueta eliminada correctamente"
}
```

---

## Places (Lugares)

### [POST] Crear un lugar
- **URL**: `/places`
- **Descripción**: Crea un nuevo lugar en el sistema.
- **Body (JSON)**:
```json
{
  "place_name": "Cafetería El Aroma",
  "place_address": "Calle Principal 123",
  "place_type": "café",
  "place_hours": "Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00",
  "place_description": "Cafetería acogedora con variedad de bebidas y postres",
  "categoryId": 1
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/places \
  -H "Content-Type: application/json" \
  -d '{
    "place_name": "Cafetería El Aroma",
    "place_address": "Calle Principal 123",
    "place_type": "café",
    "place_hours": "Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00",
    "place_description": "Cafetería acogedora con variedad de bebidas y postres",
    "categoryId": 1
  }'
```
- **Respuesta esperada**:
```json
{
  "place_id": 1,
  "place_name": "Cafetería El Aroma",
  "place_address": "Calle Principal 123",
  "place_type": "café",
  "place_hours": "Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00",
  "place_description": "Cafetería acogedora con variedad de bebidas y postres",
  "categoryId": 1,
  "createdAt": "2025-02-27T18:52:15.000Z",
  "updatedAt": "2025-02-27T18:52:15.000Z"
}
```

### [GET] Obtener todos los lugares
- **URL**: `/places`
- **Descripción**: Obtiene la lista de todos los lugares disponibles.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/places
```
- **Respuesta esperada**:
```json
[
  {
    "place_id": 1,
    "place_name": "Cafetería El Aroma",
    "place_address": "Calle Principal 123",
    "place_type": "café",
    "place_hours": "Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00",
    "place_description": "Cafetería acogedora con variedad de bebidas y postres",
    "categoryId": 1,
    "createdAt": "2025-02-27T18:52:15.000Z",
    "updatedAt": "2025-02-27T18:52:15.000Z"
  }
]
```

### [GET] Obtener un lugar por ID
- **URL**: `/places/{id}`
- **Descripción**: Obtiene un lugar específico por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/places/1
```
- **Respuesta esperada**:
```json
{
  "place_id": 1,
  "place_name": "Cafetería El Aroma",
  "place_address": "Calle Principal 123",
  "place_type": "café",
  "place_hours": "Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00",
  "place_description": "Cafetería acogedora con variedad de bebidas y postres",
  "categoryId": 1,
  "createdAt": "2025-02-27T18:52:15.000Z",
  "updatedAt": "2025-02-27T18:52:15.000Z"
}
```

### [PATCH] Actualizar un lugar
- **URL**: `/places/{id}`
- **Descripción**: Actualiza un lugar existente. Solo se modifican los campos enviados.
- **Body (JSON)**:
```json
{
  "place_name": "Cafetería El Aroma Premium",
  "place_hours": "Lun-Dom: 8:00-22:00"
}
```
- **Ejemplo CURL**:
```bash
curl -X PATCH http://localhost:4000/places/1 \
  -H "Content-Type: application/json" \
  -d '{
    "place_name": "Cafetería El Aroma Premium",
    "place_hours": "Lun-Dom: 8:00-22:00"
  }'
```
- **Respuesta esperada**:
```json
{
  "place_id": 1,
  "place_name": "Cafetería El Aroma Premium",
  "place_address": "Calle Principal 123",
  "place_type": "café",
  "place_hours": "Lun-Dom: 8:00-22:00",
  "place_description": "Cafetería acogedora con variedad de bebidas y postres",
  "categoryId": 1,
  "createdAt": "2025-02-27T18:52:15.000Z",
  "updatedAt": "2025-02-27T18:52:15.956Z"
}
```

### [DELETE] Eliminar un lugar
- **URL**: `/places/{id}`
- **Descripción**: Elimina un lugar existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/places/1
```
- **Respuesta esperada**: Respuesta vacía con código 204 No Content o:
```json
{
  "message": "Lugar eliminado correctamente"
}
```

---

## Place-Tags (Relaciones)

### [POST] Asignar una etiqueta a un lugar
- **URL**: `/place-tags`
- **Descripción**: Crea una relación entre un lugar y una etiqueta.
- **Body (JSON)**:
```json
{
  "place_id": 1,
  "tag_id": 1
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/place-tags \
  -H "Content-Type: application/json" \
  -d '{
    "place_id": 1,
    "tag_id": 1
  }'
```
- **Respuesta esperada**:
```json
{
  "place_id": 1,
  "tag_id": 1
}
```

### [GET] Obtener todas las relaciones entre lugares y etiquetas
- **URL**: `/place-tags`
- **Descripción**: Obtiene todas las relaciones entre lugares y etiquetas.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/place-tags
```
- **Respuesta esperada**:
```json
[
  {
    "place_id": 1,
    "tag_id": 1
  },
  {
    "place_id": 1,
    "tag_id": 2
  }
]
```

### [DELETE] Eliminar una relación entre lugar y etiqueta
- **URL**: `/place-tags`
- **Descripción**: Elimina una relación entre un lugar y una etiqueta.
- **Body (JSON)**:
```json
{
  "place_id": 1,
  "tag_id": 1
}
```
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/place-tags \
  -H "Content-Type: application/json" \
  -d '{
    "place_id": 1,
    "tag_id": 1
  }'
```
- **Respuesta esperada**: Respuesta vacía con código 204 No Content o:
```json
{
  "message": "Relación eliminada correctamente"
}
```

---

## Media (Archivos multimedia)

### [POST] Subir una imagen
- **URL**: `/media`
- **Descripción**: Registra una nueva imagen para un lugar.
- **Body (JSON)**:
```json
{
  "media_url": "https://ejemplo.com/images/cafeteria1.jpg",
  "place_id": 1
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/media \
  -H "Content-Type: application/json" \
  -d '{
    "media_url": "https://ejemplo.com/images/cafeteria1.jpg",
    "place_id": 1
  }'
```
- **Respuesta esperada**:
```json
{
  "media_id": 1,
  "media_url": "https://ejemplo.com/images/cafeteria1.jpg",
  "place_id": 1
}
```

### [GET] Obtener todas las imágenes
- **URL**: `/media`
- **Descripción**: Obtiene la lista de todas las imágenes registradas.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/media
```
- **Respuesta esperada**:
```json
[
  {
    "media_id": 1,
    "media_url": "https://ejemplo.com/images/cafeteria1.jpg",
    "place_id": 1
  }
]
```

### [GET] Obtener una imagen por ID
- **URL**: `/media/{id}`
- **Descripción**: Obtiene una imagen específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/media/1
```
- **Respuesta esperada**:
```json
{
  "media_id": 1,
  "media_url": "https://ejemplo.com/images/cafeteria1.jpg",
  "place_id": 1
}
```

### [PUT] Actualizar una imagen
- **URL**: `/media/{id}`
- **Descripción**: Actualiza una imagen existente.
- **Body (JSON)**:
```json
{
  "media_url": "https://ejemplo.com/images/cafeteria_nueva.jpg"
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/media/1 \
  -H "Content-Type: application/json" \
  -d '{
    "media_url": "https://ejemplo.com/images/cafeteria_nueva.jpg"
  }'
```
- **Respuesta esperada**:
```json
{
  "media_id": 1,
  "media_url": "https://ejemplo.com/images/cafeteria_nueva.jpg",
  "place_id": 1
}
```

### [DELETE] Eliminar una imagen
- **URL**: `/media/{id}`
- **Descripción**: Elimina una imagen existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/media/1
```
- **Respuesta esperada**: Respuesta vacía con código 204 No Content o:
```json
{
  "message": "Imagen eliminada correctamente"
}
```

---

## Reviews (Reseñas)

### [POST] Crear una reseña
- **URL**: `/reviews`
- **Descripción**: Crea una nueva reseña para un lugar.
- **Body (JSON)**:
```json
{
  "reviewId": "rev-123456",
  "placeId": "1",
  "user": "usuario123",
  "rating": 4,
  "comment": "Excelente servicio y ambiente agradable",
  "multimedia": ["imagen1.jpg", "imagen2.jpg"]
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/reviews \
  -H "Content-Type: application/json" \
  -d '{
    "reviewId": "rev-123456",
    "placeId": "1",
    "user": "usuario123",
    "rating": 4,
    "comment": "Excelente servicio y ambiente agradable",
    "multimedia": ["imagen1.jpg", "imagen2.jpg"]
  }'
```
- **Respuesta esperada**:
```json
{
  "reviewId": "rev-123456",
  "placeId": "1",
  "user": "usuario123",
  "rating": 4,
  "comment": "Excelente servicio y ambiente agradable",
  "multimedia": ["imagen1.jpg", "imagen2.jpg"],
  "parentId": null,
  "_id": "67c0b460b08f46d9ae516540",
  "createdAt": "2025-02-27T18:52:16.661Z",
  "updatedAt": "2025-02-27T18:52:16.661Z",
  "__v": 0
}
```

### [GET] Obtener todas las reseñas de un lugar
- **URL**: `/reviews/place/{placeId}`
- **Descripción**: Obtiene todas las reseñas asociadas a un lugar específico.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/reviews/place/1
```
- **Respuesta esperada**:
```json
[
  {
    "_id": "67c0b460b08f46d9ae516540",
    "reviewId": "rev-123456",
    "placeId": "1",
    "user": "usuario123",
    "rating": 4,
    "comment": "Excelente servicio y ambiente agradable",
    "multimedia": ["imagen1.jpg", "imagen2.jpg"],
    "parentId": null,
    "createdAt": "2025-02-27T18:52:16.661Z",
    "updatedAt": "2025-02-27T18:52:16.661Z",
    "__v": 0
  }
]
```

### [GET] Obtener una reseña por reviewId
- **URL**: `/reviews/{reviewId}`
- **Descripción**: Obtiene una reseña específica por su reviewId.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/reviews/rev-123456
```
- **Respuesta esperada**:
```json
{
  "_id": "67c0b460b08f46d9ae516540",
  "reviewId": "rev-123456",
  "placeId": "1",
  "user": "usuario123",
  "rating": 4,
  "comment": "Excelente servicio y ambiente agradable",
  "multimedia": ["imagen1.jpg", "imagen2.jpg"],
  "parentId": null,
  "createdAt": "2025-02-27T18:52:16.661Z",
  "updatedAt": "2025-02-27T18:52:16.661Z",
  "__v": 0
}
```

### [GET] Obtener una reseña por ID
- **URL**: `/reviews/id/{id}`
- **Descripción**: Obtiene una reseña específica por su ID de MongoDB.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/reviews/id/67c0b460b08f46d9ae516540
```
- **Respuesta esperada**:
```json
{
  "_id": "67c0b460b08f46d9ae516540",
  "reviewId": "rev-123456",
  "placeId": "1",
  "user": "usuario123",
  "rating": 4,
  "comment": "Excelente servicio y ambiente agradable",
  "multimedia": ["imagen1.jpg", "imagen2.jpg"],
  "parentId": null,
  "createdAt": "2025-02-27T18:52:16.661Z",
  "updatedAt": "2025-02-27T18:52:16.661Z",
  "__v": 0
}
```

### [PUT] Actualizar una reseña por reviewId
- **URL**: `/reviews/{reviewId}`
- **Descripción**: Actualiza una reseña existente usando su reviewId.
- **Body (JSON)**:
```json
{
  "rating": 5,
  "comment": "Servicio excepcional y ambiente muy acogedor"
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/reviews/rev-123456 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 5,
    "comment": "Servicio excepcional y ambiente muy acogedor"
  }'
```
- **Respuesta esperada**:
```json
{
  "_id": "67c0b460b08f46d9ae516540",
  "reviewId": "rev-123456",
  "placeId": "1",
  "user": "usuario123",
  "rating": 5,
  "comment": "Servicio excepcional y ambiente muy acogedor",
  "multimedia": ["imagen1.jpg", "imagen2.jpg"],
  "parentId": null,
  "createdAt": "2025-02-27T18:52:16.661Z",
  "updatedAt": "2025-02-27T18:52:16.903Z",
  "__v": 0
}
```

### [PUT] Actualizar una reseña por ID
- **URL**: `/reviews/id/{id}`
- **Descripción**: Actualiza una reseña existente usando su ID de MongoDB.
- **Body (JSON)**:
```json
{
  "rating": 5,
  "comment": "Servicio excepcional y ambiente muy acogedor"
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/reviews/id/67c0b460b08f46d9ae516540 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 5,
    "comment": "Servicio excepcional y ambiente muy acogedor"
  }'
```
- **Respuesta esperada**: Similar a la anterior.

### [DELETE] Eliminar una reseña por reviewId
- **URL**: `/reviews/{reviewId}`
- **Descripción**: Elimina una reseña existente usando su reviewId.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/reviews/rev-123456
```
- **Respuesta esperada**:
```json
{
  "_id": "67c0b460b08f46d9ae516540",
  "reviewId": "rev-123456",
  "placeId": "1",
  "user": "usuario123",
  "rating": 5,
  "comment": "Servicio excepcional y ambiente muy acogedor",
  "multimedia": ["imagen1.jpg", "imagen2.jpg"],
  "parentId": null,
  "createdAt": "2025-02-27T18:52:16.661Z",
  "updatedAt": "2025-02-27T18:52:16.903Z",
  "__v": 0
}
```

### [DELETE] Eliminar una reseña por ID
- **URL**: `/reviews/id/{id}`
- **Descripción**: Elimina una reseña existente usando su ID de MongoDB.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/reviews/id/67c0b460b08f46d9ae516540
```
- **Respuesta esperada**: Similar a la anterior.

---

## Questions and Answers (Preguntas y Respuestas)

### [POST] Crear una pregunta
- **URL**: `/questions-and-answers`
- **Descripción**: Crea una nueva pregunta sobre un lugar.
- **Body (JSON)**:
```json
{
  "placeId": "1",
  "user": "usuario123",
  "questionText": "¿Tienen opciones sin gluten?"
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/questions-and-answers \
  -H "Content-Type: application/json" \
  -d '{
    "placeId": "1",
    "user": "usuario123",
    "questionText": "¿Tienen opciones sin gluten?"
  }'
```
- **Respuesta esperada**:
```json
{
  "placeId": "1",
  "user": "usuario123",
  "questionText": "¿Tienen opciones sin gluten?",
  "_id": "67c0b460b08f46d9ae516545",
  "createdAt": "2025-02-27T18:52:16.975Z",
  "updatedAt": "2025-02-27T18:52:16.975Z",
  "__v": 0
}
```

### [POST] Crear una respuesta a una pregunta
- **URL**: `/questions-and-answers`
- **Descripción**: Crea una respuesta a una pregunta existente.
- **Body (JSON)**:
```json
{
  "placeId": "1",
  "user": "dueño_lugar",
  "answerText": "Sí, contamos con varias opciones sin gluten en nuestro menú.",
  "parentId": "67c0b460b08f46d9ae516545"
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/questions-and-answers \
  -H "Content-Type: application/json" \
  -d '{
    "placeId": "1",
    "user": "dueño_lugar",
    "answerText": "Sí, contamos con varias opciones sin gluten en nuestro menú.",
    "parentId": "67c0b460b08f46d9ae516545"
  }'
```
- **Respuesta esperada**:
```json
{
  "placeId": "1",
  "user": "dueño_lugar",
  "answerText": "Sí, contamos con varias opciones sin gluten en nuestro menú.",
  "parentId": "67c0b460b08f46d9ae516545",
  "_id": "67c0b460b08f46d9ae516553",
  "createdAt": "2025-02-27T18:52:16.609Z",
  "updatedAt": "2025-02-27T18:52:16.609Z",
  "__v": 0
}
```

### [GET] Obtener todas las preguntas y respuestas de un lugar
- **URL**: `/questions-and-answers/place/{placeId}`
- **Descripción**: Obtiene todas las preguntas y respuestas asociadas a un lugar específico.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/questions-and-answers/place/1
```
- **Respuesta esperada**:
```json
[
  {
    "_id": "67c0b460b08f46d9ae516545",
    "placeId": "1",
    "user": "usuario123",
    "questionText": "¿Tienen opciones sin gluten?",
    "createdAt": "2025-02-27T18:52:16.975Z",
    "updatedAt": "2025-02-27T18:52:16.975Z",
    "__v": 0
  },
  {
    "_id": "67c0b460b08f46d9ae516553",
    "placeId": "1",
    "user": "dueño_lugar",
    "answerText": "Sí, contamos con varias opciones sin gluten en nuestro menú.",
    "parentId": "67c0b460b08f46d9ae516545",
    "createdAt": "2025-02-27T18:52:16.609Z",
    "updatedAt": "2025-02-27T18:52:16.609Z",
    "__v": 0
  }
]
```

### [GET] Obtener una pregunta o respuesta por ID
- **URL**: `/questions-and-answers/{id}`
- **Descripción**: Obtiene una pregunta o respuesta específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http