import sqlite3

# Conectar ao banco de dados SQLite
conn = sqlite3.connect('faq_contabilidade.db')
c = conn.cursor()

# Criar a tabela de FAQ
c.execute('''CREATE TABLE IF NOT EXISTS faq (
                pergunta TEXT,
                resposta TEXT)''')

# Inserir algumas perguntas e respostas
c.execute("INSERT INTO faq (pergunta, resposta) VALUES (?, ?)", ("O que é lucro líquido?", "O lucro líquido é o valor que resta após deduzir todas as despesas e impostos de uma empresa."))
c.execute("INSERT INTO faq (pergunta, resposta) VALUES (?, ?)", ("Qual a diferença entre ativo e passivo?", "Ativo são bens e direitos da empresa, passivo são suas obrigações e dívidas."))

conn.commit()
conn.close()
