import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  state_id: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

}