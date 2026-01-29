# Guia de Configuração do Netlify CMS - SoftWave Solutions

Este documento fornece instruções passo a passo para configurar o Netlify CMS no site da SoftWave Solutions, permitindo gerenciar posts do blog e itens do portfólio através de uma interface visual.

## 📋 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Estrutura de Arquivos](#estrutura-de-arquivos)
3. [Configuração do Netlify CMS](#configuração-do-netlify-cms)
4. [Configuração do Git Gateway](#configuração-do-git-gateway)
5. [Estrutura de Conteúdo](#estrutura-de-conteúdo)
6. [Acesso ao CMS](#acesso-ao-cms)
7. [Troubleshooting](#troubleshooting)

---

## 🔧 Pré-requisitos

Antes de começar, certifique-se de ter:

- [ ] Repositório Git (GitHub, GitLab ou Bitbucket)
- [ ] Site hospedado no Netlify
- [ ] Acesso administrativo ao painel do Netlify
- [ ] Node.js instalado (para desenvolvimento local)

---

## 📁 Estrutura de Arquivos

Crie a seguinte estrutura de diretórios no seu projeto:

```
/
├── public/
│   ├── admin/
│   │   ├── config.yml
│   │   └── index.html
│   └── uploads/          # Para imagens enviadas pelo CMS
├── content/
│   ├── blog/             # Posts do blog em Markdown
│   └── portfolio/        # Projetos do portfólio em Markdown
└── data/
    ├── blog.ts           # Dados do blog (já existente)
    └── portfolio.ts      # Dados do portfólio (já existente)
```

---

## ⚙️ Configuração do Netlify CMS

### Passo 1: Criar o arquivo de administração

Crie o arquivo `public/admin/index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SoftWave Solutions - Admin</title>
    <!-- Netlify CMS -->
    <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
  </head>
  <body>
    <!-- This script will display the Netlify CMS -->
  </body>
</html>
```

### Passo 2: Configurar o arquivo config.yml

Crie o arquivo `public/admin/config.yml`:

```yaml
backend:
  name: git-gateway
  branch: main # Altere para 'master' se necessário

# Configurações de mídia
media_folder: "public/uploads"
public_folder: "/uploads"

# Configurações locais (opcional, para desenvolvimento)
local_backend: true

# Coleções de conteúdo
collections:
  # Blog Posts
  - name: "blog"
    label: "Blog"
    folder: "content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - { label: "Título", name: "title", widget: "string" }
      - { label: "Descrição", name: "description", widget: "text" }
      - { label: "Data de Publicação", name: "date", widget: "datetime" }
      - { label: "Autor", name: "author", widget: "string", default: "SoftWave Solutions" }
      - { label: "Categoria", name: "category", widget: "select", options: ["Design Gráfico", "Informática", "Marketing Digital", "Tecnologia", "Dicas"] }
      - { label: "Tags", name: "tags", widget: "list" }
      - { label: "Imagem de Destaque", name: "thumbnail", widget: "string", hint: "Palavras-chave para busca de imagem (ex: design,computer,technology)" }
      - { label: "Tempo de Leitura", name: "readTime", widget: "string", default: "5 min de leitura" }
      - { label: "Conteúdo", name: "body", widget: "markdown" }
      - { label: "Destaque", name: "featured", widget: "boolean", default: false }

  # Portfólio
  - name: "portfolio"
    label: "Portfólio"
    folder: "content/portfolio"
    create: true
    slug: "{{slug}}"
    fields:
      - { label: "Título", name: "title", widget: "string" }
      - { label: "Descrição", name: "description", widget: "text" }
      - { label: "Cliente", name: "client", widget: "string" }
      - { label: "Data", name: "date", widget: "string", hint: "Ex: Janeiro 2024" }
      - { label: "Categoria", name: "category", widget: "select", options: ["graficos", "informatica", "digitais"] }
      - { label: "Categoria (Label)", name: "categoryLabel", widget: "select", options: ["Design Gráfico", "Informática", "Serviços Digitais"] }
      - { label: "Imagem Principal", name: "thumbnail", widget: "string", hint: "Palavras-chave para busca de imagem" }
      - label: "Galeria de Imagens"
        name: "images"
        widget: "list"
        field: { label: "Palavra-chave", name: "keyword", widget: "string" }
      - label: "Tecnologias"
        name: "technologies"
        widget: "list"
        field: { label: "Tecnologia", name: "tech", widget: "string" }
      - label: "Detalhes do Projeto"
        name: "details"
        widget: "list"
        fields:
          - { label: "Label", name: "label", widget: "string" }
          - { label: "Valor", name: "value", widget: "string" }
      - label: "Resultados"
        name: "results"
        widget: "list"
        field: { label: "Resultado", name: "result", widget: "string" }
      - { label: "Destaque", name: "featured", widget: "boolean", default: false }

  # Configurações do Site
  - name: "settings"
    label: "Configurações"
    files:
      - label: "Informações da Empresa"
        name: "company"
        file: "content/settings/company.json"
        fields:
          - { label: "Nome da Empresa", name: "name", widget: "string" }
          - { label: "Slogan", name: "slogan", widget: "string" }
          - { label: "Descrição", name: "description", widget: "text" }
          - { label: "Email", name: "email", widget: "string" }
          - { label: "Telefone", name: "phone", widget: "string" }
          - { label: "WhatsApp", name: "whatsapp", widget: "string" }
          - { label: "Endereço", name: "address", widget: "text" }
          - label: "Redes Sociais"
            name: "social"
            widget: "object"
            fields:
              - { label: "Facebook", name: "facebook", widget: "string", required: false }
              - { label: "Instagram", name: "instagram", widget: "string", required: false }
              - { label: "LinkedIn", name: "linkedin", widget: "string", required: false }
              - { label: "Twitter", name: "twitter", widget: "string", required: false }
```

---

## 🔐 Configuração do Git Gateway

### Passo 1: Acessar o Netlify Dashboard

1. Acesse [https://app.netlify.com](https://app.netlify.com)
2. Selecione seu site (softwavesl.com.br)

### Passo 2: Habilitar Identity

1. Vá em **Site settings** > **Identity**
2. Clique em **Enable Identity**
3. Em **Registration preferences**, selecione **Invite only** (apenas por convite)
4. Em **External providers** (opcional), você pode habilitar login via:
   - Google
   - GitHub
   - GitLab

### Passo 3: Habilitar Git Gateway

1. Ainda em **Identity**, role até **Services**
2. Clique em **Enable Git Gateway**
3. Isso permite que o Netlify CMS faça commits diretamente no seu repositório

### Passo 4: Criar usuário administrador

1. Vá em **Identity** > **Invite users**
2. Digite o email do administrador
3. O usuário receberá um email de convite
4. Clique no link do email para criar a senha

---

## 📝 Estrutura de Conteúdo

### Exemplo de Post do Blog (Markdown)

Crie arquivos em `content/blog/`:

```markdown
---
title: "Como Escolher as Cores Certas para Sua Marca"
description: "Descubra a psicologia das cores e como aplicá-las na identidade visual da sua empresa."
date: 2024-12-01T10:00:00Z
author: "SoftWave Solutions"
category: "Design Gráfico"
tags: ["branding", "design", "cores", "identidade visual"]
thumbnail: "brand,colors,design"
readTime: "8 min de leitura"
featured: true
---

## Introdução

A escolha das cores é um dos elementos mais importantes na criação de uma identidade visual...

## A Psicologia das Cores

### Vermelho
O vermelho transmite energia, paixão e urgência...

### Azul
O azul representa confiança, profissionalismo e calma...

## Conclusão

Escolher as cores certas para sua marca é fundamental para transmitir a mensagem correta...
```

### Exemplo de Projeto do Portfólio (Markdown)

Crie arquivos em `content/portfolio/`:

```markdown
---
title: "Identidade Visual Completa - Café Aroma"
description: "Desenvolvimento de identidade visual completa para cafeteria artesanal, incluindo logo, papelaria e materiais de divulgação."
client: "Café Aroma"
date: "Novembro 2024"
category: "graficos"
categoryLabel: "Design Gráfico"
thumbnail: "coffee,logo,branding"
images:
  - "coffee,menu,design"
  - "coffee,business,card"
  - "coffee,packaging"
technologies:
  - "Adobe Illustrator"
  - "Adobe Photoshop"
  - "Adobe InDesign"
details:
  - label: "Serviço"
    value: "Branding Completo"
  - label: "Duração"
    value: "6 semanas"
  - label: "Entregáveis"
    value: "Logo, Manual de Marca, Papelaria"
results:
  - "Aumento de 45% no reconhecimento da marca"
  - "Padronização visual em todos os pontos de contato"
  - "Identidade única e memorável no mercado local"
featured: true
---
```

---

## 🚀 Acesso ao CMS

### URL de Acesso

Após a configuração, acesse o CMS em:

```
https://softwavesl.com.br/admin
```

ou em desenvolvimento local:

```
http://localhost:3000/admin
```

### Primeiro Acesso

1. Acesse a URL do admin
2. Clique em **Login with Netlify Identity**
3. Use o email e senha configurados
4. Você será redirecionado para o painel do CMS

### Desenvolvimento Local (Opcional)

Para testar o CMS localmente:

1. Instale o servidor local do Netlify CMS:
```bash
npx netlify-cms-proxy-server
```

2. Em outro terminal, inicie seu servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse `http://localhost:3000/admin`

---

## 🔄 Integração com o Site Atual

### Atualizar data/blog.ts

Modifique o arquivo para ler os arquivos Markdown:

```typescript
// Exemplo de integração
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);
  
  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace(/\.md$/, ''),
      ...data,
      content
    };
  });
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}
```

### Instalar Dependências

```bash
npm install gray-matter
```

---

## 🎨 Personalização do CMS

### Customizar a Interface

Você pode personalizar cores e logo do CMS editando `public/admin/config.yml`:

```yaml
# No início do arquivo
logo_url: https://softwavesl.com.br/logo.png

# Customização de cores
publish_mode: editorial_workflow
```

### Workflow Editorial (Opcional)

Para adicionar um fluxo de aprovação:

```yaml
publish_mode: editorial_workflow
```

Isso cria três estados:
- **Draft** (Rascunho)
- **In Review** (Em Revisão)
- **Ready** (Pronto para Publicar)

---

## 🔍 Troubleshooting

### Problema: "Error loading config.yml"

**Solução:** Verifique se o arquivo está em `public/admin/config.yml` e se a sintaxe YAML está correta.

### Problema: "Unable to access identity"

**Solução:** 
1. Verifique se Git Gateway está habilitado no Netlify
2. Confirme que o site está publicado (não funciona apenas local sem o proxy)
3. Limpe o cache do navegador

### Problema: Imagens não aparecem

**Solução:**
1. Verifique se `media_folder` está configurado corretamente
2. Certifique-se de que a pasta `public/uploads` existe
3. Verifique permissões de escrita

### Problema: Mudanças não aparecem no site

**Solução:**
1. Verifique se o commit foi feito no repositório
2. Aguarde o deploy do Netlify (pode levar alguns minutos)
3. Limpe o cache do navegador
4. Verifique se o código está lendo os arquivos Markdown corretamente

---

## 📚 Recursos Adicionais

### Documentação Oficial
- [Netlify CMS Documentation](https://www.netlifycms.org/docs/)
- [Netlify Identity](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway](https://docs.netlify.com/visitor-access/git-gateway/)

### Tutoriais em Vídeo
- [Netlify CMS Tutorial Playlist](https://www.youtube.com/results?search_query=netlify+cms+tutorial)

### Comunidade
- [Netlify Community](https://community.netlify.com/)
- [GitHub Issues](https://github.com/netlify/netlify-cms/issues)

---

## 📋 Checklist de Implementação

- [ ] Criar estrutura de pastas (`public/admin`, `content/blog`, `content/portfolio`)
- [ ] Criar `public/admin/index.html`
- [ ] Criar `public/admin/config.yml`
- [ ] Fazer deploy inicial no Netlify
- [ ] Habilitar Netlify Identity
- [ ] Habilitar Git Gateway
- [ ] Criar usuário administrador
- [ ] Testar acesso ao `/admin`
- [ ] Criar primeiro post de teste
- [ ] Verificar se o conteúdo aparece no site
- [ ] Configurar backup automático (Git já faz isso)
- [ ] Treinar equipe no uso do CMS

---

## 🎯 Próximos Passos

Após configurar o Netlify CMS:

1. **Migrar Conteúdo Existente**: Converta os dados atuais em `data/blog.ts` e `data/portfolio.ts` para arquivos Markdown
2. **Otimizar Imagens**: Configure processamento automático de imagens
3. **SEO**: Adicione campos de meta tags no CMS
4. **Analytics**: Integre Google Analytics para acompanhar visualizações
5. **Newsletter**: Adicione formulário de inscrição nos posts

---

## 💡 Dicas Importantes

- ⚠️ **Backup**: O Git já serve como backup, mas considere exportações periódicas
- 🔒 **Segurança**: Mantenha "Invite only" habilitado para evitar registros não autorizados
- 📱 **Mobile**: O CMS funciona em dispositivos móveis, mas é melhor usar desktop
- 🚀 **Performance**: Arquivos Markdown são leves e rápidos de carregar
- 📝 **Documentação**: Crie um guia interno para a equipe que usará o CMS

---

**Desenvolvido para SoftWave Solutions**  
*Transformando ideias em soluções digitais*

Para suporte adicional, entre em contato através do email ou WhatsApp configurado no site.
