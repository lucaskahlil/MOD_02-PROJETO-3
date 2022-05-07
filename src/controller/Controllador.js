import { connection } from "../database/connection.js";
import { filmes } from "../model/filmes.js";

export const getIndex = async (req, res) => {
  try {
    const listaFilmes = await filmes.findAll();
    res.render("index.ejs", {
      listaFilmes,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getDetalhes = async (req, res) => {
  try {
    const filmesDetalhes = await filmes.findByPk(req.params.id);
    res.render("detalhes.ejs", {
      filmesDetalhes,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const getCadastro = async (req, res) => {
    try {
      res.render("cadastro.ejs");
    } catch (error) {
      res.send(error.message);
    }
  };

