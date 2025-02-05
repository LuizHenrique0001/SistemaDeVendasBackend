import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column({ nullable: true })
  complement: string;

  @Column({ nullable: false })
  numberAddress: number;

  @Column({ nullable: false })
  cep: string;

  @Column({ nullable: false })
  city_id: number;

  @Column()
  created_at: Date;

  @Column()
  updated_at: Date;

}