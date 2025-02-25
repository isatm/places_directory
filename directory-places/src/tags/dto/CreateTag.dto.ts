/**
 * DTO para la creación de una etiqueta (`Tag`).
 */
export class CreateTagDto {
  /**
   * Nombre de la etiqueta.
   * Debe ser único y no puede estar vacío.
   */
  tag_name: string;
}
