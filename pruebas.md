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

### [GET] Obtener todas las categorías
- **URL**: `/categories`
- **Descripción**: Obtiene la lista de todas las categorías disponibles.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/categories
```

### [GET] Obtener una categoría por ID
- **URL**: `/categories/{id}`
- **Descripción**: Obtiene una categoría específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/categories/1
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

### [DELETE] Eliminar una categoría
- **URL**: `/categories/{id}`
- **Descripción**: Elimina una categoría existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/categories/1
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

### [GET] Obtener todas las etiquetas
- **URL**: `/tags`
- **Descripción**: Obtiene la lista de todas las etiquetas disponibles.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/tags
```

### [GET] Obtener una etiqueta por ID
- **URL**: `/tags/{id}`
- **Descripción**: Obtiene una etiqueta específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/tags/1
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

### [DELETE] Eliminar una etiqueta
- **URL**: `/tags/{id}`
- **Descripción**: Elimina una etiqueta existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/tags/1
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

### [GET] Obtener todos los lugares
- **URL**: `/places`
- **Descripción**: Obtiene la lista de todos los lugares disponibles.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/places
```

### [GET] Obtener un lugar por ID
- **URL**: `/places/{id}`
- **Descripción**: Obtiene un lugar específico por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/places/1
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

### [DELETE] Eliminar un lugar
- **URL**: `/places/{id}`
- **Descripción**: Elimina un lugar existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/places/1
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

### [GET] Obtener todas las relaciones entre lugares y etiquetas
- **URL**: `/place-tags`
- **Descripción**: Obtiene todas las relaciones entre lugares y etiquetas.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/place-tags
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

---

## Media (Archivos multimedia)

### [POST] Subir una imagen
- **URL**: `/media`
- **Descripción**: Registra una nueva imagen para un lugar utilizando base64.
- **Body (JSON)**:
```json
{
  "media_base64": "data:image/jpeg;base64,/9j/4AAQSkZ...",
  "place_id": 1
}
```
- **Ejemplo CURL**:
```bash
curl -X POST http://localhost:4000/media \
  -H "Content-Type: application/json" \
  -d '{
    "media_base64": "'$(base64 -w 0 ./imagen1.jpg)'",
    "place_id": 1
  }'
```

### [GET] Obtener todas las imágenes
- **URL**: `/media`
- **Descripción**: Obtiene la lista de todas las imágenes registradas.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/media
```

### [GET] Obtener una imagen por ID
- **URL**: `/media/{id}`
- **Descripción**: Obtiene una imagen específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/media/1
```

### [PUT] Actualizar una imagen
- **URL**: `/media/{id}`
- **Descripción**: Actualiza una imagen existente con nueva codificación base64.
- **Body (JSON)**:
```json
{
  "media_base64": "data:image/jpeg;base64,/9j/4AAQSkZ..."
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/media/1 \
  -H "Content-Type: application/json" \
  -d '{
    "media_base64": "'$(base64 -w 0 ./imagen1.jpg)'"
  }'
```

### [DELETE] Eliminar una imagen
- **URL**: `/media/{id}`
- **Descripción**: Elimina una imagen existente.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/media/1
```

---

## Reviews (Reseñas)

### [POST] Crear una reseña
- **URL**: `/reviews`
- **Descripción**: Crea una nueva reseña para un lugar con imágenes en base64.
- **Body (JSON)**:
```json
{
  "reviewId": "rev-123456",
  "placeId": "1",
  "user": "usuario123",
  "rating": 4,
  "comment": "Excelente servicio y ambiente agradable",
  "multimedia": ["data:image/jpeg;base64,/9j/4AAQSkZ...", "data:image/jpeg;base64,/8d/4gTKsl..."]
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
    "multimedia": ["'$(base64 -w 0 ./imagen1.jpg)'", "'$(base64 -w 0 ./imagen2.jpg)'"]
  }'
```

### [GET] Obtener todas las reseñas de un lugar
- **URL**: `/reviews/place/{placeId}`
- **Descripción**: Obtiene todas las reseñas asociadas a un lugar específico.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/reviews/place/1
```

### [GET] Obtener una reseña por reviewId
- **URL**: `/reviews/{reviewId}`
- **Descripción**: Obtiene una reseña específica por su reviewId.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/reviews/rev-123456
```

### [GET] Obtener una reseña por ID
- **URL**: `/reviews/id/{id}`
- **Descripción**: Obtiene una reseña específica por su ID de MongoDB.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/reviews/id/67c0b460b08f46d9ae516540
```

### [PUT] Actualizar una reseña por reviewId
- **URL**: `/reviews/{reviewId}`
- **Descripción**: Actualiza una reseña existente usando su reviewId.
- **Body (JSON)**:
```json
{
  "rating": 5,
  "comment": "Servicio excepcional y ambiente muy acogedor",
  "multimedia": ["data:image/jpeg;base64,/9j/4AAQSkZ..."]
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/reviews/rev-123456 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 5,
    "comment": "Servicio excepcional y ambiente muy acogedor",
    "multimedia": ["'$(base64 -w 0 ./imagen1.jpg)'"]
  }'
```

### [PUT] Actualizar una reseña por ID
- **URL**: `/reviews/id/{id}`
- **Descripción**: Actualiza una reseña existente usando su ID de MongoDB.
- **Body (JSON)**:
```json
{
  "rating": 5,
  "comment": "Servicio excepcional y ambiente muy acogedor",
  "multimedia": ["data:image/jpeg;base64,/9j/4AAQSkZ..."]
}
```
- **Ejemplo CURL**:
```bash
curl -X PUT http://localhost:4000/reviews/id/67c0b460b08f46d9ae516540 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 5,
    "comment": "Servicio excepcional y ambiente muy acogedor",
    "multimedia": ["'$(base64 -w 0 ./imagen1.jpg)'"]
  }'
```

### [DELETE] Eliminar una reseña por reviewId
- **URL**: `/reviews/{reviewId}`
- **Descripción**: Elimina una reseña existente usando su reviewId.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/reviews/rev-123456
```

### [DELETE] Eliminar una reseña por ID
- **URL**: `/reviews/id/{id}`
- **Descripción**: Elimina una reseña existente usando su ID de MongoDB.
- **Ejemplo CURL**:
```bash
curl -X DELETE http://localhost:4000/reviews/id/67c0b460b08f46d9ae516540
```

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

### [GET] Obtener todas las preguntas y respuestas de un lugar
- **URL**: `/questions-and-answers/place/{placeId}`
- **Descripción**: Obtiene todas las preguntas y respuestas asociadas a un lugar específico.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/questions-and-answers/place/1
```

### [GET] Obtener una pregunta o respuesta por ID
- **URL**: `/questions-and-answers/{id}`
- **Descripción**: Obtiene una pregunta o respuesta específica por su ID.
- **Ejemplo CURL**:
```bash
curl -X GET http://localhost:4000/questions-and-answers/67c0b460b08f46d9ae516545
```