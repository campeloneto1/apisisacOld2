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
import Graduacao from "./graduacao.model";
import Setor from "./setor.model";

@Entity("policiais")
export default class Policial{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: true,
        length: 10,
        unique: true
    })
    numeral!: string;

    @Column({
        nullable: false,
        length: 100,
    })
    nome!: string;

    @Column({
        nullable: false,
        length: 50,
    })
    nome_guerra!: string;

    @Column({
        nullable: false,
        length: 8,
        unique: true
    })
    matricula!: string;

    @Column({
        nullable: false,
        length: 11,
        unique: true
    })
    cpf!: string;

    @ManyToOne(() => Graduacao, (graduacao) => graduacao.id)
    graduacao!: Graduacao;

    @ManyToOne(() => Setor, (setor) => setor.id)
    setor!: Setor;

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