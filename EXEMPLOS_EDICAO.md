# 💡 Exemplos Práticos de Edição

Este arquivo mostra exemplos reais de como fazer edições comuns no site.

---

## 📱 Exemplo 1: Atualizar Número do WhatsApp

### Cenário:
A empresa mudou o número de WhatsApp de `(21) 97001-6069` para `(21) 97001-6069`.

### Passo a Passo:

#### 1️⃣ Abrir o arquivo de configuração
```bash
Arquivo: /config/company.ts
```

#### 2️⃣ Localizar a seção de contato
```typescript
// ANTES:
contact: {
  phone: "(21) 97001-6069",
  phoneRaw: "5521970016069",
  whatsapp: "5521970016069",
  whatsappMessage: "Olá! Vim pelo site e gostaria de mais informações.",
},
```

#### 3️⃣ Fazer as alterações
```typescript
// DEPOIS:
contact: {
  phone: "(21) 97001-6069",        // ← Mudou
  phoneRaw: "5521970016069",       // ← Mudou (sem parênteses)
  whatsapp: "5521970016069",       // ← Mudou
  whatsappMessage: "Olá! Vim pelo site e gostaria de mais informações.",
},
```

#### 4️⃣ Salvar e verificar
- ✅ Salve o arquivo (Ctrl+S)
- ✅ Recarregue o site no navegador
- ✅ Clique no botão do WhatsApp
- ✅ Verifique se abre com o número correto

### ✨ Resultado:
O número será atualizado em:
- Botão flutuante do WhatsApp
- Página de contato
- Rodapé do site
- Qualquer outro lugar que exiba o telefone

---

## 🎨 Exemplo 2: Mudar as Cores da Marca

### Cenário:
A empresa fez um rebranding e as novas cores são:
- Verde: `#00B894` (antes era `#10CFA3`)
- Azul: `#0984E3` (antes era `#04BFFD`)

### Passo a Passo:

#### 1️⃣ Abrir o arquivo de tema
```bash
Arquivo: /config/theme.ts
```

#### 2️⃣ Localizar as cores
```typescript
// ANTES:
export const colors = {
  primary: "#10CFA3",
  secondary: "#04BFFD",
  tertiary: "#F8F9FA",
  dark: "#343A40",
  // ...
}
```

#### 3️⃣ Atualizar as cores
```typescript
// DEPOIS:
export const colors = {
  primary: "#00B894",      // ← Nova cor verde
  secondary: "#0984E3",    // ← Nova cor azul
  tertiary: "#F8F9FA",
  dark: "#343A40",
  // ...
}
```

#### 4️⃣ Salvar e verificar
- ✅ Salve o arquivo
- ✅ Recarregue o site
- ✅ Verifique todas as páginas
- ✅ Confirme que as cores mudaram

### ✨ Resultado:
As novas cores serão aplicadas em:
- Botões
- Gradientes
- Ícones coloridos
- Destaques e links
- Hero sections
- Todo o site!

---

## 📝 Exemplo 3: Adicionar Novo Depoimento

### Cenário:
Um novo cliente chamado Roberto, da empresa "Móveis Design", deixou um depoimento positivo.

### Passo a Passo:

#### 1️⃣ Abrir o arquivo de conteúdo
```bash
Arquivo: /data/content.ts
```

#### 2️⃣ Encontrar o array de depoimentos
```typescript
export const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    company: "Boutique Elegance",
    text: "Excelente atendimento! Meus cartões ficaram perfeitos...",
    rating: 5,
  },
  {
    name: "João Santos",
    company: "Tech Solutions",
    text: "Resolveram todos os problemas...",
    rating: 5,
  },
  // ... mais depoimentos
];
```

#### 3️⃣ Adicionar o novo depoimento
```typescript
export const testimonials: Testimonial[] = [
  {
    name: "Maria Silva",
    company: "Boutique Elegance",
    text: "Excelente atendimento! Meus cartões ficaram perfeitos...",
    rating: 5,
  },
  {
    name: "João Santos",
    company: "Tech Solutions",
    text: "Resolveram todos os problemas...",
    rating: 5,
  },
  // ← NOVO DEPOIMENTO AQUI:
  {
    name: "Roberto Lima",
    company: "Móveis Design",
    text: "Fizeram o site da minha loja e as vendas online triplicaram! Equipe super profissional.",
    rating: 5,
  },
];
```

#### 4️⃣ Salvar e conferir
- ✅ Salve o arquivo
- ✅ Acesse a home do site
- ✅ Role até a seção "Depoimentos"
- ✅ Veja o novo depoimento aparecendo

### ✨ Resultado:
O depoimento de Roberto aparecerá na seção de depoimentos da home com as estrelas e toda a formatação automática.

---

## 🖼️ Exemplo 4: Adicionar Projeto ao Portfólio

### Cenário:
A empresa criou um novo logotipo para a "Padaria Pão Quente" e quer adicionar ao portfólio.

### Passo a Passo:

#### 1️⃣ Abrir o arquivo de portfólio
```bash
Arquivo: /data/portfolio.ts
```

#### 2️⃣ Ver a estrutura de um projeto existente
```typescript
{
  id: '7',
  slug: 'identidade-visual-doces-artesanais',
  title: 'Identidade Visual - Doces Artesanais',
  category: 'digital',
  categoryLabel: 'Serviços Digitais',
  thumbnail: 'bakery branding logo',
  description: 'Desenvolvimento completo de identidade visual...',
  client: 'Doces da Vó Maria',
  date: 'Outubro 2024',
  images: ['bakery logo', 'brand identity', 'bakery design'],
  details: [
    { label: 'Entregas', value: 'Logo + Manual + Aplicações' },
    { label: 'Formatos', value: 'AI, PNG, SVG, PDF' },
  ],
  technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma'],
  results: [
    'Reconhecimento imediato da marca',
    'Aumento de 35% nas vendas',
  ],
}
```

#### 3️⃣ Adicionar o novo projeto
```typescript
export const portfolioItems: PortfolioItem[] = [
  // ... projetos existentes ...
  
  // ← NOVO PROJETO AQUI:
  {
    id: '9',  // Próximo ID disponível
    slug: 'logotipo-padaria-pao-quente',
    title: 'Logotipo - Padaria Pão Quente',
    category: 'digital',
    categoryLabel: 'Serviços Digitais',
    thumbnail: 'bakery logo design',  // Palavras para buscar imagem
    description: 'Criação de logotipo moderno e acolhedor para padaria tradicional. Design que transmite qualidade e tradição com toque contemporâneo.',
    client: 'Padaria Pão Quente',
    date: 'Janeiro 2025',
    images: [
      'bakery logo modern',
      'bread logo design',
      'bakery branding'
    ],
    details: [
      { label: 'Tipo', value: 'Logotipo + Marca' },
      { label: 'Formatos', value: 'AI, PNG, SVG, PDF' },
      { label: 'Cores', value: 'Marrom quente + Dourado' },
      { label: 'Revisões', value: '3 rodadas' },
      { label: 'Prazo', value: '7 dias' },
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop'],
    results: [
      'Identidade visual moderna e memorável',
      'Aumento de 50% no reconhecimento da marca',
      'Aplicação em embalagens e fachada',
    ],
  },
];
```

#### 4️⃣ Salvar e verificar
- ✅ Salve o arquivo
- ✅ Acesse a página de Portfólio
- ✅ Veja o novo projeto na lista
- ✅ Clique para ver os detalhes
- ✅ Confirme que tudo está correto

### ✨ Resultado:
O projeto "Padaria Pão Quente" aparecerá:
- Na galeria do portfólio
- Com filtro por categoria "Digital"
- Com página de detalhes completa
- Com imagens e informações

---

## 💰 Exemplo 5: Atualizar Preços

### Cenário:
O preço dos cartões de visita aumentou de R$ 80 para R$ 90 por milheiro.

### Passo a Passo:

#### 1️⃣ Abrir o arquivo de serviços
```bash
Arquivo: /config/services.ts
```

#### 2️⃣ Atualizar em dois lugares

**Local 1: Tabela de preços rápida**
```typescript
// ANTES:
export const quickPrices = {
  businessCards: "R$ 80/1000",
  // ...
}

// DEPOIS:
export const quickPrices = {
  businessCards: "R$ 90/1000",  // ← Atualizado
  // ...
}
```

**Local 2: Serviços detalhados**
```typescript
// ANTES:
export const graphicServices = [
  {
    name: "Cartões de Visita",
    description: "Cartões profissionais...",
    price: "A partir de R$ 80/milheiro",
    // ...
  },
  // ...
];

// DEPOIS:
export const graphicServices = [
  {
    name: "Cartões de Visita",
    description: "Cartões profissionais...",
    price: "A partir de R$ 90/milheiro",  // ← Atualizado
    // ...
  },
  // ...
];
```

#### 3️⃣ Salvar e conferir
- ✅ Salve o arquivo
- ✅ Acesse a página de Serviços
- ✅ Verifique se o preço mudou
- ✅ Confirme em todos os lugares

### ✨ Resultado:
O novo preço aparecerá em toda a página de serviços e em qualquer lugar que exiba essa informação.

---

## 📊 Exemplo 6: Atualizar Estatísticas

### Cenário:
A empresa cresceu! Agora são 650 clientes, 1300 projetos e 6 anos de mercado.

### Passo a Passo:

#### 1️⃣ Abrir o arquivo da empresa
```bash
Arquivo: /config/company.ts
```

#### 2️⃣ Encontrar as estatísticas
```typescript
// ANTES:
stats: {
  clients: "500+",
  projects: "1000+",
  satisfaction: "98%",
  years: "5+",
}
```

#### 3️⃣ Atualizar os números
```typescript
// DEPOIS:
stats: {
  clients: "650+",      // ← Cresceu!
  projects: "1300+",    // ← Cresceu!
  satisfaction: "98%",  // Manteve
  years: "6+",          // ← Mais um ano!
}
```

#### 4️⃣ Salvar e ver o resultado
- ✅ Salve o arquivo
- ✅ Acesse a home do site
- ✅ Veja os números atualizados logo abaixo do hero
- ✅ Confira também na página "Sobre"

### ✨ Resultado:
Os números atualizados aparecem automaticamente em:
- Seção de estatísticas da home
- Página sobre nós
- Qualquer outro lugar que use `company.stats`

---

## 📧 Exemplo 7: Mudar Mensagem do WhatsApp

### Cenário:
Quer que quando clicarem no botão do WhatsApp, apareça uma mensagem diferente.

### Passo a Passo:

#### 1️⃣ Abrir o arquivo da empresa
```bash
Arquivo: /config/company.ts
```

#### 2️⃣ Encontrar a mensagem do WhatsApp
```typescript
// ANTES:
contact: {
  phone: "(21) 97001-6069",
  phoneRaw: "5521970016069",
  whatsapp: "5521970016069",
  whatsappMessage: "Olá! Vim pelo site e gostaria de mais informações.",
},
```

#### 3️⃣ Mudar a mensagem
```typescript
// DEPOIS:
contact: {
  phone: "(21) 97001-6069",
  phoneRaw: "5521970016069",
  whatsapp: "5521970016069",
  whatsappMessage: "Olá! Vi o site e gostaria de solicitar um orçamento. Pode me ajudar?",  // ← Nova mensagem
},
```

#### 4️⃣ Testar
- ✅ Salve o arquivo
- ✅ Clique no botão flutuante do WhatsApp
- ✅ Veja a nova mensagem pré-escrita
- ✅ Perfeito!

### ✨ Resultado:
Ao clicar no botão do WhatsApp, o aplicativo abrirá com a nova mensagem já digitada.

---

## 🏠 Exemplo 8: Mudar Título da Home

### Cenário:
Quer mudar o título principal de "Soluções Completas para o Seu Negócio" para algo mais específico.

### Passo a Passo:

#### 1️⃣ Abrir o arquivo de conteúdo
```bash
Arquivo: /data/content.ts
```

#### 2️⃣ Encontrar o conteúdo da home
```typescript
// ANTES:
export const homeContent = {
  hero: {
    badge: "Tecnologia + Gráfica + Digital",
    title: "Soluções Completas para o Seu Negócio",
    subtitle: "Da impressão ao digital, da manutenção à presença online...",
    primaryCta: "Solicitar Orçamento",
    secondaryCta: "Nossos Serviços",
  },
  // ...
}
```

#### 3️⃣ Editar os textos
```typescript
// DEPOIS:
export const homeContent = {
  hero: {
    badge: "Tecnologia + Gráfica + Digital",
    title: "Transforme Suas Ideias em Resultados Reais",  // ← Novo título
    subtitle: "Serviços completos de gráfica, TI e design digital para fazer seu negócio decolar.",  // ← Novo subtítulo
    primaryCta: "Quero Um Orçamento",  // ← Novo texto do botão
    secondaryCta: "Ver Serviços",  // ← Novo texto do botão
  },
  // ...
}
```

#### 4️⃣ Verificar
- ✅ Salve o arquivo
- ✅ Acesse a home
- ✅ Veja o novo título em destaque
- ✅ Perfeito!

### ✨ Resultado:
A home terá um título completamente novo, mais impactante e personalizado para o negócio.

---

## 🎯 Checklist Geral de Edição

Sempre que fizer uma edição:

- [ ] 📝 Fiz backup do arquivo original?
- [ ] ✏️ Editei o arquivo correto?
- [ ] 🔍 Mantive a estrutura do objeto?
- [ ] 💾 Salvei o arquivo (Ctrl+S)?
- [ ] 🔄 Recarreguei o navegador?
- [ ] ✅ Testei a mudança?
- [ ] 📱 Verifiquei no mobile?
- [ ] 🐛 Não tem erros no console?

---

## 💡 Dicas Finais

1. **Comece pequeno** - Faça uma mudança simples primeiro
2. **Teste sempre** - Veja o resultado após cada edição
3. **Use exemplos** - Copie objetos existentes como base
4. **Seja consistente** - Mantenha o padrão dos dados
5. **Documente** - Anote mudanças importantes

---

**Precisa de mais ajuda?**
- 📘 `/README_DESENVOLVIMENTO.md` - Guia completo
- ⚡ `/COMO_EDITAR.md` - Guia rápido
- 📂 `/ESTRUTURA_PROJETO.md` - Organização dos arquivos
