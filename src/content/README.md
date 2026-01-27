# Diretório de Conteúdo - SoftWave Solutions

Este diretório contém todo o conteúdo gerenciado pelo Netlify CMS.

## 📁 Estrutura

```
content/
├── blog/           # Posts do blog em Markdown
├── portfolio/      # Projetos do portfólio em Markdown
└── settings/       # Configurações do site em JSON
```

## 📝 Blog

Arquivos Markdown com posts do blog. Cada arquivo deve ter:

- Nome no formato: `YYYY-MM-DD-titulo-do-post.md`
- Front matter completo (título, descrição, data, etc.)
- Conteúdo em Markdown

### Exemplo de Front Matter

```yaml
---
title: "Título do Post"
description: "Descrição breve"
date: 2024-12-01T10:00:00Z
author: "SoftWave Solutions"
category: "Design Gráfico"
tags: ["design", "dicas"]
thumbnail: "design,graphic"
readTime: "5 min de leitura"
featured: true
status: "publicado"
---
```

## 💼 Portfólio

Arquivos Markdown com projetos do portfólio. Cada arquivo deve ter:

- Nome no formato: `titulo-do-projeto.md`
- Front matter completo
- Conteúdo opcional em Markdown

### Exemplo de Front Matter

```yaml
---
title: "Nome do Projeto"
description: "Descrição do projeto"
client: "Nome do Cliente"
date: "Mês Ano"
category: "graficos"
categoryLabel: "Design Gráfico"
thumbnail: "keyword1,keyword2"
images: ["keyword1", "keyword2"]
technologies: ["Tool 1", "Tool 2"]
details:
  - label: "Serviço"
    value: "Tipo de serviço"
results:
  - "Resultado 1"
  - "Resultado 2"
featured: true
---
```

## ⚙️ Configurações

Arquivos JSON com configurações do site:

### company.json
Informações da empresa (nome, endereço, contato, redes sociais)

### seo.json
Configurações de SEO (meta tags, analytics)

### services.json
Descrição dos serviços oferecidos

## 🔄 Gerenciamento

O conteúdo deste diretório pode ser gerenciado através de:

1. **Netlify CMS** (Recomendado)
   - Acesse: `https://softwavesl.com.br/admin`
   - Interface visual intuitiva
   - Workflow de aprovação

2. **Edição Manual**
   - Edite os arquivos diretamente
   - Faça commit no repositório Git
   - O site será atualizado automaticamente

## 📚 Documentação Completa

Para instruções detalhadas de configuração, consulte:
- [NETLIFY_CMS_SETUP.md](/NETLIFY_CMS_SETUP.md)

---

**SoftWave Solutions** - Transformando ideias em soluções digitais
