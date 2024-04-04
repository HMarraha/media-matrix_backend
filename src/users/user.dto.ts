
import { IsNotEmpty, IsEmail, Length, Matches } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Username must not be empty' })
  @Length(3, 20, { message: 'Username must be between 3 and 20 characters' })
  username: string;

  @IsNotEmpty({ message: 'Email must not be empty' })
  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  @IsNotEmpty({ message: 'Password must not be empty' })
  @Length(8, 20, { message: 'Password must be between 3 and 20 characters' })
  @Matches(/^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z]{3,20}$/, {
    message: 'Password must contain at least one number and one uppercase letter',
  })
  password: string;
}