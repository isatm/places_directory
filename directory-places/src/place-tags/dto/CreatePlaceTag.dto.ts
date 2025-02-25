export class CreatePlaceTagDto {
  /**
   * Identificador del lugar.
   * Debe existir en la base de datos.
   */
  place_id: number;

  /**
   * Identificador de la etiqueta.
   * Debe existir en la base de datos.
   */
  tag_id: number;
}
