import { Column, DataType, Model, Table, HasMany } from 'sequelize-typescript';
import { Place } from '../places/places.entity';

/**
 * Representa la tabla `categories` en la base de datos.
 * Cada categoría puede tener múltiples lugares asociados.
 */
@Table({ tableName: 'categories', timestamps: false })
export class Category extends Model<Category> {
  /**
   * Identificador único de la categoría.
   * Se genera automáticamente y es la clave primaria.
   */
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  cat_id: number;

  /**
   * Nombre de la categoría.
   * Debe ser único y no puede ser nulo.
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  cat_name: string;

  /**
   * Relación Uno a Muchos con `Place`.
   * Una categoría puede estar asociada a múltiples lugares.
   */
  @HasMany(() => Place)
  places: Place[];
}
