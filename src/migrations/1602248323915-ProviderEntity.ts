import { MigrationInterface, QueryRunner } from "typeorm";

export class ProviderEntity1602248323915 implements MigrationInterface {



    public async up(queryRunner: QueryRunner): Promise<void> {
        const created = new Date();
        const updated = new Date();
        await queryRunner.query("INSERT INTO  `providers` ('id','created','updated','name') VALUES ('f78ad4cd-5716-44fc-bd3c-c0bc71613035','" + created + "','" + updated + "','Tiwari Brothers')");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DELETE FROM `providers` where id ='f78ad4cd-5716-44fc-bd3c-c0bc71613035'");
    }

}
