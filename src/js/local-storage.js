const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitchToggleRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

populateTheme();

themeSwitchToggleRef.addEventListener('change', onSwitchToggle);

function onSwitchToggle() {
  let currentLocalTheme = localStorage.getItem('theme');
  let parsedLocalTheme = JSON.parse(currentLocalTheme);
  if (currentLocalTheme === `"${theme.LIGHT}"`) {
    localStorage.setItem('theme', JSON.stringify(theme.DARK));
    const switchedLocalTheme = localStorage.getItem('theme');
    const parsedSwitchedTheme = JSON.parse(switchedLocalTheme);
    bodyRef.classList.remove(parsedLocalTheme);
    bodyRef.classList.add(parsedSwitchedTheme);
  }
  if (currentLocalTheme === `"${theme.DARK}"`) {
    localStorage.setItem('theme', JSON.stringify(theme.LIGHT));
    const switchedLocalTheme = localStorage.getItem('theme');
    const parsedSwitchedTheme = JSON.parse(switchedLocalTheme);
    bodyRef.classList.remove(parsedLocalTheme);
    bodyRef.classList.add(parsedSwitchedTheme);
  }
}

function populateTheme() {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', JSON.stringify(theme.LIGHT));
  }

  const actualTheme = localStorage.getItem('theme');
  // console.log(actualTheme);
  if (actualTheme === `"${theme.DARK}"`) {
    themeSwitchToggleRef.checked = true;
  }

  if (localStorage.getItem('theme') === `"${theme.DARK}"`) {
    const switchedLocalTheme = localStorage.getItem('theme');
    const parsedSwitchedTheme = JSON.parse(switchedLocalTheme);

    bodyRef.classList.add(parsedSwitchedTheme);
  }
}
