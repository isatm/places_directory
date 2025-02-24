import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from '../categories/categories.entity';

/**
 * Representa la entidad place de la base de datos.
 */
@Table({ tableName: 'places' })
export class Place extends Model {
  /**
   * Identificador único del lugar (UUID generado automáticamente).
   */
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  place_id: string;

  /**
   * Nombre del lugar.
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  place_name: string;

  /**
   * Dirección del lugar.
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  place_address: string;

  /**
   * Tipo de lugar (ejemplo: restaurante, parque, museo, café, etc.).
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  place_type: string;

  /**
   * Horarios de operación del lugar.
   */
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  place_hours: string;

  /**
   * Breve descripción del lugar.
   */
  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  place_description: string;
  /**
   * Identificador de la categoría a la que pertenece el lugar.
   * Es una clave foránea que referencia a `Category`.
   */
  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  categoryId: number;
  /**
   * Relación Muchos a Uno con `Category`.
   * Un lugar pertenece a una única categoría.
   */
  @BelongsTo(() => Category)
  category: Category;
}
