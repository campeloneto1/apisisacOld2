import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinTable, OneToOne, JoinColumn } from 'typeorm';
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
    administrador!: boolean;

    @Column({
        nullable: true
    })
    gestor!: boolean;

    @OneToOne(() => User)
    @JoinColumn()
    createdeBy!: User;

    @OneToOne(() => User)
    @JoinColumn()
    updatedBy!: User;

    @OneToMany(() => User, (user) => user.perfil) // note: we will create author property in the Photo class below
    users!: User[]
}