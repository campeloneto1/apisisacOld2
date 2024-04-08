import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  BeforeInsert,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from "typeorm";
import Bcrypt from '../utilities/bcrypt';
import GenerateSalt from "../utilities/generate-salt";
import Perfil from "./perfil.model";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    nullable: false,
    length: 100,
  })
  nome!: string;

  @Column({
    length: 11,
    nullable: true,
  })
  telefone!: string;

  @Column({
    length: 100,
    nullable: true,
    unique: true
  })
  email!: string;

  @Column({
    length: 11,
    unique: true,
    nullable: false,
  })
  cpf!: string;

  @Column({
    length: 100,
    nullable: false,
    select: false
  })
  password!: string;

  @Column({
    length: 100,
    unique: true,
    nullable: false,
    select: false
  })
  salt!: string;

  @ManyToOne(() => Perfil, (perfil) => perfil.users)
  perfil!: User

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

  @BeforeInsert()
  async hashPassword() {
    this.salt = GenerateSalt(60);
    this.password = await Bcrypt.hashString(`${this.cpf}${this.salt}`);
  }

}
