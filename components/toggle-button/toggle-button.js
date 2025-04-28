// KitUI Toggle Button
window.KitUI = window.KitUI || {};
window.KitUI.ToggleButton = {
  create: function({ 
    textOn = 'Ligado', 
    textOff = 'Desligado', 
    initial = false, 
    onToggle = null,
    styleOn = {},
    styleOff = {} 
  } = {}) {
    const btn = document.createElement('button');
    btn.textContent = initial ? textOn : textOff;
    Object.assign(btn.style, {
      padding: '8px 12px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      backgroundColor: initial ? '#4CAF50' : '#9E9E9E',
      color: '#fff',
      ...initial ? styleOn : styleOff
    });

    let state = initial;

    btn.addEventListener('click', () => {
      state = !state;
      btn.textContent = state ? textOn : textOff;
      Object.assign(btn.style, {
        backgroundColor: state ? '#4CAF50' : '#9E9E9E',
        ...state ? styleOn : styleOff
      });
      if (typeof onToggle === 'function') {
        onToggle(state);
      }
    });

    return btn;
  }
};
