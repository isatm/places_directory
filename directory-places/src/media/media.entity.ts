import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Place } from '../places/places.entity';

/**
 * Representa la tabla `media` en la base de datos.
 * Almacena información sobre las imágenes de los lugares.
 */
@Table({ tableName: 'media', timestamps: false })
export class Media extends Model<Media> {
  /**
   * Identificador único de la imagen.
   * Se genera automáticamente y es la clave primaria.
   */
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  media_id: number;

  /**
   * URL de la imagen.
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  media_url: string;

  /**
   * Relación con la tabla `places`.
   * Cada imagen pertenece a un solo lugar.
   */
  @ForeignKey(() => Place)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  place_id: number;

  /**
   * Relación con `Place`.
   */
  @BelongsTo(() => Place)
  place: Place;
}
