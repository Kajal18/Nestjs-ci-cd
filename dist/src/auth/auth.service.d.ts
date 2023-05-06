import { LoginResponseUsersDTO } from 'src/domains/users/dto/login-response-user.dto';
import { UsersService } from 'src/domains/users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(username: string, password: string): Promise<LoginResponseUsersDTO>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
