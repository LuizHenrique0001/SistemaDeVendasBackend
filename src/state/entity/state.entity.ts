import { City } from "src/city/entity/city.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

  @OneToMany(()=> City, (City)=> City.state)
  city?: City[]

}