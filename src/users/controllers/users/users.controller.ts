import { BadRequestException, Body, Controller, Post, Res, Get, Req, UnauthorizedException, Delete } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import * as bcrypt from 'bcrypt'
import { CreateUserDto } from 'src/users/user.dto';
import { JwtService } from '@nestjs/jwt';
import {Request, Response} from 'express';
@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
        ) {

    }
    @Post('signup')
    async signup(@Body() createUserDto: CreateUserDto)  {
        const {username, email, password} = createUserDto

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = this.userService.signup({
            username,
            email,
            password: hashedPassword
        })

        delete (await user).password

        return user

    }

    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response : Response
    ) {
        const user = await this.userService.findOneByEmail(email)
        
        if(!user || await !bcrypt.compare(password, user.password)) {
            throw new BadRequestException('Invalid Credentials')
        }
       

        const jwt = await this.jwtService.signAsync({id: user.id})

        response.cookie('jwt', jwt, {httpOnly: true})

        delete user.password
        return {
            message: 'Logged in successfully',
            user
        }
    }
    
    @Get('user')
    async user(@Req() request: Request) {
        const cookie = request.cookies['jwt']

        const data = await this.jwtService.verifyAsync(cookie)

        if (!data) {
            throw new UnauthorizedException()
        }

        const user = await this.userService.findOneById(data['id'])
        const {password, ...result} = user
        return result
    } catch (e) {
        throw new UnauthorizedException(e)
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt')

        return {
            message: 'Logged out successfully'
        }
    }
}
