// Importa o módulo 'express', um framework web mínimo e flexível para Node.js
// que simplifica a criação de rotas, middlewares e gerenciamento de requisições HTTP.
const express = require('express')

// Importa o 'express-handlebars', uma engine de renderização de views (templates)
// que permite interpolar dados do JavaScript dentro de arquivos HTML dinâmicos.
const exphbs = require('express-handlebars')

// Importa o driver 'mysql2', responsável por realizar a ponte de comunicação
// e executar consultas SQL entre a aplicação Node.js e o banco de dados MySQL.
const mysql = require('mysql2')

// Inicializa a aplicação Express criando uma instância do servidor web.
const app = express()

// Define a porta lógica TCP na qual o servidor escutará as requisições HTTP de entrada.
const port = 3000

// Registra e inicializa a engine do Handlebars sob o identificador 'handlebars'.
app.engine('handlebars', exphbs.engine())

// Define o Handlebars como o mecanismo de visualização padrão da aplicação.
// Assim, ao chamar res.render('home'), o Express já sabe procurar por arquivos '.handlebars'.
app.set('view engine', 'handlebars')

// Middleware de arquivos estáticos: disponibiliza publicamente arquivos da pasta 'public'
// (como folhas de estilo CSS, imagens e scripts front-end) sem a necessidade de criar rotas manuais para eles.
app.use(express.static('public'))

// Middleware para decodificar dados enviados por formulários HTML (application/x-www-form-urlencoded).
// A opção 'extended: true' permite a conversão de objetos complexos e arrays aninhados.
app.use(express.urlencoded({
    extended: true
}))

// Middleware para analisar (parse) requisições cujo corpo esteja no formato JSON (application/json),
// transformando a string recebida em um objeto acessível através de 'req.body'.
app.use(express.json())


// Rota GET inicial ('/'): Renderiza a página principal da aplicação.
app.get('/', (req, res) => {
    // Renderiza a view 'home.handlebars' localizada por padrão na pasta 'views/'
    res.render('home')
})

// Rota GET ('/books/add'): Exibe o formulário de cadastro de novos livros.
app.get('/books/add', (req, res) => {
    // Renderiza a view 'registerBooks.handlebars' com o formulário
    res.render('registerBooks')
})

// Rota POST ('/books/add/create'): Processa os dados enviados pelo formulário de cadastro.
app.post('/books/add/create', (req, res) => {
    // Extrai os campos do corpo da requisição (populados pelos middlewares express.urlencoded/json)
    const title = req.body.title // [CORRIGIDO: de req.title para req.body.title]
    const pageqty = req.body.pageqty

    // Constrói a instrução SQL de inserção
    // NOTA DE SEGURANÇA: Para sistemas em produção, recomenda-se usar 'Prepared Statements' 
    // com placeholders (?) para evitar vulnerabilidades de SQL Injection (ex: conn.query(sql, [title, pageqty], ...)).
    const sql = `INSERT INTO Books(title, pageqty) VALUES ('${title}', ${pageqty})`
    
    // Executa a instrução SQL no banco de dados de forma assíncrona
    conn.query(sql, (err) => {
        if (err) {
            console.log(err)
            return
        }
        // Redireciona o cliente para a rota de confirmação de sucesso após a gravação no banco
        res.redirect('/books/add/successful')
    })
})

// Rota GET ('/books/add/successful'): Exibe a tela de confirmação após o cadastro de um livro.
app.get('/books/add/successful', (req, res) => {
    res.render('booksSuccessful')
})

// Define as credenciais e parâmetros de conexão com a instância do banco de dados MySQL.
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'bd_livros_4M'
})

// Estabelece a conexão com o banco de dados antes de inicializar o servidor HTTP.
conn.connect((err) => {
    if (err) {
        // Exibe o erro no console caso a conexão com o MySQL falhe (ex: senha errada, BD inativo)
        console.log('Erro ao conectar ao banco de dados:', err)
        return
    }

    console.log('Conectado ao MySQL com sucesso!')

    // Inicializa o servidor apenas SE a conexão com o banco de dados for bem-sucedida,
    // garantindo que a aplicação só responda a requisições quando estiver 100% pronta.
    app.listen(port, () => {
        console.log(`O servidor está rodando na porta ${port}`)
    })
})