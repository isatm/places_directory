import {
  Column,
  DataType,
  Model,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Place } from '../places/places.entity';
import { Tag } from '../tags/tags.entity';

/**
 * Tabla intermedia `place_tags` que gestiona la relación muchos a muchos
 * entre `Place` y `Tag`.
 */
@Table({ tableName: 'place_tags', timestamps: false })
export class PlaceTag extends Model<PlaceTag> {
  /**
   * Identificador del lugar.
   * Clave foránea que referencia a `Place`.
   */
  @ForeignKey(() => Place)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true, // 🔹 Aquí se agrega la clave primaria sin usar @PrimaryKey()
  })
  place_id: number;

  /**
   * Identificador de la etiqueta.
   * Clave foránea que referencia a `Tag`.
   */
  @ForeignKey(() => Tag)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true, // 🔹 También se agrega aquí como parte de la clave compuesta
  })
  tag_id: number;
}
