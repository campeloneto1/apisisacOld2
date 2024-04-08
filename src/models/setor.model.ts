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
import Subunidade from "./subunidade.model";
import Policial from "./policial.model";

@Entity("setores")
export default class Setor{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({
        nullable: false,
        length: 100,
    })
    nome!: string;

    @Column({
        nullable: true,
        length: 50,
    })
    abreviatura!: string;

    @Column({
        nullable: true,
        length: 11,
    })
    telefone!: string;

    @Column({
        nullable: true,
        length: 100,
        unique: true
    })
    email!: string;

    @ManyToOne(() => Subunidade, (subunidade) => subunidade.id)
    subunidade!: Subunidade

    @ManyToOne(() => Policial, (policial) => policial.id)
    comandante!: Policial

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