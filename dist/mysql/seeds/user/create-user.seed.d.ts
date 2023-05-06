import { Connection } from 'typeorm';
export default class CreateUsers {
    run(connection: Connection): Promise<any>;
}
