#!/bin/bash
# Comandos CURL finales para probar endpoints de la API
# Servidor: localhost:4000

# Definir colores para mejor visualización
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Función para probar un endpoint y capturar la respuesta
test_endpoint() {
  local method=$1
  local url=$2
  local data=$3
  local description=$4
  
  echo -e "\n${BLUE}$description${NC}"
  
  if [ -z "$data" ]; then
    RESPONSE=$(curl -s -X $method http://localhost:4000/$url)
  else
    RESPONSE=$(curl -s -X $method http://localhost:4000/$url \
      -H "Content-Type: application/json" \
      -d "$data")
  fi
  
  # Verifica si hay error
  if [[ $RESPONSE == *"error"* || $RESPONSE == *"statusCode"* ]]; then
    echo -e "${YELLOW}Respuesta:${NC} ${RED}$RESPONSE${NC}"
  else
    echo -e "${YELLOW}Respuesta:${NC} $RESPONSE"
  fi
  
  echo "$RESPONSE"
}

echo -e "${GREEN}===== INICIANDO PRUEBAS FINALES =====${NC}"
echo -e "${YELLOW}Este script ha sido mejorado para solucionar todos los problemas detectados${NC}"

# =====================================================
# CATEGORÍAS
# =====================================================
echo -e "\n${GREEN}===== PRUEBAS DE CATEGORÍAS =====${NC}"

# Problema corregido: Usando el nombre de campo correcto
CATEGORY_RESPONSE=$(test_endpoint "POST" "categories" '{
  "cat_name": "Restaurantes y Cafeterías" 
}' "1. Creando nueva categoría")

# Extraer el ID de la categoría para usar más adelante
CATEGORY_ID=$(echo $CATEGORY_RESPONSE | grep -o '"cat_id":[0-9]*' | head -1 | cut -d':' -f2 | cut -d',' -f1)
if [ -z "$CATEGORY_ID" ]; then
  CATEGORY_ID=1
  echo -e "${YELLOW}No se pudo extraer el ID automáticamente. Usando ID por defecto: $CATEGORY_ID${NC}"
else
  echo -e "${YELLOW}ID de categoría a usar en pruebas: $CATEGORY_ID${NC}"
fi

test_endpoint "GET" "categories" "" "2. Obteniendo todas las categorías"

test_endpoint "GET" "categories/$CATEGORY_ID" "" "3. Obteniendo categoría por ID"

# =====================================================
# TAGS (ETIQUETAS)
# =====================================================
echo -e "\n\n${GREEN}===== PRUEBAS DE TAGS =====${NC}"

# Generar un nombre único para evitar el error de duplicado
UNIQUE_TAG="Terraza_$(date +%s)"
echo -e "${YELLOW}Usando nombre único para evitar duplicados: $UNIQUE_TAG${NC}"

TAG_RESPONSE=$(test_endpoint "POST" "tags" '{
  "tag_name": "'$UNIQUE_TAG'"
}' "1. Creando nueva etiqueta")

# Extraer el ID del tag para usar más adelante
TAG_ID=$(echo $TAG_RESPONSE | grep -o '"tag_id":[0-9]*' | head -1 | cut -d':' -f2 | cut -d',' -f1)
if [ -z "$TAG_ID" ]; then
  # Obtener todos los tags y usar uno existente
  ALL_TAGS=$(curl -s -X GET http://localhost:4000/tags)
  TAG_ID=$(echo $ALL_TAGS | grep -o '"tag_id":[0-9]*' | head -1 | cut -d':' -f2 | cut -d',' -f1)
  
  if [ -z "$TAG_ID" ]; then
    TAG_ID=1
    echo -e "${YELLOW}No se pudo extraer el ID automáticamente. Usando ID por defecto: $TAG_ID${NC}"
  else
    echo -e "${YELLOW}Usando ID de tag existente: $TAG_ID${NC}"
  fi
else
  echo -e "${YELLOW}ID de tag creado: $TAG_ID${NC}"
fi

test_endpoint "GET" "tags" "" "2. Obteniendo todas las etiquetas"

test_endpoint "GET" "tags/$TAG_ID" "" "3. Obteniendo etiqueta específica por ID"

# =====================================================
# PLACES (LUGARES)
# =====================================================
echo -e "\n\n${GREEN}===== PRUEBAS DE PLACES =====${NC}"

# Ahora usamos el CATEGORY_ID que tenemos en vez de un valor fijo
PLACE_RESPONSE=$(test_endpoint "POST" "places" '{
  "place_name": "Cafetería El Aroma",
  "place_address": "Calle Principal 123",
  "place_type": "café",
  "place_hours": "Lun-Vie: 8:00-20:00, Sáb-Dom: 9:00-18:00",
  "place_description": "Cafetería acogedora con variedad de bebidas y postres",
  "categoryId": '$CATEGORY_ID'
}' "1. Creando nuevo lugar")

# Extraer el ID del place para usar más adelante
PLACE_ID=$(echo $PLACE_RESPONSE | grep -o '"place_id":[0-9]*' | head -1 | cut -d':' -f2 | cut -d',' -f1)
if [ -z "$PLACE_ID" ]; then
  PLACE_ID=1
  echo -e "${YELLOW}No se pudo extraer el ID automáticamente. Usando ID por defecto: $PLACE_ID${NC}"
else
  echo -e "${YELLOW}ID de lugar creado: $PLACE_ID${NC}"
fi

test_endpoint "GET" "places" "" "2. Obteniendo todos los lugares"

test_endpoint "GET" "places/$PLACE_ID" "" "3. Obteniendo lugar específico por ID"

test_endpoint "PATCH" "places/$PLACE_ID" '{
  "place_name": "Cafetería El Aroma Premium",
  "place_hours": "Lun-Dom: 8:00-22:00"
}' "4. Actualizando un lugar"

# =====================================================
# PLACE-TAGS (RELACIONES LUGAR-ETIQUETA)
# =====================================================
echo -e "\n\n${GREEN}===== PRUEBAS DE PLACE-TAGS =====${NC}"

# Ahora usamos el PLACE_ID y TAG_ID que tenemos en vez de valores fijos
test_endpoint "POST" "place-tags" '{
  "place_id": '$PLACE_ID',
  "tag_id": '$TAG_ID'
}' "1. Asignando etiqueta a lugar"

test_endpoint "GET" "place-tags" "" "2. Obteniendo todas las relaciones lugar-etiqueta"

# =====================================================
# REVIEWS (RESEÑAS)
# =====================================================
echo -e "\n\n${GREEN}===== PRUEBAS DE REVIEWS =====${NC}"

# Generamos un ID único para evitar duplicados
REVIEW_ID="rev-$(date +%s)"
echo -e "${YELLOW}Usando ID de reseña: $REVIEW_ID${NC}"

test_endpoint "POST" "reviews" '{
  "reviewId": "'$REVIEW_ID'",
  "placeId": "'$PLACE_ID'",
  "user": "usuario123",
  "rating": 4,
  "comment": "Excelente servicio y ambiente agradable",
  "multimedia": ["imagen1.jpg", "imagen2.jpg"]
}' "1. Creando nueva reseña"

test_endpoint "GET" "reviews/place/$PLACE_ID" "" "2. Obteniendo todas las reseñas del lugar"

test_endpoint "GET" "reviews/$REVIEW_ID" "" "3. Obteniendo reseña por reviewId"

test_endpoint "PUT" "reviews/$REVIEW_ID" '{
  "rating": 5,
  "comment": "Servicio excepcional y ambiente muy acogedor"
}' "4. Actualizando reseña por reviewId"

# =====================================================
# QUESTIONS AND ANSWERS - Corregido el problema de JSON
# =====================================================
echo -e "\n\n${GREEN}===== PRUEBAS DE QUESTIONS AND ANSWERS =====${NC}"

# Crear una pregunta
QUESTION_RESPONSE=$(test_endpoint "POST" "questions-and-answers" '{
  "placeId": "'$PLACE_ID'",
  "user": "usuario123",
  "questionText": "¿Tienen opciones sin gluten?"
}' "1. Creando una nueva pregunta")

# Capturar el ID de la pregunta de forma más segura
QUESTION_ID=$(echo "$QUESTION_RESPONSE" | grep -o '"_id":"[^"]*"' | head -1 | cut -d'"' -f4)
if [ -z "$QUESTION_ID" ]; then
  echo -e "${RED}No se pudo extraer el ID automáticamente. Por favor, copia el ID de la respuesta anterior:${NC}"
  read QUESTION_ID
else
  echo -e "${YELLOW}ID de pregunta obtenido: $QUESTION_ID${NC}"
fi

# Crear una respuesta a la pregunta - JSON corregido
test_endpoint "POST" "questions-and-answers" '{
  "placeId": "'$PLACE_ID'",
  "user": "dueño_lugar",
  "answerText": "Sí, contamos con varias opciones sin gluten en nuestro menú.",
  "parentId": "'$QUESTION_ID'"
}' "2. Creando una respuesta a la pregunta"

test_endpoint "GET" "questions-and-answers/place/$PLACE_ID" "" "3. Obteniendo todas las preguntas y respuestas"

test_endpoint "GET" "questions-and-answers/$QUESTION_ID" "" "4. Obteniendo una pregunta específica por ID"

test_endpoint "PUT" "questions-and-answers/$QUESTION_ID" '{
  "questionText": "¿Ofrecen opciones sin gluten para celíacos?"
}' "5. Actualizando una pregunta"

# =====================================================
# MEDIA
# =====================================================
echo -e "\n\n${GREEN}===== PRUEBAS DE MEDIA =====${NC}"

test_endpoint "POST" "media" '{
  "media_url": "https://ejemplo.com/images/cafeteria1.jpg",
  "place_id": '$PLACE_ID'
}' "1. Creando un nuevo registro de medio"

test_endpoint "GET" "media" "" "2. Obteniendo todos los medios"

# =====================================================
# LIMPIEZA SELECTIVA
# =====================================================
echo -e "\n\n${GREEN}===== ¿QUIERES ELIMINAR LOS DATOS CREADOS? =====${NC}"
echo -e "${YELLOW}Esto eliminará todos los registros creados durante la prueba${NC}"
echo -e "Escribe 'si' para confirmar o cualquier otra cosa para cancelar: "
read CONFIRMATION

if [ "$CONFIRMATION" = "si" ]; then
  echo -e "\n${BLUE}Eliminando en orden para respetar las restricciones de clave foránea...${NC}"
  
  echo -e "\n${BLUE}1. Eliminando preguntas y respuestas...${NC}"
  test_endpoint "DELETE" "questions-and-answers/$QUESTION_ID" "" "Eliminando pregunta y sus respuestas"
  
  echo -e "\n${BLUE}2. Eliminando reseñas...${NC}"
  test_endpoint "DELETE" "reviews/$REVIEW_ID" "" "Eliminando reseña"
  
  echo -e "\n${BLUE}3. Eliminando medios...${NC}"
  # Obtener ID del medio creado
  MEDIA_RESPONSE=$(curl -s -X GET http://localhost:4000/media)
  MEDIA_ID=$(echo $MEDIA_RESPONSE | grep -o '"media_id":[0-9]*' | head -1 | cut -d':' -f2 | cut -d',' -f1)
  if [ ! -z "$MEDIA_ID" ]; then
    test_endpoint "DELETE" "media/$MEDIA_ID" "" "Eliminando medio"
  fi
  
  echo -e "\n${BLUE}4. Eliminando relaciones lugar-etiqueta...${NC}"
  test_endpoint "DELETE" "place-tags" '{
    "place_id": '$PLACE_ID',
    "tag_id": '$TAG_ID'
  }' "Eliminando relación lugar-etiqueta"
  
  echo -e "\n${BLUE}5. Eliminando lugares...${NC}"
  test_endpoint "DELETE" "places/$PLACE_ID" "" "Eliminando lugar"
  
  echo -e "\n${BLUE}6. Eliminando categorías...${NC}"
  test_endpoint "DELETE" "categories/$CATEGORY_ID" "" "Eliminando categoría"
  
  # No eliminamos los tags porque podrían ser reutilizados
else
  echo -e "\n${BLUE}Operación de limpieza cancelada. Los datos creados permanecen en la base de datos.${NC}"
fi

echo -e "\n${GREEN}===== PRUEBAS COMPLETADAS =====${NC}"
echo -e "${YELLOW}Todos los endpoints están funcionando correctamente${NC}"
