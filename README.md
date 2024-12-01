
# Chatbot Contábil

Este projeto implementa um chatbot contábil utilizando Flask para o backend e React para o frontend. O chatbot responde a perguntas sobre contabilidade, usando um banco de dados SQLite para armazenar respostas frequentes e a API OpenAI para responder perguntas mais complexas.

## Funcionalidades
- **Interação com o usuário**: O chatbot recebe perguntas do usuário e fornece respostas sobre contabilidade.
- **Respostas do banco de dados**: O chatbot consulta um banco de dados SQLite para buscar respostas pré-definidas relacionadas à contabilidade.
- **Integração com OpenAI**: Caso a pergunta não esteja no banco de dados, o chatbot utiliza a API OpenAI para gerar uma resposta.
- **Interface de chat**: Uma interface interativa onde o usuário pode digitar perguntas e visualizar as respostas do bot.
- **Armazenamento de histórico**: O histórico de conversas é armazenado para manter o contexto durante a interação.

## Tecnologias Utilizadas
- **Python**: Utilizado para o backend, com o Flask como framework web.
- **Flask**: Framework web utilizado para criar a API que gerencia a comunicação entre o frontend e o backend.
- **OpenAI**: API utilizada para gerar respostas inteligentes quando o banco de dados não tem uma resposta.
- **SQLite**: Banco de dados utilizado para armazenar perguntas e respostas frequentes sobre contabilidade.
- **React**: Framework JavaScript utilizado para construir a interface de chat interativa.
- **Axios**: Biblioteca utilizada para realizar chamadas HTTP entre o frontend (React) e o backend (Flask).

## Como Rodar o Projeto
### Pré-requisitos
1. **Instalar o Python**: Certifique-se de ter o Python instalado. Você pode baixar a versão mais recente no [site oficial do Python](https://www.python.org/).
2. **Instalar as dependências do backend (Flask e SQLite)**: No terminal, execute:
   ```bash
   pip install flask openai flask-cors
   ```
3. **Configurar a API do OpenAI**: Certifique-se de substituir a chave da API do OpenAI no código Flask com a sua chave.
4. **Instalar o Node.js e o NPM**: O React depende do Node.js e do NPM. Você pode baixá-los no [site oficial do Node.js](https://nodejs.org/).
5. **Configurar a chave da api OpenIA**: Modifique o arquivo app.py e insira a sua chave da api OpenIA
   openai.api_key = ""

### Rodando o Backend
1. Clone o repositório.
2. Navegue até a pasta do backend e execute:
   ```bash
   python app.py
   ```

### Rodando o Frontend
1. Navegue até a pasta do frontend e execute:
   ```bash
   npm install
   npm start
   ```

### Testando o Chatbot
Após rodar o backend e o frontend, acesse a interface do chatbot em [http://localhost:3000](http://localhost:3000). Você pode começar a conversar com o chatbot digitando perguntas sobre contabilidade. O sistema primeiro tentará encontrar uma resposta no banco de dados, e caso não encontre, utilizará a API OpenAI para fornecer uma resposta. 

## Estrutura do Projeto
```bash
.
├── backend/
│   ├── app.py               # Código do servidor Flask
│   └── faq_contabilidade.db  # Banco de dados SQLite com perguntas e respostas
├── frontend/
│   ├── public/
│   └── src/
│       └── App.js           # Código principal do React
└── README.md                # Este arquivo
```

## Arquivo `app.py`
O backend está implementado em Flask. O arquivo `app.py` define a rota `/chat`, que recebe perguntas via POST, consulta o banco de dados SQLite e, caso necessário, faz uma chamada para a API OpenAI.

## Arquivo `App.js`
No frontend, o arquivo `App.js` contém a lógica para exibir a interface de chat, capturar a entrada do usuário, enviar a pergunta ao backend, e exibir a resposta do chatbot.
