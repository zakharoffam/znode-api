import { join } from 'path';

export default {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  autoLoadEntities: true,
  synchronize: false,
  retryAttempts: 1,
  cli: {
    migrationsDir: join(__dirname, 'migrations'),
  },
  migrations: [join(__dirname, 'migrations', '*.{ts,js}')],
  entities: [
    join(__dirname, 'src', '**', '*.entity.{ts,js}'),
    join(__dirname, 'src', '**', '**', '*.entity.{ts,js}'),
    join(__dirname, 'src', '**', '**', '**', '*.entity.{ts,js}'),
  ],
  subscribers: [
    join(__dirname, 'src', '**', '*.subscribers.{ts,js}'),
    join(__dirname, 'src', '**', '**', '*.subscribers.{ts,js}'),
    join(__dirname, 'src', '**', '**', '**', '*.subscribers.{ts,js}'),
  ],
};
