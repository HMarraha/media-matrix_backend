import { UsePipes, ValidationPipe } from "@nestjs/common";
import { IsEmail, IsNotEmpty, Length } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column({unique: true})
    email: string

    @Column()
    password: string
}