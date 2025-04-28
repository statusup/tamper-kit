// components/color/color.js
// Define paleta e getter de cores

window.KitUI = window.KitUI || {};
window.KitUI.Color = {
  palette: {
    success: '#4CAF50',
    done:    '#388E3C',
    warning: '#FFC107',
    danger:  '#F44336',
    info:    '#2196F3',
    default: '#9E9E9E'
  },
  /**
   * Retorna hex da cor
   * @param {string} name
   * @returns {string}
   */
  get: function(name) {
    return this.palette[name] || this.palette.default;
  }
};
