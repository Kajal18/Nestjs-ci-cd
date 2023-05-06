import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class UsersMigration1628667569008 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
