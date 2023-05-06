"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("faker");
class CreateUsers {
    async run(connection) {
        await connection
            .createQueryBuilder()
            .insert()
            .into('users')
            .values([
            {
                id: 1,
                name: faker_1.name.firstName(),
                username: faker_1.name.lastName(),
                password: faker_1.internet.password(),
            },
            {
                id: 2,
                name: faker_1.name.firstName(),
                username: faker_1.name.lastName(),
                password: faker_1.internet.password(),
            },
        ])
            .execute();
    }
}
exports.default = CreateUsers;
//# sourceMappingURL=create-user.seed.js.map