import { UsersService } from './users.service';
import { UsersDTO } from './dto/users.dto';
import { CreateUsersDTO } from './dto/create-user.dto';
import { UpdateUsersDTO } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    showAllUsers(): Promise<UsersDTO[]>;
    createUsers(data: CreateUsersDTO): Promise<UsersDTO>;
    readUser(id: number): Promise<UsersDTO>;
    uppdateUser(id: number, data: UpdateUsersDTO): Promise<UsersDTO>;
    deleteUser(id: number): Promise<unknown>;
}
