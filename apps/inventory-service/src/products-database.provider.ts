// import { join } from 'path';
// import { DataSource } from 'typeorm';
// import { Products } from './product.entity';
// import { Inventory } from './inventory.entity';

// export const productsDatabase = new DataSource({
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'tcc-db',
//   entities: [Products, Inventory],
//   migrations: [join(__dirname, 'migrations', '*{.ts,.js}')],
// });