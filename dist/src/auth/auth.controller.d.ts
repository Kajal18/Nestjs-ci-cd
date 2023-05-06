import { AuthService } from './auth.service';
import { Logger } from 'winston';
export declare class AuthController {
    private readonly authService;
    private readonly logger;
    constructor(authService: AuthService, logger: Logger);
    login(req: any): Promise<any>;
    getMe(req: any): Promise<any>;
}
