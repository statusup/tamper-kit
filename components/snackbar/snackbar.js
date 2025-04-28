// components/snackbar/snackbar.js
// Snackbar básico: injeta CSS e expõe show()

window.KitUI = window.KitUI || {};
window.KitUI.Snackbar = {
  /**
   * Exibe um snackbar com texto
   * @param {{ text: string, duration?: number }} options
   */
  show: function({ text = 'Mensagem', duration = 3000 } = {}) {
    // injeta CSS apenas uma vez
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
          left: 50%; bottom: 30px;
          transform: translateX(-50%);
          opacity: 0; transition: opacity .3s ease;
          z-index: 9999;
        }
        .kitui-snackbar.show {
          visibility: visible; opacity: 1;
        }
      `;
      document.head.appendChild(style);
    }

    const bar = document.createElement('div');
    bar.className = 'kitui-snackbar';
    bar.textContent = text;
    document.body.appendChild(bar);

    // trigger
    requestAnimationFrame(() => bar.classList.add('show'));
    setTimeout(() => {
      bar.classList.remove('show');
      setTimeout(() => bar.remove(), 300);
    }, duration);
  }
};
