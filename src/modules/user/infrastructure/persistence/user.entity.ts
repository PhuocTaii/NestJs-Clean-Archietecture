import { BaseEntity } from 'src/shared/base/entity.base';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  public name: string;

  @Column({ type: 'int', default: 0 })
  public point: number;

  constructor(name: string, point: number) {
    super();
    this.name = name;
    this.point = point;
  }
}
