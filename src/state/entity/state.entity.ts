import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class State {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

}