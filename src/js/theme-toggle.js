const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggleRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.body;
// console.log(themeSwitchToggleRef);
console.log(bodyRef);

themeSwitchToggleRef.addEventListener('change', onSwitchToggle);

function onSwitchToggle() {
  bodyRef.classList.toggle('dark-theme');
}

// Добавь функционал изменения темы при нажатии (событие change) на чекбокс #theme-switch-toggle в тулбаре.

// По умолчанию тема светлая.
// При изменении темы, необходимо добавлять на элемент body класс light-theme или dark-theme.
// Выбранная тема должна сохраняться между перезагрузками страницы. Для хранения темы используй localStorage.
