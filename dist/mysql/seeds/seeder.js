"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv = require("dotenv");
const create_user_seed_1 = require("./user/create-user.seed");
dotenv.config();
const seed = async () => {
    const connection = await (0, typeorm_1.createConnection)({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: false,
        synchronize: false,
    });
    await new create_user_seed_1.default().run(connection);
    console.log('seeding is finished.');
    await connection.close();
};
seed();
//# sourceMappingURL=seeder.js.map