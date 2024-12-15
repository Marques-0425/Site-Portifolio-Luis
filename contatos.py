from flask import Flask, render_template, request
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)

# Função para enviar o e-mail
def enviar_email(nome, email, mensagem):
  smtp_server = 'smtp.gmail.com'
  smtp_port = 587
  email_user = 'luisoctavio0425@gmail.com'  # Seu e-mail de envio
  email_password = 'sua_senha_de_aplicativo'  # Senha de aplicativo gerada no Google

  from_email = email_user
  to_email = 'destinatario@example.com'  # E-mail para onde será enviado
  subject = f'Contato de {nome}'

# Criar mensagem
  msg = MIMEMultipart()
  msg['From'] = from_email
  msg['To'] = to_email
  msg['Subject'] = subject

  corpo = f"Nome: {nome}\nE-mail: {email}\nMensagem: {mensagem}"

  msg.attach(MIMEText(corpo, 'plain'))

try:
# Conectar ao servidor SMTP do Gmail
  server = smtplib.SMTP(smtp_server, smtp_port)
  server.starttls()  # Iniciar conexão segura (TLS)
  server.login(email_user, email_password)  # Login com o e-mail e senha de aplicativo
  text = msg.as_string()
  server.sendmail(from_email, to_email, text)
  server.quit()
  print("E-mail enviado com sucesso!")
except Exception as e:
  print(f"Erro ao enviar o e-mail: {e}")

# Rota para exibir o formulário de contato
@app.route('/')
def index():
  return render_template('contatos.html')  # Renderiza o arquivo HTML (contatos.html)

# Rota para receber os dados do formulário e enviar o e-mail
@app.route('/enviar-email', methods=['POST'])
def enviar_email_contato():
  nome = request.form['name']
  email = request.form['email']
  mensagem = request.form['message']

  enviar_email(nome, email, mensagem)

  return 'E-mail enviado com sucesso!'

if __name__ == '__main__':
  app.run(debug=True)
