import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'dotenv/config';

@Injectable()
export class DBaseConnectionService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
      dropSchema: false,
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrations: ["dist/migrations/*.js"],
      cli: {
        entitiesDir: "dist",
        migrationsDir: "dist/migrations"
      }
    }
  }
}