import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import User from './user.model';

@Entity("perfis")
export default class Perfil{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: false,
        length: 100
    })
    nome!: string;
    
    @Column({
        nullable: true
    })
    administrador!: boolean

    @Column({
        nullable: true
    })
    gestor!: boolean

    @OneToMany(() => User, (user) => user.perfil) // note: we will create author property in the Photo class below
    users!: User[]
}