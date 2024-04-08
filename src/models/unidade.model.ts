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
import Policial from "./policial.model";
import Subunidade from "./subunidade.model";
import Cidade from "./cidade.model";

@Entity("unidades")
export default class Unidade{
    @PrimaryGeneratedColumn()
    id!: number;
    
    @Column({
        nullable: false,
        length: 100,
    })
    nome!: string;

    @Column({
        nullable: false,
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

    @Column({
        nullable: true,
        length: 100,
    })
    rua!: string;

    @Column({
        nullable: true,
        length: 20,
    })
    numero!: string;

    @Column({
        nullable: true,
        length: 100,
    })
    bairro!: string;

    @Column({
        nullable: true,
        length: 8,
    })
    cep!: string;

    @ManyToOne(() => Cidade, (cidade) => cidade.id)
    cidade!: Cidade;

    @ManyToOne(() => Policial, (policial) => policial.id)
    comandante!: Policial;

    @ManyToOne(() => Policial, (policial) => policial.id)
    subcomandante!: Policial;

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

    @OneToMany(() => Subunidade, (subunidade) => subunidade.unidade) // note: we will create author property in the Photo class below
    subunidades!: Subunidade[]
}