# The MET - Landing Page

> Landing page responsiva do Metropolitan Museum of Art, desenvolvida com HTML5, SCSS e JavaScript.

[![Deploy](https://github.com/Wallace775/layout_landing-page/actions/workflows/deploy.yml/badge.svg)](https://github.com/Wallace775/layout_landing-page/actions/workflows/deploy.yml)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue?logo=github)](https://Wallace775.github.io/layout_landing-page/)

## 🌐 Demo

**[https://Wallace775.github.io/layout_landing-page/](https://Wallace775.github.io/layout_landing-page/)**

---

## 📋 Sobre o Projeto

Página de aterrissagem (landing page) desenvolvida como parte do currículo da **Mate Academy**. O projeto foca em:

- Layout responsivo e mobile-first
- Metodologia BEM para nomenclatura de classes
- Pré-processador SCSS para estilos
- JavaScript vanilla para interatividade
- Deploy automatizado via GitHub Pages

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **HTML5** | - | Estrutura semântica |
| **SCSS** | ^1.93.2 | Pré-processador CSS |
| **JavaScript** | ES6+ | Interatividade |
| **Vite** | ^6.3.6 | Build tool |
| **BEM** | - | Metodologia CSS |
| **Stylelint** | ^16.7.0 | Linter para SCSS |
| **Prettier** | ^3.3.2 | Formatador de código |
| **Cypress** | ^13.13.0 | Testes E2E |

---

## 📁 Estrutura do Projeto

```
layout_landing-page/
├── public/
│   └── images/              # Imagens estáticas
├── src/
│   ├── images/              # Imagens (desenvolvimento)
│   ├── scripts/
│   │   └── main.js          # Lógica JavaScript
│   └── styles/
│       └── main.scss        # Estilos SCSS
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
└── vite.config.mjs          # Configuração do Vite
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v16 ou superior)
- [Git](https://git-scm.com/)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Wallace775/layout_landing-page.git

# Entre na pasta
cd layout_landing-page

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
```

Acesse `http://localhost:8080` no seu navegador.

---

## 📦 Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Inicia servidor de desenvolvimento com hot-reload |
| `npm run lint` | Verifica e formata o código (Stylelint + Prettier) |
| `npm run build` | Gera build de produção na pasta `dist/` |
| `npm run deploy` | Faz deploy para o GitHub Pages |
| `npm test` | Roda lint e testes |

---

## 🎨 Metodologia BEM

O projeto segue a metodologia **BEM** (Block, Element, Modifier) para nomenclatura de classes CSS:

```scss
/* Block */
.card { }

/* Element */
.card__image { }
.card__title { }

/* Modifier */
.card--featured { }
```

### Exemplo de Uso

```html
<div class="card card--featured">
  <div class="card__image">
    <img src="images/photo.jpg" alt="Photo" class="card__img">
  </div>
  <h3 class="card__title">Title</h3>
</div>
```

---

## 📱 Recursos Implementados

- ✅ **Header fixo** com logo e menu hambúrguer
- ✅ **Menu mobile** com animação de slide
- ✅ **Hero section** com imagem de fundo e call-to-action
- ✅ **Seção About** com grid de texto e imagem
- ✅ **Cards de visita** (horários, ingressos, localização)
- ✅ **Galeria de imagens** com efeito hover
- ✅ **Formulário de contato** com validação
- ✅ **Footer sticky** com efeito parallax
- ✅ **Scroll suave** entre seções
- ✅ **Responsividade** para mobile e tablet

---

## 🔧 Configuração do WhatsApp

O formulário de contato pode enviar mensagens diretamente para o WhatsApp. Para configurar:

1. Abra `src/scripts/main.js`
2. Na linha 50, altere o número:

```javascript
const whatsappNumber = '5511999999999'; // Seu número aqui
```

**Formato:** `código do país + DDD + número` (apenas dígitos)

- 🇧🇷 Brasil: `55` + `11` + `999999999`
- 🇺🇸 EUA: `1` + `212` + `5551234`

---

## 🌍 Deploy

O deploy é feito automaticamente para o **GitHub Pages**:

```bash
# Commit as mudanças
git add .
git commit -m "feat: sua mensagem aqui"
git push

# Deploy para produção
npm run deploy
```

**URL de produção:** https://Wallace775.github.io/layout_landing-page/

---

## ✅ Checklist de Qualidade

- [x] Uso correto da metodologia BEM
- [x] Código SCSS organizado e semântico
- [x] HTML semântico e acessível
- [x] JavaScript modular e legível
- [x] Layout responsivo (mobile, tablet, desktop)
- [x] Imagens otimizadas para web
- [x] Links e formulários funcionais
- [x] Lint passando sem erros

---

## 📚 Aprendizados

Este projeto foi desenvolvido como parte do curso de **Front-End Development** da Mate Academy e cobriu:

- Estruturação de projetos web profissionais
- Uso de pré-processadores CSS (SCSS)
- Build tools modernas (Vite)
- Deploy automatizado (GitHub Pages)
- Versionamento com Git/GitHub
- Metodologias CSS (BEM)
- Testes automatizados (Cypress)

---

## 👨‍💻 Autor

**Wallace**  
[GitHub](https://github.com/Wallace775) • [LinkedIn](https://linkedin.com/in/wallace775)

---

## 📄 Licença

Este projeto está sob a licença GPL-3.0. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- [Mate Academy](https://mate.academy/) pelo curso e orientação
- Comunidade open-source pelas ferramentas utilizadas

---

<div align="center">

**Feito com ❤️ e muito café**

[⬆️ Voltar ao topo](#the-met---landing-page)

</div>
