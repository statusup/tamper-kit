// components/radio-button/radio-button.js
window.KitUI = window.KitUI || {};
window.KitUI.RadioButton = {
  /**
   * Cria um radio button estilizado.
   * @param {Object} options - Configurações do radio button
   * @param {string} options.label - Texto exibido ao lado do radio button
   * @param {string} options.value - Valor do radio button
   * @param {string} options.name - Nome do grupo de radio buttons
   * @param {boolean} options.checked - Se o radio button começa marcado
   * @param {boolean} options.disabled - Se o radio button está desabilitado
   * @param {Function} options.onChange - Função chamada ao mudar o estado
   * @returns {HTMLElement} O elemento radio button criado
   */
  create: function({ label = 'Radio', value, name, checked = false, disabled = false, onChange = null } = {}) {
    const container = document.createElement('label');
    container.className = 'kitui-radio';
    container.style.display = 'inline-flex';
    container.style.alignItems = 'center';
    container.style.cursor = 'pointer';

    const input = document.createElement('input');
    input.type = 'radio';
    input.value = value;
    input.name = name;
    input.checked = checked;
    input.disabled = disabled;

    const circle = document.createElement('span');
    circle.className = 'radio-circle';
    circle.style.width = '18px';
    circle.style.height = '18px';
    circle.style.border = '2px solid #ccc';
    circle.style.borderRadius = '50%';
    circle.style.backgroundColor = '#fff';

    const labelElement = document.createElement('span');
    labelElement.textContent = label;
    labelElement.style.marginLeft = '8px';

    container.appendChild(input);
    container.appendChild(circle);
    container.appendChild(labelElement);

    // Evento de alteração de estado
    input.addEventListener('change', () => {
      if (typeof onChange === 'function') onChange(value);
    });

    return container;
  }
};
