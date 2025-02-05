import { Address } from "src/address/entity/address.entity";
import { State } from "src/state/entity/state.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

  @ManyToOne(() => Address, (Address) => Address.city)
  address?: Address[]

  @ManyToOne(() => State, (State) => State.city)
  @JoinColumn({name: 'state_id', referencedColumnName: 'id'})
  state?: State
   
   


}