import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from "typeorm";
  import Cidade from "./cidade.model";
  import Graduacao from "./graduacao.model";
  import Setor from "./setor.model";
  import Sexo from "./sexo.model";
  import User from './user.model'

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

    @Column({
        nullable: true,
        length: 100,
    })
    email!: string;

    @Column({
        nullable: true,
        length: 11,
    })
    telefone1!: string;

    @Column({
        nullable: true,
        length: 11,
    })
    telefone2!: string;

    @Column({
        nullable: true,
    })
    data_nascimento!: Date;

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

    @Column({
        nullable: true,
    })
    data_ingresso!: Date;

    @Column({
        nullable: true,
    })
    data_apresentacao!: Date;

    @Column({
        nullable: true,
        length: 50,
    })
    boletim_inclusao!: string;

    @Column({
        nullable: true,
        length: 50,
    })
    boletim_apresentacao!: string;

    @Column({
        nullable: true,
        length: 50,
    })
    boletim_transferencia!: string;

    @ManyToOne(() => Cidade, (cidade) => cidade.id)
    cidade!: Cidade;

    @ManyToOne(() => Sexo, (sexo) => sexo.id)
    sexo!: Sexo;

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