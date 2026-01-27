# SoftWave Solutions - Website Oficial

<div align="center">
  <img src="public/logo.png" alt="SoftWave Solutions" width="200"/>
  
  **Transformando ideias em soluções digitais**
  
  [![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat&logo=react)](https://react.dev)
  [![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js)](https://nextjs.org)
  [![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
</div>

---

## 🚀 Início Rápido

### 👉 **Primeira vez editando o site?**
**[📖 COMECE AQUI](./COMECE_AQUI.md)** - Guia que te direciona para o documento certo!

### ⚡ **Quer fazer mudanças rápidas?**
**[✏️ COMO EDITAR](./COMO_EDITAR.md)** - Edições comuns em 5 minutos!

### 📚 **Quer entender tudo?**
**[📘 GUIA COMPLETO](./README_DESENVOLVIMENTO.md)** - Documentação completa!

---

## 📋 Sobre o Projeto

Site institucional completo da **SoftWave Solutions**, empresa especializada em:

- 🎨 **Design Gráfico** - Identidades visuais, materiais impressos
- 💻 **Informática** - Suporte técnico, infraestrutura de TI
- 🌐 **Serviços Digitais** - Marketing digital, desenvolvimento web

### ✨ Arquitetura Modular (v2.0)

Este projeto foi reestruturado para **facilitar a manutenção e edição**:

- **📁 `/config`** - Todas as configurações centralizadas (cores, dados da empresa, serviços)
- **📁 `/data`** - Conteúdos estáticos separados da lógica (textos, portfólio, blog)
- **📁 `/types`** - Tipos TypeScript compartilhados
- **📁 `/lib`** - Funções utilitárias reutilizáveis
- **⚛️ `/components`** - Componentes React organizados por função

**Vantagem:** Edite dados e configurações sem tocar no código dos componentes!

---

## 📚 Documentação

### 🎯 Guias para Editores

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[COMECE_AQUI.md](./COMECE_AQUI.md)** | 🗺️ Navegação e primeiros passos | Primeira vez no projeto |
| **[COMO_EDITAR.md](./COMO_EDITAR.md)** | ⚡ Edições rápidas e comuns | Mudanças simples |
| **[EXEMPLOS_EDICAO.md](./EXEMPLOS_EDICAO.md)** | 💡 Exemplos práticos detalhados | Aprender fazendo |
| **[ESTRUTURA_PROJETO.md](./ESTRUTURA_PROJETO.md)** | 📂 Organização dos arquivos | Entender o projeto |

### 🔧 Guias para Desenvolvedores

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[README_DESENVOLVIMENTO.md](./README_DESENVOLVIMENTO.md)** | 📘 Guia completo de desenvolvimento | Referência completa |
| **[guidelines/Guidelines.md](./guidelines/Guidelines.md)** | 📐 Padrões e convenções | Desenvolvimento |

### 🔐 Guias do CMS

| Documento | Descrição | Quando Usar |
|-----------|-----------|-------------|
| **[NETLIFY_CMS_SETUP.md](./NETLIFY_CMS_SETUP.md)** | 🔐 Setup completo do CMS | Configuração inicial |
| **[QUICK_START_CMS.md](./QUICK_START_CMS.md)** | 🚀 Início rápido | Criar posts |
| **[content/README.md](./content/README.md)** | 📁 Estrutura de conteúdo | Organização |

---

## 🚀 Tecnologias

### Core
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para mais segurança
- **Tailwind CSS v4** - Framework CSS utilitário moderno

### Bibliotecas
- **Motion (Framer Motion)** - Animações suaves e profissionais
- **Lucide React** - Ícones modernos e consistentes
- **Sonner** - Notificações toast elegantes
- **Shadcn/ui** - Componentes UI de alta qualidade

### CMS
- **Netlify CMS** - Gerenciamento de conteúdo
- **Markdown** - Formato de posts e projetos
- **Git Gateway** - Integração com repositório

---

## 📁 Estrutura do Projeto (Modular)

```
/
├── 📁 config/               ⚙️ CONFIGURAÇÕES (Edite aqui!)
│   ├── theme.ts            🎨 Cores, gradientes
│   ├── company.ts          🏢 Dados da empresa
│   ├── services.ts         💼 Serviços e preços
│   └── index.ts
│
├── 📁 data/                📝 CONTEÚDOS (Edite aqui!)
│   ├── content.ts          ✍️ Textos do site
│   ├── portfolio.ts        🖼️ Projetos
│   ├── blog.ts             📰 Posts
│   └── index.ts
│
├── 📁 types/               🔷 Tipos TypeScript
│   └── index.ts
│
├── 📁 lib/                 🛠️ Funções úteis
│   └── utils.ts
│
├── 📁 components/          ⚛️ Componentes React
│   ├── pages/             📄 Páginas
│   ├── layout/            🎯 Header & Footer
│   ├── common/            🔄 Componentes reutilizáveis
│   └── ui/                🎨 Biblioteca UI
│
├── 📁 content/            📚 Conteúdo do CMS
│   ├── blog/             Artigos (.md)
│   ├── portfolio/        Projetos (.md)
│   └── settings/         Configurações (.json)
│
├── 📁 public/
│   └── admin/            🔐 Netlify CMS
│
└── App.tsx               🚀 Componente principal
```

**[Ver estrutura completa →](./ESTRUTURA_PROJETO.md)**

---

## 🎨 Identidade Visual

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| **Verde Primário** | `#10CFA3` | Elementos principais, CTAs |
| **Azul Secundário** | `#04BFFD` | Destaques, links |
| **Cinza Claro** | `#F8F9FA` | Backgrounds, cards |
| **Cinza Escuro** | `#343A40` | Textos, footer |

**Configurar cores:** Edite `/config/theme.ts`

### Tipografia

- **Font-family**: System fonts (San Francisco, Segoe UI, Roboto)
- **Pesos**: 400 (normal), 500 (medium)
- **Escalas**: Responsivas via Tailwind

---

## 🛠️ Instalação e Desenvolvimento

### Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/softwave-solutions.git

# Entre no diretório
cd softwave-solutions

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

---

## 📝 Gerenciamento de Conteúdo

### Netlify CMS

O site usa Netlify CMS para gerenciar:
- ✅ Posts do blog
- ✅ Projetos do portfólio
- ✅ Configurações da empresa
- ✅ Informações de serviços

### Acesso ao CMS

**URL**: `https://softwavesl.com.br/admin`

**Documentação:**
- 📖 [Guia Completo de Configuração](NETLIFY_CMS_SETUP.md)
- ⚡ [Guia Rápido de Início](QUICK_START_CMS.md)

---

## 🌐 Deploy

### Netlify (Recomendado)

1. Conecte seu repositório ao Netlify
2. Configure as variáveis de build (se necessário)
3. Deploy automático a cada push

```bash
# Build para produção
npm run build

# Preview local do build
npm run preview
```

---

## 📄 Páginas

### Públicas

| Rota | Componente | Descrição |
|------|-----------|-----------| 
| `/` | Home | Página inicial |
| `/sobre` | About | Sobre a empresa |
| `/servicos` | Services | Serviços oferecidos |
| `/portfolio` | Portfolio | Galeria de projetos |
| `/portfolio/:slug` | PortfolioDetail | Detalhes do projeto |
| `/blog` | Blog | Lista de posts |
| `/blog/:slug` | BlogPost | Post individual |
| `/contato` | Contact | Formulário de contato |
| `/orcamento` | Quote | Solicitar orçamento |

### Admin

| Rota | Descrição |
|------|-----------| 
| `/admin` | Painel do Netlify CMS |

---

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview

# Linting (se configurado)
npm run lint

# Type checking
npm run type-check
```

---

## 📱 Recursos

### Principais Funcionalidades

- ✅ Design 100% responsivo
- ✅ Navegação suave entre páginas
- ✅ Animações e transições profissionais
- ✅ Formulários de contato e orçamento
- ✅ Blog com sistema de posts
- ✅ Portfólio com filtros por categoria
- ✅ Integração com WhatsApp
- ✅ SEO otimizado
- ✅ Performance otimizada
- ✅ **Estrutura modular para fácil edição**

### Integrações

- 📧 Formulários de contato
- 📱 Botão flutuante do WhatsApp
- 🎨 Imagens do Unsplash (placeholder)
- 📊 Netlify CMS para conteúdo

---

## 📞 Suporte e Contato

**SoftWave Solutions**

- 🌐 Website: [softwavesl.com.br](https://softwavesl.com.br)
- 📧 Email: contato@softwavesl.com.br
- 📱 WhatsApp: (11) 9999-9999
- 📍 Localização: São Paulo, SP - Brasil

### Redes Sociais

- [Facebook](https://facebook.com/softwavesolutions)
- [Instagram](https://instagram.com/softwavesolutions)
- [LinkedIn](https://linkedin.com/company/softwavesolutions)

---

## 📄 Licença

© 2025 SoftWave Solutions. Todos os direitos reservados.

Este projeto é propriedade da SoftWave Solutions e não pode ser reproduzido sem autorização.

---

## 📚 Índice Completo de Documentação

### 🎯 Para Editores
- **[COMECE_AQUI.md](./COMECE_AQUI.md)** - 🗺️ Por onde começar
- **[COMO_EDITAR.md](./COMO_EDITAR.md)** - ⚡ Edições rápidas
- **[EXEMPLOS_EDICAO.md](./EXEMPLOS_EDICAO.md)** - 💡 Exemplos práticos
- **[ESTRUTURA_PROJETO.md](./ESTRUTURA_PROJETO.md)** - 📂 Organização

### 🔧 Para Desenvolvedores
- **[README_DESENVOLVIMENTO.md](./README_DESENVOLVIMENTO.md)** - 📘 Guia completo
- **[guidelines/Guidelines.md](./guidelines/Guidelines.md)** - 📐 Padrões

### 🔐 CMS
- **[NETLIFY_CMS_SETUP.md](./NETLIFY_CMS_SETUP.md)** - 🔐 Configuração
- **[QUICK_START_CMS.md](./QUICK_START_CMS.md)** - 🚀 Início rápido
- **[content/README.md](./content/README.md)** - 📁 Estrutura

### 📊 Técnicos
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - 📋 Resumo técnico
- **[DEPLOY_CHECKLIST.md](./DEPLOY_CHECKLIST.md)** - ✅ Checklist deploy

---

<div align="center">
  
  **Desenvolvido com ❤️ pela SoftWave Solutions**
  
  *Transformando ideias em soluções digitais desde 2015*
  
  ---
  
  **Versão 2.0** - Estrutura Modular para Fácil Edição
  
</div>