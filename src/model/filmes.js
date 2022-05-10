import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const filmes = connection.define('filmes', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    diretor: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    sinopse: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});

async function initTable(){
    try {
        await filmes.sync()
    } catch (error) {
        return error.message
    }
}

initTable()


