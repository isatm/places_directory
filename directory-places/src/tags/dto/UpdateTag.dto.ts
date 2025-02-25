/**
 * DTO para la actualización de una etiqueta (`Tag`).
 */
export class UpdateTagDto {
  /**
   * Nombre de la etiqueta actualizado.
   * Debe ser único y no puede estar vacío.
   */
  tag_name?: string;
}
