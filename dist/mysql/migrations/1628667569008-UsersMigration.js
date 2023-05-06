"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersMigration1628667569008 = void 0;
class UsersMigration1628667569008 {
    constructor() {
        this.name = 'UsersMigration1628667569008';
    }
    async up(queryRunner) {
        await queryRunner.query('CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `username` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB');
    }
    async down(queryRunner) {
        await queryRunner.query('DROP TABLE `users`');
    }
}
exports.UsersMigration1628667569008 = UsersMigration1628667569008;
//# sourceMappingURL=1628667569008-UsersMigration.js.map