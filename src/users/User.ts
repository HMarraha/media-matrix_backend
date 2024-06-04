import { Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

enum Role {
    USER = 'user',
    ADMIN = 'admin',
    PREMIUM = 'premium'
}

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

    @Column({ type: "enum", enum: Role, default: Role.USER })
    role: Role
}
export default Role