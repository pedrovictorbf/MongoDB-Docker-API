import express from 'express';
const app = express();
app.use(express.json());

const livros = [

    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

app.get('/livros', (_ , res) => {
    res.status(200).json(livros)
});

app.get('/livros/:id', (req, res) => {
    let index = buscarLivro(req.params.id);
    res.json(livros[index]);
});

app.post('/livros', (req , res) => {
    livros.push(req.body)
    res.status(201).json({
        "Sucesso" : "Livro Cadastrado com Sucesso"
    })
});

app.put('/livros/:id', (req, res) => {
    let { id } = req.params;
    let index = buscarLivro(id);
    res.json(livros[index]);
});

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = buscarLivro(id);
    livros.splice(index, 1);
    res.send(`Livro ${id} removido com sucesso`);
});


  function buscarLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}
export default app;