interface DatabaseData {
  host: string;
  port: number;
  user: string;
  password: string;
}

interface Pool {
  min: number;
  max: number;
}

interface Migrations {
  tableName?: string;
  directory: string;
}

interface Seeds {
  directory: string;
}

export interface Connection {
  client: string;
  connection: DatabaseData | string;
  pool?: Pool;
  migrations: Migrations;
  seeds: Seeds;
  useNullAsDefault?: boolean;
}

export const development = {
  client: 'postgresql',
  connection: {
    host: 'db',
    port: 5432,
    user: 'admin',
    password: 'root',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
};
export const test = {
  client: 'sqlite3',
  connection: ':memory:',
  useNullAsDefault: true,
  migrations: {
    directory: './src/database/migrations',
  },
  seeds: {
    directory: './src/database/seeds',
  },
};
export const production = {
  client: 'postgresql',
  connection: {
    host: 'db',
    port: 5432,
    user: 'admin',
    password: 'root',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './database/migrations',
  },
  seeds: {
    directory: './database/seeds',
  },
};
