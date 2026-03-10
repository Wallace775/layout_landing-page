'use strict';

// Menu Mobile - Controle de abertura/fechamento
const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.header__menu-button');
const menuClose = document.querySelector('.menu__close');
const menuLinks = document.querySelectorAll('.menu__link');

// Fecha o menu ao clicar em um link
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (menu) {
      // Remove o target para fechar o menu
      window.location.hash = '';
    }
  });
});

// Fecha o menu ao clicar fora
document.addEventListener('click', (event) => {
  if (menu && menuButton && !menu.contains(event.target) && !menuButton.contains(event.target)) {
    const isMenuOpen = window.location.hash === '#menu';
    if (isMenuOpen) {
      window.location.hash = '';
    }
  }
});

// Formulário de Contato com envio para WhatsApp
const contactForm = document.querySelector('.contact__form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Captura os dados do formulário
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const phone = document.querySelector('#phone').value.trim();
    const message = document.querySelector('#message').value.trim();

    // Validação simples
    if (!name || !email || !phone || !message) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // ⚠️ ATENÇÃO: Substitua pelo número do WhatsApp real (código do país + DDD + número)
    // Exemplo Brasil: '5511999999999' | Exemplo EUA: '12125551234'
    const whatsappNumber = '5511999999999'; // <-- MUDE AQUI!

    // Cria a mensagem formatada para o WhatsApp
    const whatsappMessage = `Olá, meu nome é ${name}!
    
📧 Email: ${email}
📱 Telefone: ${phone}

💬 Mensagem:
${message}

----------------------------------
Enviado via formulário do site The MET`;

    // Codifica a mensagem para URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Cria a URL do WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, '_blank');

    // Limpa o formulário
    contactForm.reset();

    // Feedback visual
    alert('Obrigado pelo contato! Redirecionando para o WhatsApp...');
  });
}

// Header com efeito de scroll (opcional - muda a aparência ao rolar)
const header = document.querySelector('.header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
  });
}

// Smooth scroll para links internos (compatibilidade com browsers antigos)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (event) {
    const href = this.getAttribute('href');
    
    // Não faz scroll para links vazios ou apenas #
    if (href === '#' || href === '') return;
    
    event.preventDefault();
    
    const target = document.querySelector(href);
    
    if (target) {
      const headerOffset = 80; // Altura do header fixo
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  });
});
