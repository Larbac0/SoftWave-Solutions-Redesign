# 📂 Estrutura do Projeto - SoftWave Solutions

```
softwave-solutions/
│
├── 📁 config/                      ⚙️ CONFIGURAÇÕES (EDITE AQUI!)
│   ├── theme.ts                    🎨 Cores, gradientes, espaçamentos
│   ├── company.ts                  🏢 Dados da empresa, contato, endereço
│   ├── services.ts                 💼 Serviços oferecidos e preços
│   └── index.ts                    📦 Exporta tudo junto
│
├── 📁 data/                        📝 CONTEÚDOS (EDITE AQUI!)
│   ├── content.ts                  ✍️ Todos os textos do site
│   ├── portfolio.ts                🖼️ Projetos do portfólio
│   ├── blog.ts                     📰 Posts do blog
│   └── index.ts                    📦 Exporta tudo junto
│
├── 📁 types/                       🔷 TIPOS TYPESCRIPT
│   └── index.ts                    Interfaces e tipos globais
│
├── 📁 lib/                         🛠️ FUNÇÕES ÚTEIS
│   └── utils.ts                    Formatação, validação, etc.
│
├── 📁 components/                  ⚛️ COMPONENTES REACT
│   │
│   ├── 📁 pages/                   📄 Páginas do site
│   │   ├── Home.tsx                🏠 Página inicial
│   │   ├── About.tsx               ℹ️ Sobre nós
│   │   ├── Services.tsx            💼 Serviços
│   │   ├── Portfolio.tsx           🖼️ Portfólio
│   │   ├── PortfolioDetail.tsx     🔍 Detalhe do projeto
│   │   ├── Blog.tsx                📰 Lista de posts
│   │   ├── BlogPost.tsx            📝 Post individual
│   │   ├── Contact.tsx             📞 Contato
│   │   └── Quote.tsx               💰 Orçamento
│   │
│   ├── 📁 layout/                  🎯 LAYOUT
│   │   ├── Header.tsx              🔝 Cabeçalho/Menu
│   │   └── Footer.tsx              🔻 Rodapé
│   │
│   ├── 📁 common/                  🔄 COMPONENTES REUTILIZÁVEIS
│   │   ├── Logo.tsx                📛 Logo da empresa
│   │   ├── ServiceCard.tsx         🃏 Card de serviço
│   │   ├── SectionTitle.tsx        📌 Título de seção
│   │   └── WhatsAppButton.tsx      💬 Botão WhatsApp flutuante
│   │
│   ├── 📁 ui/                      🎨 BIBLIOTECA DE COMPONENTES
│   │   └── ...                     ⚠️ NÃO EDITAR (Shadcn UI)
│   │
│   └── 📁 figma/                   🔒 COMPONENTES DO SISTEMA
│       └── ImageWithFallback.tsx   ⚠️ NÃO EDITAR (Protegido)
│
├── 📁 styles/                      💅 ESTILOS
│   ├── globals.css                 🌐 Estilos globais
│   └── theme.css                   🎨 Variáveis de tema
│
├── 📁 public/                      🌍 ARQUIVOS PÚBLICOS
│   └── 📁 admin/                   🔐 Netlify CMS
│       ├── config.yml              ⚙️ Config do CMS
│       └── index.html              📄 Interface do CMS
│
├── 📁 content/                     📚 CONTEÚDO DO CMS
│   ├── 📁 blog/                    Artigos do blog (.md)
│   ├── 📁 portfolio/               Projetos do portfólio (.md)
│   └── 📁 settings/                Configurações (.json)
│
├── 📁 guidelines/                  📖 DOCUMENTAÇÃO
│   └── Guidelines.md               Diretrizes do projeto
│
├── App.tsx                         🚀 COMPONENTE PRINCIPAL
├── routes.ts                       🛣️ Configuração de rotas (se usar)
│
├── 📄 README.md                    📘 Documentação geral
├── 📄 README_DESENVOLVIMENTO.md    🔧 Guia de desenvolvimento
├── 📄 COMO_EDITAR.md              ⚡ Guia rápido de edição
├── 📄 ESTRUTURA_PROJETO.md        📂 Este arquivo
├── 📄 NETLIFY_CMS_SETUP.md        🔐 Setup do Netlify CMS
└── 📄 QUICK_START_CMS.md          🚀 Início rápido CMS

```

---

## 🎯 Onde Editar O Quê?

### 🎨 Aparência Visual
```
/config/theme.ts
├── Cores da marca
├── Gradientes
└── Espaçamentos padrão
```

### 🏢 Informações da Empresa
```
/config/company.ts
├── Nome e tagline
├── Telefone, email, WhatsApp
├── Endereço completo
├── Redes sociais
├── Horário de funcionamento
└── Estatísticas (clientes, projetos)
```

### 💼 Serviços e Preços
```
/config/services.ts
├── Serviços principais (home)
├── Serviços gráficos detalhados
├── Serviços de informática detalhados
├── Serviços digitais detalhados
└── Tabela de preços rápida
```

### 📝 Textos do Site
```
/data/content.ts
├── Textos da Home
├── Textos da página Sobre
├── Textos da página Serviços
├── Textos da página Contato
├── Textos da página Orçamento
├── Textos da página Portfólio
├── Textos da página Blog
├── Depoimentos de clientes
└── Diferenciais (Por que escolher)
```

### 🖼️ Projetos do Portfólio
```
/data/portfolio.ts
└── Array com todos os projetos
    ├── ID e slug
    ├── Título e categoria
    ├── Descrição
    ├── Cliente e data
    ├── Imagens
    ├── Detalhes técnicos
    └── Resultados alcançados
```

### 📰 Posts do Blog
```
/data/blog.ts
└── Array com todos os posts
    ├── Slug e título
    ├── Descrição e categoria
    ├── Autor e data
    ├── Tempo de leitura
    ├── Tags
    └── Conteúdo (Markdown)
```

---

## 🚫 O Que NÃO Editar

### ⚠️ Arquivos Protegidos
```
❌ /components/figma/ImageWithFallback.tsx
❌ /components/ui/*  (toda a pasta)
❌ /styles/globals.css  (a menos que saiba CSS)
```

### ⚠️ Arquivos Avançados
```
⚠️ /App.tsx  (só se souber React)
⚠️ /routes.ts  (só se souber React Router)
⚠️ /types/index.ts  (só se adicionar campos novos)
```

---

## 📊 Fluxo de Dados

```
1. CONFIGURAÇÃO
   /config/company.ts
   ↓
   Dados da empresa, contato, cores
   ↓
   
2. CONTEÚDO
   /data/content.ts
   ↓
   Textos, depoimentos, estatísticas
   ↓
   
3. COMPONENTES
   /components/pages/Home.tsx
   ↓
   Importa configurações e conteúdos
   ↓
   
4. RENDERIZAÇÃO
   Exibe no navegador
```

---

## 🔄 Como os Arquivos se Conectam

```
EXEMPLO: Mudando o telefone

1. Editar:
   /config/company.ts
   ├── contact.phone = "(21) 97001-6069"
   └── contact.whatsapp = "5521970016069"

2. Automático:
   ✅ /components/layout/Footer.tsx (atualiza)
   ✅ /components/common/WhatsAppButton.tsx (atualiza)
   ✅ /components/pages/Contact.tsx (atualiza)
   ✅ Todo lugar que usa company.contact.phone

3. Resultado:
   🎉 Telefone atualizado em TODO o site!
```

---

## 🎓 Níveis de Complexidade

### 🟢 FÁCIL (Edições Comuns)
```
✅ Mudar telefone, email, endereço     → /config/company.ts
✅ Atualizar textos da home            → /data/content.ts
✅ Adicionar depoimento                → /data/content.ts
✅ Adicionar projeto ao portfólio      → /data/portfolio.ts
✅ Mudar cores da marca                → /config/theme.ts
✅ Atualizar preços                    → /config/services.ts
```

### 🟡 MÉDIO (Requer Atenção)
```
⚠️ Adicionar novo serviço             → /config/services.ts
⚠️ Modificar estrutura do portfólio   → /data/portfolio.ts + /types/
⚠️ Adicionar nova seção na home       → /components/pages/Home.tsx
⚠️ Personalizar estilos                → /styles/globals.css
```

### 🔴 AVANÇADO (Conhecimento Técnico)
```
❌ Modificar componentes UI            → /components/ui/
❌ Alterar navegação entre páginas     → /App.tsx ou /routes.ts
❌ Adicionar nova página               → /components/pages/ + /App.tsx
❌ Integrar APIs externas              → Vários arquivos
❌ Mudar framework ou biblioteca       → Todo o projeto
```

---

## 💡 Dicas de Organização

### ✅ Faça Assim:
1. **Sempre edite os arquivos de configuração primeiro**
2. **Siga o padrão dos objetos existentes**
3. **Faça uma mudança por vez e teste**
4. **Use comentários para lembrar o que fez**
5. **Mantenha backups de arquivos importantes**

### ❌ Evite:
1. Copiar/colar código sem entender
2. Editar múltiplos arquivos ao mesmo tempo
3. Remover campos sem verificar onde são usados
4. Misturar dados e lógica nos componentes
5. Criar arquivos novos sem necessidade

---

## 🔍 Comandos Úteis no VSCode

```bash
# Buscar texto em todos os arquivos
Ctrl + Shift + F

# Ir para arquivo
Ctrl + P

# Ir para definição
F12 (com cursor no nome)

# Renomear símbolo (refatorar)
F2 (com cursor no nome)

# Formatar código
Shift + Alt + F

# Comentar/Descomentar linha
Ctrl + /
```

---

## 📞 Suporte

Se precisar de ajuda:

1. ✅ Consulte `/COMO_EDITAR.md` para edições rápidas
2. ✅ Leia `/README_DESENVOLVIMENTO.md` para guia completo
3. ✅ Use Ctrl+Shift+F para buscar no projeto
4. ✅ Verifique o console do navegador (F12) para erros

---

**Última atualização:** Janeiro 2025  
**Versão:** 2.0 (Estrutura Modular)
