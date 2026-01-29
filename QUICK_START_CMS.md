# 🚀 Guia Rápido - Netlify CMS

## ⚡ Começando em 5 Minutos

### 1. Deploy no Netlify

```bash
# Se ainda não fez o deploy:
git add .
git commit -m "Adiciona configuração do Netlify CMS"
git push origin main
```

### 2. Configurar Identity

1. Acesse: https://app.netlify.com
2. Selecione seu site
3. Vá em **Identity** → **Enable Identity**
4. Em **Registration**: selecione **Invite only**

### 3. Habilitar Git Gateway

1. Ainda em **Identity**
2. Role até **Services**
3. Clique em **Enable Git Gateway**

### 4. Criar Usuário Admin

1. Em **Identity** → **Invite users**
2. Digite seu email
3. Clique no link do email recebido
4. Crie sua senha

### 5. Acessar o CMS

Acesse: `https://seu-site.netlify.app/admin`

---

## 📝 Criando Seu Primeiro Post

1. Acesse `/admin`
2. Faça login
3. Clique em **Blog** → **New Blog**
4. Preencha os campos:
   - Título
   - Descrição
   - Categoria
   - Tags
   - Conteúdo
5. Clique em **Save** → **Publish**

---

## 💼 Adicionando Projeto ao Portfólio

1. Acesse `/admin`
2. Clique em **Portfólio** → **New Projeto**
3. Preencha os campos obrigatórios
4. Adicione imagens da galeria
5. Liste tecnologias e resultados
6. **Save** → **Publish**

---

## ⚙️ Atualizando Configurações

1. Acesse `/admin`
2. Clique em **Configurações**
3. Escolha o que deseja editar:
   - Informações da Empresa
   - SEO e Meta Tags
   - Serviços Oferecidos
4. Faça as alterações
5. **Save**

---

## 🔄 Workflow Editorial (Opcional)

Se habilitado no `config.yml`:

- **Draft** → Rascunho (só você vê)
- **In Review** → Em revisão
- **Ready** → Pronto para publicar

Para publicar:
1. Mova para **Ready**
2. Clique em **Publish**

---

## 🛠️ Desenvolvimento Local

### Opção 1: Backend Proxy (Recomendado)

Terminal 1:
```bash
npx netlify-cms-proxy-server
```

Terminal 2:
```bash
npm run dev
```

Acesse: `http://localhost:3000/admin`

### Opção 2: Teste Backend

No `config.yml`, adicione:
```yaml
backend:
  name: test-repo
```

---

## 📸 Gerenciando Imagens

### Uploads
1. No editor de conteúdo
2. Clique no ícone de imagem
3. Faça upload ou selecione existente
4. As imagens vão para `/public/uploads`

### Keywords (Atual)
- Use palavras-chave separadas por vírgula
- Exemplo: `design,logo,brand`
- Sem espaços entre palavras

---

## ✅ Checklist de Verificação

- [ ] Site deployado no Netlify
- [ ] Identity habilitado
- [ ] Git Gateway habilitado
- [ ] Usuário admin criado
- [ ] Consegui fazer login em `/admin`
- [ ] Criei um post de teste
- [ ] Post apareceu no site
- [ ] Configurações editadas

---

## 🆘 Problemas Comuns

### Erro 404 ao acessar /admin
- Certifique-se que `/public/admin/` existe
- Faça novo deploy

### "Config error"
- Verifique sintaxe do `config.yml`
- Use validador YAML online

### Não consigo fazer login
- Verifique se Identity está habilitado
- Confirme que Git Gateway está ativo
- Limpe cache do navegador

### Mudanças não aparecem
- Aguarde deploy (1-3 minutos)
- Limpe cache do site
- Verifique aba **Deploys** no Netlify

---

## 📱 Atalhos Úteis

| Ação | Atalho |
|------|--------|
| Negrito | `Ctrl/Cmd + B` |
| Itálico | `Ctrl/Cmd + I` |
| Link | `Ctrl/Cmd + K` |
| Salvar | `Ctrl/Cmd + S` |

---

## 🔗 Links Importantes

- **Painel Admin**: `/admin`
- **Netlify Dashboard**: https://app.netlify.com
- **Documentação**: [NETLIFY_CMS_SETUP.md](/NETLIFY_CMS_SETUP.md)
- **Docs Oficiais**: https://www.netlifycms.org

---

## 💡 Dicas

1. **Sempre salve** antes de navegar para outra página
2. **Use preview** para ver como ficará antes de publicar
3. **Tags ajudam** no SEO e organização
4. **Imagens otimizadas** carregam mais rápido
5. **Backup automático** via Git - relaxe!

---

## 📞 Precisa de Ajuda?

- 📧 Email: contato@softwavesl.com.br
- 📱 WhatsApp: (21) 97001-6069
- 🌐 Site: softwavesl.com.br
- 📖 Docs: Leia o [NETLIFY_CMS_SETUP.md](/NETLIFY_CMS_SETUP.md) completo

---

**SoftWave Solutions** - Transformando ideias em soluções digitais

*Última atualização: Dezembro 2024*
