// components/snackbar/snackbar.js
window.KitUI = window.KitUI || {};
window.KitUI.Snackbar = {
  /**
   * Exibe um snackbar com texto e posição customizável
   * @param {Object} options
   * @param {string} options.text - Mensagem a exibir
   * @param {number} [options.duration=3000] - Tempo em ms antes de sumir
   * @param {string} [options.position='bottom-center'] - Posição: 
   *    'bottom-center', 'bottom-right', 'bottom-left', 
   *    'top-right', 'top-left', 'top-center'
   */
  show: function({ text = 'Mensagem', duration = 3000, position = 'bottom-center' } = {}) {
    // injeta CSS comum uma vez
    if (!document.getElementById('kitui-snackbar-style')) {
      const style = document.createElement('style');
      style.id = 'kitui-snackbar-style';
      style.textContent = `
        .kitui-snackbar {
          visibility: hidden;
          min-width: 200px;
          background: #333; color: #fff;
          text-align: center; border-radius: 4px;
          padding: 12px; position: fixed;
          opacity: 0; transition: opacity .3s ease;
          z-index: 9999;
        }
        .kitui-snackbar.show {
          visibility: visible; opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }

    // Cria o elemento
    const bar = document.createElement('div');
    bar.className = 'kitui-snackbar';
    bar.textContent = text;

    // Define posicionamento inline
    const posMap = {
      'bottom-center': { left: '50%', transform: 'translateX(-50%)', bottom: '30px' },
      'bottom-right':  { right: '30px', bottom: '30px' },
      'bottom-left':   { left: '30px', bottom: '30px' },
      'top-right':     { right: '30px', top: '30px' },
      'top-left':      { left: '30px', top: '30px' },
      'top-center':    { left: '50%', transform: 'translateX(-50%)', top: '30px' }
    };
    const styles = posMap[position] || posMap['bottom-center'];
    Object.assign(bar.style, styles);

    // Anexa e anima
    document.body.appendChild(bar);
    requestAnimationFrame(() => bar.classList.add('show'));

    // Remove depois da duração
    setTimeout(() => {
      bar.classList.remove('show');
      setTimeout(() => bar.remove(), 300);
    }, duration);

    return bar;
  }
};
