import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
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

    @ManyToOne(() => User, (user) => user.id)
  createdBy!: User

  @ManyToOne(() => User, (user) => user.id)
  updatedBy!: User

    @CreateDateColumn()
    created_at!: Date;
    @UpdateDateColumn()
    updated_at!: Date;
    @DeleteDateColumn()
    deleted_at!: Date;

    @OneToMany(() => User, (user) => user.perfil) // note: we will create author property in the Photo class below
    users!: User[]
}