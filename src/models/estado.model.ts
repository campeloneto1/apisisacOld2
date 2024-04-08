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
import Pais from "./pais.model";
import Cidade from "./cidade.model";

@Entity("estados")
export default class Estado{
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

    @ManyToOne(() => Pais, (pais) => pais.id)
    pais!: Pais

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
    

    @OneToMany(() => Cidade, (cidade) => cidade.estado) // note: we will create author property in the Photo class below
    cidades!: Cidade[]

}