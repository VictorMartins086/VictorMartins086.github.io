// Configuração do EmailJS
// Para configurar o EmailJS, siga estes passos:

/*
1. Acesse https://www.emailjs.com/
2. Crie uma conta gratuita
3. No dashboard, vá em "Email Services" e adicione seu provedor de email (Gmail)
4. Crie um template de email em "Email Templates"
5. Copie as chaves abaixo e substitua no script.js

EXEMPLO DE TEMPLATE DE EMAIL:
Subject: Nova mensagem do portfolio - {{from_name}}

Olá Victor,

Você recebeu uma nova mensagem através do seu portfolio:

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado automaticamente do seu portfolio
*/

// SUBSTITUA ESTAS CHAVES PELAS SUAS CHAVES DO EMAILJS:
const EMAILJS_CONFIG = {
    PUBLIC_KEY: "YOUR_PUBLIC_KEY",        // Sua chave pública do EmailJS
    SERVICE_ID: "YOUR_SERVICE_ID",        // ID do serviço de email (ex: service_gmail)
    TEMPLATE_ID: "YOUR_TEMPLATE_ID"       // ID do template que você criar
};

// Como obter as chaves:
// PUBLIC_KEY: Dashboard > Account > API Keys > Public Key
// SERVICE_ID: Dashboard > Email Services > (clique no seu serviço) > Service ID
// TEMPLATE_ID: Dashboard > Email Templates > (clique no seu template) > Template ID

// Exemplo de template no EmailJS:
/*
Template Name: contact_form
Template ID: template_xyz123

Subject: Nova mensagem do portfolio - {{from_name}}

Content:
Olá Victor,

Você recebeu uma nova mensagem através do seu portfolio:

Nome: {{from_name}}
Email: {{from_email}}

Mensagem:
{{message}}

---
Enviado automaticamente do seu portfolio
*/

export default EMAILJS_CONFIG;
