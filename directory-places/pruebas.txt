CRUD ENDPOINTS
-------------------------
        PLACES
-------------------------

1️⃣ [POST] Crear un lugar  
   URL: /places  
   Body (JSON):
   {
     "place_name": "Parque Central",
     "place_description": "Un hermoso parque en el centro de la ciudad",
     "category_id": 1
   }

2️⃣ [GET] Obtener todos los lugares  
   URL: /places  

3️⃣ [GET] Obtener un lugar por ID  
   URL: /places/{id}  
   Ejemplo: /places/1  

4️⃣ [PUT] Actualizar un lugar  
   URL: /places/{id}  
   Body (JSON):
   {
     "place_name": "Parque Nacional",
     "place_description": "Un parque con zonas ecológicas",
     "category_id": 2
   }

5️⃣ [DELETE] Eliminar un lugar  
   URL: /places/{id}  
   Ejemplo: /places/1  


-------------------------
     CATEGORIES
-------------------------

1️⃣ [POST] Crear una categoría  
   URL: /categories  
   Body (JSON):
   {
     "cat_name": "Restaurantes"
   }

2️⃣ [GET] Obtener todas las categorías  
   URL: /categories  

3️⃣ [GET] Obtener una categoría por ID  
   URL: /categories/{id}  
   Ejemplo: /categories/1  

4️⃣ [PUT] Actualizar una categoría  
   URL: /categories/{id}  
   Body (JSON):
   {
     "cat_name": "Cafeterías"
   }

5️⃣ [DELETE] Eliminar una categoría  
   URL: /categories/{id}  
   Ejemplo: /categories/1  


-------------------------
        TAGS
-------------------------

1️⃣ [POST] Crear una etiqueta  
   URL: /tags  
   Body (JSON):
   {
     "tag_name": "Pet-Friendly"
   }

2️⃣ [GET] Obtener todas las etiquetas  
   URL: /tags  

3️⃣ [GET] Obtener una etiqueta por ID  
   URL: /tags/{id}  
   Ejemplo: /tags/1  

4️⃣ [PUT] Actualizar una etiqueta  
   URL: /tags/{id}  
   Body (JSON):
   {
     "tag_name": "Wi-Fi Gratis"
   }

5️⃣ [DELETE] Eliminar una etiqueta  
   URL: /tags/{id}  
   Ejemplo: /tags/1  


-------------------------
        PLACE-TAG
-------------------------

1️⃣ [POST] Asignar una etiqueta a un lugar  
   URL: /place-tags  
   Body (JSON):
   {
     "place_id": 1,
     "tag_id": 2
   }

2️⃣ [GET] Obtener todas las relaciones `Place-Tag`  
   URL: /place-tags  

3️⃣ [DELETE] Eliminar una relación `Place-Tag`  
   URL: /place-tags  
   Body (JSON):
   {
     "place_id": 1,
     "tag_id": 2
   }

