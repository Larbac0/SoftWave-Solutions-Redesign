# 🚀 Guia Rápido de Edição - SoftWave Solutions

## ⚡ Edições Mais Comuns

### 1. Mudar Telefone e WhatsApp
📁 **Arquivo:** `/config/company.ts`

```typescript
contact: {
  phone: "(21) 97001-6069",        // ← Mude aqui
  phoneRaw: "5521970016069",       // ← E aqui (sem parênteses/hífens)
  whatsapp: "5521970016069",       // ← E aqui também
  // ...
}
```

---

### 2. Atualizar Endereço
📁 **Arquivo:** `/config/company.ts`

```typescript
address: {
  street: "Rua Nova, 456",         // ← Mude aqui
  district: "Bairro Novo",         // ← E aqui
  city: "Rio de Janeiro",
  state: "RJ",
  zipCode: "22723-019",
  full: "Estrada da Boiuna, 1133 - Taquara, Rio de Janeiro - RJ", // ← Atualize aqui
}
```

---

### 3. Mudar Cores da Marca
📁 **Arquivo:** `/config/theme.ts`

```typescript
export const colors = {
  primary: "#10CFA3",     // ← Sua cor principal
  secondary: "#04BFFD",   // ← Sua cor secundária
  // ...
}
```

> 💡 Use códigos de cor hexadecimais (#000000)

---

### 4. Editar Texto do Título Principal
📁 **Arquivo:** `/data/content.ts`

```typescript
export const homeContent = {
  hero: {
    badge: "Tecnologia + Gráfica + Digital",
    title: "Soluções Completas para o Seu Negócio",  // ← Mude aqui
    subtitle: "Da impressão ao digital...",           // ← Ou aqui
    // ...
  }
}
```

---

### 5. Adicionar Novo Depoimento
📁 **Arquivo:** `/data/content.ts`

```typescript
export const testimonials: Testimonial[] = [
  // ... depoimentos existentes
  
  // ← ADICIONE AQUI UM NOVO:
  {
    name: "Carlos Mendes",
    company: "Empresa XYZ",
    text: "Excelente trabalho! Super recomendo.",
    rating: 5,
  }
]
```

---

### 6. Atualizar Estatísticas (500+ Clientes, etc.)
📁 **Arquivo:** `/config/company.ts`

```typescript
stats: {
  clients: "600+",      // ← Aumente conforme crescer
  projects: "1500+",    // ← Atualize sempre
  satisfaction: "99%",  // ← Melhore esse número!
  years: "6+",          // ← Um ano a mais? Atualize!
}
```

---

### 7. Adicionar Novo Serviço
📁 **Arquivo:** `/config/services.ts`

**Exemplo - Adicionar novo serviço gráfico:**
```typescript
export const graphicServices = [
  // ... serviços existentes
  
  // ← ADICIONE AQUI:
  {
    name: "Adesivos Personalizados",
    description: "Adesivos de alta qualidade em diversos formatos",
    price: "A partir de R$ 50",
    features: [
      "Diversos tamanhos",
      "Material resistente",
      "Entrega rápida"
    ],
  }
]
```

---

### 8. Adicionar Projeto ao Portfólio
📁 **Arquivo:** `/data/portfolio.ts`

```typescript
export const portfolioItems: PortfolioItem[] = [
  // ... projetos existentes
  
  // ← ADICIONE AQUI:
  {
    id: '9',                              // Próximo número
    slug: 'nome-do-projeto',              // URL amigável
    title: 'Nome Completo do Projeto',
    category: 'grafico',                  // ou 'informatica' ou 'digital'
    categoryLabel: 'Serviços Gráficos',
    thumbnail: 'business cards design',   // Palavras para buscar imagem
    description: 'Descrição completa do projeto aqui...',
    client: 'Nome do Cliente',
    date: 'Janeiro 2025',
    images: ['imagem1', 'imagem2', 'imagem3'],
    details: [
      { label: 'Formato', value: '10x15cm' },
      { label: 'Material', value: 'Papel couché' },
    ],
    results: [
      'Resultado alcançado 1',
      'Resultado alcançado 2',
    ],
  }
]
```

---

### 9. Mudar Preços dos Serviços
📁 **Arquivo:** `/config/services.ts`

**Opção A - Tabela de preços rápida:**
```typescript
export const quickPrices = {
  businessCards: "R$ 90/1000",  // ← Mude aqui
  flyers: "R$ 160/1000",
  // ...
}
```

**Opção B - Preços detalhados:**
```typescript
export const graphicServices = [
  {
    name: "Cartões de Visita",
    price: "A partir de R$ 90/milheiro",  // ← Mude aqui
    // ...
  }
]
```

---

### 10. Atualizar Redes Sociais
📁 **Arquivo:** `/config/company.ts`

```typescript
social: {
  facebook: "https://facebook.com/seuusuario",   // ← Seu Facebook
  instagram: "https://instagram.com/seuusuario", // ← Seu Instagram
  linkedin: "https://linkedin.com/company/sua-empresa",
  youtube: "https://youtube.com/@seucanal",
}
```

---

## 📋 Checklist de Edição

Após fazer alterações, verifique:

- [ ] Salvei o arquivo?
- [ ] Recarreguei a página no navegador?
- [ ] A mudança apareceu corretamente?
- [ ] Não tem erros no console (F12)?
- [ ] Testei em celular/tablet?

---

## ⚠️ IMPORTANTE - Não Edite Estes Arquivos:

❌ `/components/figma/ImageWithFallback.tsx` - Sistema  
❌ `/components/ui/*` - Biblioteca de componentes  
❌ `/styles/globals.css` - Só se souber CSS avançado  
❌ `/App.tsx` - Só se souber React

---

## 🆘 Algo Deu Errado?

### Solução Rápida:
1. **Desfazer** (Ctrl+Z no VSCode)
2. **Salvar** o arquivo
3. **Recarregar** a página

### Se não resolver:
1. Abra o Console (F12 no navegador)
2. Veja mensagens de erro em vermelho
3. Procure o nome do arquivo com erro
4. Verifique o que você mudou nesse arquivo

---

## 💡 Dicas Pro:

1. **Faça uma mudança por vez** - Fica mais fácil saber o que funcionou ou quebrou
2. **Copie antes de apagar** - Nunca se sabe quando vai precisar do código antigo
3. **Use Ctrl+F** - Para encontrar textos específicos nos arquivos
4. **Teste sempre** - Salve e veja o resultado antes de fazer mais mudanças

---

## 📞 Arquivos por Necessidade

| Preciso mudar... | Arquivo |
|-----------------|---------|
| 📞 Telefone/WhatsApp | `/config/company.ts` |
| 🏠 Endereço | `/config/company.ts` |
| 🎨 Cores | `/config/theme.ts` |
| 📝 Textos Home | `/data/content.ts` |
| 💼 Serviços | `/config/services.ts` |
| 🖼️ Portfólio | `/data/portfolio.ts` |
| 💬 Depoimentos | `/data/content.ts` |
| 📊 Estatísticas | `/config/company.ts` |
| 💰 Preços | `/config/services.ts` |
| 🌐 Redes Sociais | `/config/company.ts` |

---

**Precisa de mais detalhes?** Veja o arquivo `/README_DESENVOLVIMENTO.md`
