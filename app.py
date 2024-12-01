from flask import Flask, request, jsonify
import openai
import sqlite3
from flask_cors import CORS  # Importando o CORS

app = Flask(__name__)

# Configure a chave da API OpenAI
openai.api_key = "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"

# Permitir CORS de todas as origens
CORS(app, resources={r"/chat": {"origins": "*"}})

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")
    
    # Conectar ao banco de dados e procurar pela resposta
    conn = sqlite3.connect('faq_contabilidade.db')
    c = conn.cursor()
    c.execute("SELECT resposta FROM faq WHERE pergunta LIKE ?", ('%' + user_input + '%',))
    result = c.fetchone()

    if result:
        return jsonify({"response": result[0]})
    else:
        # Caso não encontre no banco, usar OpenAI
        response = openai.Completion.create(
    model="gpt-3.5-turbo",  # Verifique se este modelo está acessível
    prompt="Sua pergunta aqui",
    max_tokens=100
)
        return jsonify({"response": response.choices[0].text.strip()})

if __name__ == "__main__":
    app.run(debug=True)
