import { Repository } from 'typeorm';
import { UsersEntity } from './entities/users.entity';
import { UsersDTO } from './dto/users.dto';
import { CreateUsersDTO } from './dto/create-user.dto';
import { UpdateUsersDTO } from './dto/update-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersEntity>);
    showAll(): Promise<UsersDTO[]>;
    create(data: CreateUsersDTO): Promise<UsersDTO>;
    getById(id: number): Promise<UsersDTO>;
    update(id: number, data: UpdateUsersDTO): Promise<UsersDTO>;
    destroy(id: number): Promise<unknown>;
    getByUsername(username: string): Promise<UsersDTO>;
}
