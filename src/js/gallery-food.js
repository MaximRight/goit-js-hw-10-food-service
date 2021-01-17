import itemsTemplate from '../templates/gallery-items.hbs';

import menu from '../menu.json';

// console.log(menu);

const markup = itemsTemplate(menu);
// console.log(markup);

const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', markup);
