# 📚 Guia de Desenvolvimento - SoftWave Solutions

Este guia explica como editar e manter o site da SoftWave Solutions de forma fácil e organizada.

## 🗂️ Estrutura do Projeto

### 📁 `/config` - Configurações Centralizadas

#### `theme.ts` - Cores e Tema
Aqui você configura todas as cores do site:
```typescript
export const colors = {
  primary: "#10CFA3",    // Verde água principal
  secondary: "#04BFFD",  // Azul claro
  // ...
}
```

**Quando editar:**
- Mudou a cor da marca? Altere aqui e todo o site será atualizado.
- Quer criar novos gradientes? Adicione em `gradients`.

#### `company.ts` - Informações da Empresa
Centralize aqui todos os dados de contato e informações da empresa:
- Nome, telefone, email, WhatsApp
- Endereço completo
- Redes sociais
- Horário de funcionamento
- Estatísticas (clientes, projetos, etc.)

**Quando editar:**
- Mudou de endereço ou telefone? Edite aqui uma vez e atualiza em todo o site.
- Novo número de WhatsApp? Altere em `contact.whatsapp`.
- Atualize as estatísticas conforme a empresa cresce.

#### `services.ts` - Serviços Oferecidos
Configure todos os serviços, categorias e preços:
- `mainServices` - Serviços principais exibidos na home
- `graphicServices` - Detalhes dos serviços gráficos
- `computerServices` - Detalhes dos serviços de informática
- `digitalServices` - Detalhes dos serviços digitais
- `quickPrices` - Tabela de preços rápida

**Quando editar:**
- Adicionou um novo serviço? Adicione no array correspondente.
- Mudou preços? Atualize em `quickPrices`.
- Quer mudar a descrição de um serviço? Edite o objeto correspondente.

---

### 📁 `/data` - Conteúdos Estáticos

#### `content.ts` - Textos do Site
**Todos os textos estão aqui!** Edite facilmente sem mexer no código:
- `homeStats` - Estatísticas da home
- `whyChooseUs` - Diferenciais da empresa
- `testimonials` - Depoimentos de clientes
- `homeContent` - Todos os textos da página home
- `aboutContent` - Textos da página sobre
- `servicesContent` - Textos da página de serviços
- E mais...

**Quando editar:**
- Quer mudar o título da home? Edite `homeContent.hero.title`.
- Novo depoimento de cliente? Adicione em `testimonials`.
- Textos desatualizados? Encontre a seção e edite.

#### `portfolio.ts` - Projetos do Portfólio
Lista completa de todos os projetos realizados:
```typescript
export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Título do Projeto',
    category: 'grafico', // ou 'informatica' ou 'digital'
    // ...
  }
]
```

**Quando editar:**
- Novo projeto concluído? Adicione um novo objeto ao array.
- Quer remover um projeto antigo? Delete o objeto correspondente.
- Mudou detalhes de um projeto? Edite o objeto.

#### `blog.ts` - Posts do Blog
Posts do blog em formato TypeScript (antes da migração para Netlify CMS):
```typescript
export const blogPosts: BlogPost[] = [
  {
    slug: 'titulo-do-post',
    title: 'Título do Post',
    content: `Conteúdo em Markdown...`,
    // ...
  }
]
```

**Quando editar:**
- Novo post? Adicione ao array.
- Correção em post existente? Edite o objeto.
- Posts do Netlify CMS serão carregados automaticamente dos arquivos `.md`.

---

### 📁 `/types` - Tipos TypeScript

#### `index.ts` - Interfaces Globais
Definições de tipos usados em todo o projeto:
- `Page` - Páginas disponíveis
- `PortfolioItem` - Estrutura de um projeto
- `BlogPost` - Estrutura de um post
- `ContactFormData` - Dados do formulário
- E mais...

**Quando editar:**
- Raramente precisa editar.
- Só mexa aqui se adicionar novos campos aos dados.

---

### 📁 `/lib` - Funções Utilitárias

#### `utils.ts` - Funções Auxiliares
Funções reutilizáveis:
- `formatDate()` - Formata datas
- `formatPhone()` - Formata telefones
- `getWhatsAppUrl()` - Gera URL do WhatsApp
- `isValidEmail()` - Valida email
- E mais...

**Quando usar:**
- Importe e use essas funções nos componentes.
- Precisa de uma nova função auxiliar? Adicione aqui.

---

### 📁 `/components` - Componentes React

#### `/components/pages` - Páginas
- `Home.tsx` - Página inicial
- `About.tsx` - Sobre nós
- `Services.tsx` - Serviços
- `Portfolio.tsx` - Portfólio
- `Blog.tsx` - Blog
- `Contact.tsx` - Contato
- `Quote.tsx` - Orçamento

**Como funcionam:**
- Importam dados de `/config` e `/data`.
- Não contêm textos fixos, apenas estrutura.
- Fácil de manter e editar.

#### `/components/layout` - Layout
- `Header.tsx` - Cabeçalho/Menu
- `Footer.tsx` - Rodapé

#### `/components/common` - Componentes Comuns
- `Logo.tsx` - Logo da empresa
- `ServiceCard.tsx` - Card de serviço
- `SectionTitle.tsx` - Título de seção
- `WhatsAppButton.tsx` - Botão flutuante WhatsApp

---

## 🎨 Como Fazer Alterações Comuns

### ✏️ Mudar Cores do Site

1. Abra `/config/theme.ts`
2. Edite o objeto `colors`:
```typescript
export const colors = {
  primary: "#SUA_COR_AQUI",
  secondary: "#SUA_COR_AQUI",
  // ...
}
```
3. Salve e as cores mudam em todo o site!

---

### 📞 Atualizar Telefone/WhatsApp

1. Abra `/config/company.ts`
2. Edite `contact`:
```typescript
contact: {
  phone: "(21) 97001-6069",
  phoneRaw: "5521970016069",
  whatsapp: "5521970016069",
  // ...
}
```
3. Salve e o número atualiza em todo o site!

---

### 📝 Mudar Textos da Home

1. Abra `/data/content.ts`
2. Encontre `homeContent`:
```typescript
export const homeContent = {
  hero: {
    title: "Seu Novo Título Aqui",
    subtitle: "Sua nova descrição aqui",
    // ...
  }
}
```
3. Edite os textos desejados
4. Salve e pronto!

---

### ➕ Adicionar Novo Serviço

1. Abra `/config/services.ts`
2. Adicione no array correspondente:
```typescript
export const graphicServices = [
  // ... serviços existentes
  {
    name: "Novo Serviço",
    description: "Descrição do serviço",
    price: "R$ 100",
    features: ["Feature 1", "Feature 2"],
  }
]
```
3. Salve e o serviço aparece no site!

---

### 🖼️ Adicionar Novo Projeto ao Portfólio

1. Abra `/data/portfolio.ts`
2. Adicione ao array:
```typescript
export const portfolioItems: PortfolioItem[] = [
  // ... projetos existentes
  {
    id: '9',
    slug: 'nome-do-projeto',
    title: 'Nome do Projeto',
    category: 'grafico', // ou 'informatica' ou 'digital'
    categoryLabel: 'Serviços Gráficos',
    thumbnail: 'business cards design', // query do Unsplash
    description: 'Descrição completa...',
    client: 'Nome do Cliente',
    date: 'Janeiro 2025',
    images: ['query1', 'query2', 'query3'],
    details: [
      { label: 'Formato', value: '9x5cm' },
      // ...
    ],
    results: [
      'Resultado 1',
      'Resultado 2',
    ],
  }
]
```
3. Salve e o projeto aparece no portfólio!

---

### 💬 Adicionar Novo Depoimento

1. Abra `/data/content.ts`
2. Adicione ao array `testimonials`:
```typescript
export const testimonials: Testimonial[] = [
  // ... depoimentos existentes
  {
    name: "Nome do Cliente",
    company: "Empresa do Cliente",
    text: "Depoimento completo aqui...",
    rating: 5,
  }
]
```
3. Salve e o depoimento aparece na home!

---

### 📊 Atualizar Estatísticas

1. Abra `/config/company.ts`
2. Edite `stats`:
```typescript
stats: {
  clients: "600+",     // Aumente conforme necessário
  projects: "1200+",   // Aumente conforme necessário
  satisfaction: "99%", // Atualize se mudou
  years: "6+",         // Aumente a cada ano
}
```
3. As estatísticas atualizam automaticamente!

---

## 🚀 Dicas de Organização

### ✅ Boas Práticas

1. **Sempre edite os arquivos de configuração primeiro**
   - Não copie/cole código nos componentes
   - Use os arquivos em `/config` e `/data`

2. **Mantenha consistência**
   - Use as mesmas cores definidas em `theme.ts`
   - Siga o padrão dos objetos existentes

3. **Teste após cada mudança**
   - Salve o arquivo
   - Verifique no navegador
   - Confirme que ficou como esperado

4. **Faça backup antes de grandes mudanças**
   - Copie o arquivo original
   - Faça suas alterações
   - Compare se necessário

### ❌ Evite

1. **Não edite arquivos em `/components/ui`**
   - São componentes da biblioteca Shadcn
   - Só edite se souber exatamente o que está fazendo

2. **Não apague types sem verificar**
   - TypeScript pode quebrar se remover tipos usados

3. **Não altere a estrutura dos objetos sem necessidade**
   - Mantenha o padrão existente
   - Adicione campos novos, não remova os antigos

---

## 📖 Referência Rápida

### Onde está cada coisa?

| O que você quer mudar | Onde editar |
|----------------------|-------------|
| Cores do site | `/config/theme.ts` |
| Telefone, email, endereço | `/config/company.ts` |
| Textos da home | `/data/content.ts` → `homeContent` |
| Textos sobre | `/data/content.ts` → `aboutContent` |
| Serviços e preços | `/config/services.ts` |
| Projetos do portfólio | `/data/portfolio.ts` |
| Posts do blog | `/data/blog.ts` |
| Depoimentos | `/data/content.ts` → `testimonials` |
| Estatísticas | `/config/company.ts` → `stats` |
| Redes sociais | `/config/company.ts` → `social` |

---

## 🆘 Precisa de Ajuda?

### Algo quebrou?

1. Verifique o console do navegador (F12)
2. Procure por erros em vermelho
3. Desfaça a última alteração
4. Tente novamente com cuidado

### Não sabe onde está algo?

1. Use o Ctrl+Shift+F no VSCode para buscar no projeto
2. Procure pelo texto que você vê no site
3. Siga até o arquivo correspondente

### Quer adicionar algo novo?

1. Veja exemplos dos objetos existentes
2. Copie um similar
3. Edite com seus dados
4. Salve e teste

---

## 🎓 Próximos Passos

1. **Familiarize-se com a estrutura**
   - Navegue pelos arquivos de configuração
   - Veja como os dados estão organizados

2. **Faça uma mudança pequena**
   - Mude um texto simples
   - Veja o resultado no site

3. **Experimente mudanças maiores**
   - Adicione um novo serviço
   - Inclua um projeto no portfólio

4. **Personalize completamente**
   - Ajuste cores, textos e conteúdos
   - Torne o site único!

---

**Última atualização:** Janeiro 2025  
**Versão da estrutura:** 2.0
