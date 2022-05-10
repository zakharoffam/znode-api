import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  timestampCreated: Date;

  @UpdateDateColumn()
  timestampUpdated: Date;

  @Column({ type: 'varchar', length: 128, nullable: false, unique: true })
  email: string;
}
