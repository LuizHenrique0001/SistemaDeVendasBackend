import { Address } from 'src/address/entity/address.entity';
import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm';
@Entity()
export class User{
    
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;
  
  @Column( { nullable: true })
  phone: string;

  @Column({ nullable: false })
  cpf: string;

  @Column({ nullable: false })
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: false })
  type_user: number;
  
  @Column({ nullable: false })
  status: boolean;

  @OneToMany(() => Address, (Address) => Address.user)
  address?: Address[]
}
