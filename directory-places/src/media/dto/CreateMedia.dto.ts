/**
 *  DTO para la creación de una nueva imagen en la base de datos.
 */
export class CreateMediaDto {
  /**
   *  URL de la imagen a almacenar.
   */
  url: string;

  /**
   *  Descripción opcional de la imagen.
   */
  description?: string;

  /**
   *  ID del lugar al que pertenece la imagen.
   */
  place_id: number;
}
