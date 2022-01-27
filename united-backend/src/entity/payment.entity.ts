import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { users } from './user.entity';

@Entity()
export class payment{
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 20 })
  owner: string;

  @Column({ type: 'bigint' })
  card_number: number;

  @Column("date")
  expire_date;

  @ManyToOne(() => users, users => users.id)
  user_id: number; 

  @Column("datetime", { default: () => "CURRENT_TIMESTAMP" })
  created_at;
}


