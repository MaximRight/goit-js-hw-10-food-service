const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

populateTheme();

themeSwitchToggleRef.addEventListener('change', onSwitchToggle);

// function onSwitchToggle() {
//   let currentLocalTheme = localStorage.getItem('theme');
//   if (currentLocalTheme === theme.LIGHT) {
//     localStorage.setItem('theme', theme.DARK);
//     const newLocalTheme = localStorage.getItem('theme');

//     bodyRef.classList.remove(currentLocalTheme);
//     bodyRef.classList.add(newLocalTheme);
//   }
//   if (currentLocalTheme === theme.DARK) {
//     localStorage.setItem('theme', theme.LIGHT);
//     const newLocalTheme = localStorage.getItem('theme');

//     bodyRef.classList.remove(currentLocalTheme);
//     bodyRef.classList.add(newLocalTheme);
//   }
// }

// От гениальной Елены Фроловой!

function onSwitchToggle() {
  if (themeSwitchToggleRef.checked) {
    localStorage.setItem('theme', theme.DARK);
    bodyRef.classList.remove(theme.LIGHT);
    bodyRef.classList.add(theme.DARK);
  } else {
    localStorage.setItem('theme', theme.LIGHT);
    bodyRef.classList.remove(theme.DARK);
    bodyRef.classList.add(theme.LIGHT);
  }
}

// От Гениальной Елены Фроловой!

function populateTheme() {
  const actualTheme = localStorage.getItem('theme');
  !actualTheme
    ? bodyRef.classList.add(theme.LIGHT)
    : bodyRef.classList.add(actualTheme);
  if (actualTheme === theme.DARK) {
    themeSwitchToggleRef.checked = true;
  }
}

// function populateTheme() {
//   if (!localStorage.getItem('theme')) {
//     localStorage.setItem('theme', theme.LIGHT);
//   }

//   const actualTheme = localStorage.getItem('theme');

//   if (actualTheme === theme.DARK) {
//     themeSwitchToggleRef.checked = true;
//   }

//   if (localStorage.getItem('theme') === theme.DARK) {
//     const newLocalTheme = localStorage.getItem('theme');

//     bodyRef.classList.add(newLocalTheme);
//   }
// }
