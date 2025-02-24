import {
  Column,
  DataType,
  Model,
  Table,
  BelongsToMany,
} from 'sequelize-typescript';
import { Place } from '../places/places.entity';
import { PlaceTag } from '../place-tags/place-tags.entity';

/**
 * Representa la tabla `tags` en la base de datos.
 * Almacena etiquetas que describen características de un lugar.
 */
@Table({ tableName: 'tags', timestamps: false })
export class Tag extends Model<Tag> {
  /**
   * Identificador único de la etiqueta.
   * Se genera automáticamente y es la clave primaria.
   */
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  tag_id: number;

  /**
   * Nombre de la etiqueta.
   * Debe ser único y no puede ser nulo.
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  tag_name: string;

  /**
   * Relación Muchos a Muchos con `Place`.
   * Se maneja a través de la tabla intermedia `PlaceTag`.
   */
  @BelongsToMany(() => Place, () => PlaceTag)
  places: Place[];
}
