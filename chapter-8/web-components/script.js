const actionButtonEvent = new CustomEvent('actions', {
  bubbles: true,
  detail: { text: 'ok button' }
});

class MyCardComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const titleText = this.getAttribute('title');
    if (titleText) {
      const title = document.createElement('h2');
      title.innerText = titleText;
      card.appendChild(title);
    }

    const slot = document.createElement('slot');
    card.appendChild(slot);

    const actions = document.createElement('div');
    actions.setAttribute('class', 'actions');
    const button = document.createElement('button');
    button.innerText = 'OK';
    button.setAttribute('type', 'button');
    button.innerText = 'OK';
    button.addEventListener('click', () => {
      this.dispatchEvent(actionButtonEvent);
    });
    actions.appendChild(button);
    card.appendChild(actions);

    const style = document.createElement('style');
    style.textContent = `@import './card.css'`;
    
    card.appendChild(style);
    shadow.appendChild(card);
  }

}

(function() {
  'use strict';
  customElements.define('my-card', MyCardComponent);
  document.querySelector('my-card').addEventListener('actions', e => console.log('outer actions event', e));
})();
