// ==UserScript==
// @name         📦 TamperKit - Snackbar
// @namespace    http://tamperkit/statusup
// @version      0.1
// @description  Biblioteca de Snackbar básico para Tampermonkey (mensagem temporária flutuante) 
// @author       Statusup
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Garante que o namespace TamperKit exista
    window.TamperKit = window.TamperKit || {};

    // Define o módulo de Snackbar
    window.TamperKit.Snackbar = {
        /**
         * Cria e exibe um snackbar simples
         * @param {Object} options - Configurações do snackbar
         * @param {string} options.text - Texto a ser exibido
         * @param {number} [options.duration=3000] - Duração em milissegundos (opcional)
         * @returns {HTMLElement} Elemento do snackbar criado
         */
        showSnackbar: function(options) {
            const snackbar = document.createElement('div');
            snackbar.textContent = options.text || 'Mensagem';
            snackbar.className = 'tamperkit-snackbar';
            document.body.appendChild(snackbar);

            setTimeout(() => {
                snackbar.classList.add('show');
            }, 100); // pequeno delay para animação

            setTimeout(() => {
                snackbar.classList.remove('show');
                setTimeout(() => {
                    snackbar.remove();
                }, 300); // tempo para animação de saída
            }, options.duration || 3000);

            return snackbar;
        }
    };

    // Injeta o CSS do Snackbar
    (function injectSnackbarCSS() {
        const style = document.createElement('style');
        style.innerHTML = `
        .tamperkit-snackbar {
            visibility: hidden;
            min-width: 250px;
            margin-left: -125px;
            background-color: #333;
            color: #fff;
            text-align: center;
            border-radius: 4px;
            padding: 12px;
            position: fixed;
            left: 50%;
            bottom: 30px;
            font-size: 14px;
            z-index: 9999;
            transition: visibility 0s, opacity 0.5s ease-in-out;
            opacity: 0;
        }

        .tamperkit-snackbar.show {
            visibility: visible;
            opacity: 1;
        }
        `;
        document.head.appendChild(style);
    })();

})();
