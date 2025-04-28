// components/checkbox/checkbox.js
window.KitUI = window.KitUI || {};
window.KitUI.Checkbox = {
  /**
   * Cria um checkbox estilizado.
   * @param {Object} options - Configurações do checkbox
   * @param {string} options.label - Texto exibido ao lado do checkbox
   * @param {boolean} options.checked - Se o checkbox inicia marcado
   * @param {boolean} options.disabled - Se o checkbox está desabilitado
   * @param {Function} options.onChange - Função chamada ao mudar o estado
   * @returns {HTMLElement} O elemento checkbox criado
   */
  create: function({ label = 'Checkbox', checked = false, disabled = false, onChange = null } = {}) {
    const container = document.createElement('label');
    container.className = 'kitui-checkbox';
    container.style.display = 'inline-flex';
    container.style.alignItems = 'center';
    container.style.cursor = 'pointer';
    
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.checked = checked;
    input.disabled = disabled;

    const box = document.createElement('span');
    box.className = 'checkbox-box';
    box.style.width = '18px';
    box.style.height = '18px';
    box.style.border = '2px solid #ccc';
    box.style.borderRadius = '4px';
    box.style.backgroundColor = '#fff';

    const labelElement = document.createElement('span');
    labelElement.textContent = label;
    labelElement.style.marginLeft = '8px';
    
    container.appendChild(input);
    container.appendChild(box);
    container.appendChild(labelElement);

    // Evento de alteração de estado
    input.addEventListener('change', () => {
      if (typeof onChange === 'function') onChange(input.checked);
    });

    return container;
  }
};
