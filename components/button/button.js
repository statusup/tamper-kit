// components/button/button.js
// Exemplo mínimo de criação de botão estilizado via window.KitUI.Button

window.KitUI = window.KitUI || {};
window.KitUI.Button = {
  /**
   * Cria um botão simples
   * @param {{ text: string, onClick: Function, style?: Object }} options
   * @returns {HTMLButtonElement}
   */
  create: function({ text = 'Botão', onClick = () => {}, style = {} } = {}) {
    const btn = document.createElement('button');
    btn.textContent = text;
    // estilos padrão
    Object.assign(btn.style, {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      ...style
    });
    btn.addEventListener('click', onClick);
    return btn;
  }
};
