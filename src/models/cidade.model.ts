import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from "typeorm";
import User from './user.model'
import Estado from "./estado.model";

@Entity("cidades")
export default class Cidade{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({
        nullable: false,
        length: 100,
    })
    nome!: string;    

    @ManyToOne(() => Estado, (estado) => estado.id)
    estado!: Estado

    @ManyToOne(() => User, (user) => user.id)
    created_by!: User

    @ManyToOne(() => User, (user) => user.id)
    updated_by!: User

    @ManyToOne(() => User, (user) => user.id)
    deleted_by!: User

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updated_at!: Date;
    @DeleteDateColumn()
    deleted_at!: Date;

}