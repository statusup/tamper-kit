# Tamper Kit

**Biblioteca modular de componentes e funções reutilizáveis para desenvolvimento de scripts Tampermonkey.**

---

## 📚 Sobre o projeto

O **Tamper Kit** é uma coleção de componentes, estilos e funções utilitárias desenvolvidas para facilitar a criação e manutenção de scripts Tampermonkey.

A ideia é oferecer uma base comum e reutilizável que permita:

- Desenvolvimento mais rápido de novos scripts.
- Padrão visual e de funcionalidades consistente entre projetos.
- Facilitar o aprendizado e a colaboração com assistentes de IA e outros desenvolvedores.

Este projeto foi criado para ser **simples, modular e expansível**.

---

## 📂 Estrutura do Repositório

```
tamper-kit/
├── README.md
├── components/
│   └── buttons/
│       └── botao-kit.user.js
└── tests/
    └── test-buttons.user.js
```

- `components/`: Componentes reutilizáveis (ex: botões, modais, tooltips...).
- `tests/`: Scripts de teste para validar o funcionamento dos componentes.

---

## ⚙️ Como usar

1. Inclua o script do componente desejado no seu script Tampermonkey.
2. Chame as funções exportadas pelo `window.TamperKit` para criar elementos de forma rápida.

Exemplo básico:

```javascript
// Cria um botão simples
window.TamperKit.createButton({
  text: 'Clique aqui',
  onClick: () => alert('Botão clicado!'),
});
```

---

## 🛠️ Tecnologias Utilizadas

- JavaScript (ES6+)
- Tampermonkey

---

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

## ✨ Status do projeto

🚀 Em desenvolvimento inicial (v0.1)
