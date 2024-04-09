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

@Entity("sexos")
export default class Sexo{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({
        nullable: false,
        length: 100,
    })
    nome!: string;

    @ManyToOne(() => User, (user) => user.id)
    created_by!: User;

    @ManyToOne(() => User, (user) => user.id)
    updated_by!: User;

    @ManyToOne(() => User, (user) => user.id)
    deleted_by!: User;

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updated_at!: Date;
    @DeleteDateColumn()
    deleted_at!: Date;

}