import { City } from "src/city/entity/city.entity";
import { User } from "src/user/entity/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @ManyToOne(() => User, (User) => User.address)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user?: User

  @ManyToOne(() => City, (City) => City.address)
  @JoinColumn({name: 'city_id', referencedColumnName: 'id'})
  city?: City

}