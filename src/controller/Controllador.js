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
    await res.render("cadastro.ejs" , {toggle: false});
  } catch (error) {
    res.send(error.message);
  }
};

export const getDelete = async (req, res) => {
  try {
    await connection.query(`DELETE FROM filmes WHERE id = ${req.params.id}`);
    res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
};

export const postCadastro = async (req, res) => {
  const { nome, diretor, imagem, ano, sinopse } = req.body;
  try {
    if (!nome) {
      res.send("Usuário é obrigatório registrar o nome.");
    }
    if (!diretor) {
      res.send("Usuário é obrigatório registrar o diretor.");
    }
    if (!imagem) {
      res.send("Usuário é obrigatório registrar o link da imagem.");
    }
    if (!ano) {
      res.send("Usuário é obrigatório registrar o ano.");
    }
    if (!sinopse) {
      res.send("Usuário é obrigatório registrar a sinopse.");
    } else {
      await filmes.create({ nome, diretor, imagem, ano, sinopse })
      res.render("cadastro.ejs" , {toggle: true});
    }
  } catch (error) {
    res.send(error.message);
  }
};

export const getEditar = async (req, res) => {
  try {
    const filmeAtual = await filmes.findByPk(req.params.id);
    res.render("editar.ejs", {
      filmeAtual,
    });
  } catch (error) {
    res.send(error.message);
  }
};

export const postEditar = async (req, res) => {
  try {
    const { nome, diretor, imagem, ano, sinopse } = req.body;
    await filmes.update(
      {
        nome: nome,
        diretor: diretor,
        imagem: imagem,
        ano: ano,
        sinopse: sinopse,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.redirect('/');
  } catch (error) {
    res.send(error.message);
  }
};
