import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany
  } from "typeorm";
import User from './user.model'
import Estado from "./estado.model";

@Entity("paises")
export default class Pais{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({
        nullable: false,
        length: 100,
    })
    nome!: string;

    @Column({
        nullable: false,
        length: 20,
    })
    abreviatura!: string;
    

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

    @OneToMany(() => Estado, (estado) => estado.pais) // note: we will create author property in the Photo class below
    estados!: Estado[];

}