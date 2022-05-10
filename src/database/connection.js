import sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new sequelize(
    // process.env.DB_BASE,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    // {
    //     host: process.env.DB_LOCAL,
    //     port: 5432,
    //     dialect: 'postgres'
    // }
    `postgres://filmes_7b1y_user:gEqPLDxh5B3Y0tzZBtcFb29JfxtaZAGR@dpg-c9ss4sj19n07ml7tfnn0-a/filmes_7b1y`,

 {

dialect: 'postgres',
dialectOptions: {
  ssl: {
    rejectUnauthorized: false,
    require: true
}
}})
