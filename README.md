# NestJS + PostgreSQL + Docker - Setup Guide

## ✨ Setup Instructions

### 1. Clone repository and install dependencies

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

---

### 2. Create `.env` file

Create a `.env` file in the project root with the following content:

```env
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=123
DATABASE_NAME=postgres

HEADER_AUTH_TOKEN=this_is_a_test_token
```

---

### 3. Start PostgreSQL using Docker

Create a `docker-compose.yml` file at the project root:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:14
    container_name: nest_postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_DB: postgres
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 123
    volumes:
      - pgdata:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  pgdata:
```

Run the following command to start the container:

```bash
docker-compose up -d
```

---

### 4. Configure Database in NestJS

Inside your `AppModule`:

```ts
TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: getDatabaseConfig, // from shared/config/typeorm.config.ts
}),
```

Define `getDatabaseConfig` in `shared/config/typeorm.config.ts`:

```ts
export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST'),
  port: configService.get<number>('POSTGRES_PORT'),
  username: configService.get<string>('POSTGRES_USERNAME'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  database: configService.get<string>('POSTGRES_NAME'),
  autoLoadEntities: true,
  synchronize: true,
});
```

> **Note**: `synchronize: true` should be disabled in production.

---

### 5. Start the application

```bash
npm run start:dev
```

Access the API at:

- Base URL: [http://localhost:3000/api](http://localhost:3000/api)
- Swagger UI: [http://localhost:3000/docs](http://localhost:3000/docs) (if enabled)

---

### 6. Verify Database Connection

Use any PostgreSQL client (e.g., TablePlus, pgAdmin, DBeaver) with the following credentials:

- **Host**: `localhost`
- **Port**: `5432`
- **Username**: `postgres`
- **Password**: `123`
- **Database**: `postgres`

