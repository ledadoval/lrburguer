console.log("O JavaScript está funcionando!");

document.addEventListener('DOMContentLoaded', function() {
  // Obtém o botão de menu e o menu móvel
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  // Verifica se os elementos existem antes de adicionar o evento
  if (mobileMenuButton && mobileMenu) {
    // Alterna a visibilidade do menu
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
