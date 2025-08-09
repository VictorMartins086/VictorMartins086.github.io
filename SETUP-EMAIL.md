# Configuração do Formulário de Contato com EmailJS

Para que o formulário de contato funcione e envie emails diretamente para **martinsvictor086@gmail.com**, siga estes passos:

## 📧 Passo 1: Criar Conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie uma conta gratuita
3. Confirme seu email

## ⚙️ Passo 2: Configurar Serviço de Email

1. No dashboard do EmailJS, vá em **"Email Services"**
2. Clique em **"Add New Service"**
3. Escolha **"Gmail"**
4. Conecte sua conta Gmail (martinsvictor086@gmail.com)
5. Anote o **Service ID** (ex: service_abc123)

## 📝 Passo 3: Criar Template de Email

1. Vá em **"Email Templates"**
2. Clique em **"Create New Template"**
3. Configure o template:

**Subject:**
```
Nova mensagem do portfolio - {{from_name}}
```

**Content:**
```
Olá Victor,

Você recebeu uma nova mensagem através do seu portfolio:

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado automaticamente do seu portfolio
```

4. Anote o **Template ID** (ex: template_xyz789)

## 🔑 Passo 4: Obter Chaves da API

1. Vá em **"Account"** > **"API Keys"**
2. Copie sua **Public Key** (ex: user_abc123)

## 🛠️ Passo 5: Configurar o Código

No arquivo `script.js`, substitua estas linhas:

```javascript
// Linha 3: Substituir YOUR_PUBLIC_KEY
emailjs.init("SUA_PUBLIC_KEY_AQUI");

// Linha 33: Substituir YOUR_SERVICE_ID e YOUR_TEMPLATE_ID
emailjs.send('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', templateParams)
```

**Exemplo:**
```javascript
emailjs.init("user_abc123");
emailjs.send('service_gmail123', 'template_contact456', templateParams)
```

## ✅ Passo 6: Testar

1. Salve os arquivos
2. Abra o portfolio no navegador
3. Preencha o formulário de contato
4. Clique em "Enviar Mensagem"
5. Verifique se o email chegou em martinsvictor086@gmail.com

## 🆓 Plano Gratuito

O EmailJS oferece **200 emails gratuitos por mês**, suficiente para um portfolio pessoal.

## 🔧 Solução de Problemas

- **Erro 401**: Verifique se a Public Key está correta
- **Erro 404**: Verifique se Service ID e Template ID estão corretos
- **Email não chega**: Verifique a caixa de spam

## 📞 Alternativas

Se preferir uma solução mais simples, você pode:
1. Usar Formspree.io (mais fácil de configurar)
2. Usar Netlify Forms (se hospedar no Netlify)
3. Criar um backend simples com Node.js

O formulário já está preparado e funcionará assim que você configurar as chaves do EmailJS!
