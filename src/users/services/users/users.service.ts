import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/User';
import { Repository } from 'typeorm';
import Role from 'src/users/User'
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>
    ) {

    }

    async signup(data: any): Promise<User> {
        return this.userRepository.save(data)
    }

    async findOneByEmail(email: string): Promise<User> {
        return this.userRepository.findOne({where: {email}})
    }

    async findOneById(id: number): Promise<User> {
        return this.userRepository.findOne({where: {id}})
    }
    async assignRole(userId: number, role: Role): Promise<User> {
        try {
            const user = await this.userRepository.findOne({where : {id: userId}});

            if (!user) {
                throw new Error('User not found');
            }

            user.role = role;
            return this.userRepository.save(user);
        } catch (error) {
            throw new Error(`Error assigning role: ${error.message}`);
        }
    }
}
