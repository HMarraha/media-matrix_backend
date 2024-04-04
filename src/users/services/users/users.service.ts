import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/User';
import { Repository } from 'typeorm';

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
}
