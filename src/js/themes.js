import { onDomLoadedAnimation } from './hero';
const bodyEl = document.querySelector('body');
const THEME_STATE = 'theme-state';

document.addEventListener('DOMContentLoaded', function () {
  const themeSwitcherBtn = document.querySelector('.theme-switcher-btn');
  const themeSwitcherMenu = document.querySelector('.theme-switcher-menu');
  const themeButtons = document.querySelectorAll('.theme-btn');

  themeSwitcherBtn.addEventListener('click', function () {
    if (themeSwitcherMenu.style.display === 'flex') {
      themeSwitcherMenu.style.display = 'none';
    } else {
      themeSwitcherMenu.style.display = 'flex';
    }
  });

  themeButtons.forEach(button => {
    button.addEventListener('click', function () {
      const theme = this.getAttribute('data-theme');
      document.body.className = theme;
      localStorage.setItem(THEME_STATE, JSON.stringify(theme));
      themeSwitcherMenu.style.display = 'none';
      onDomLoadedAnimation();
    });
  });
  document.addEventListener('click', function (event) {
    if (
      !themeSwitcherBtn.contains(event.target) &&
      !themeSwitcherMenu.contains(event.target)
    ) {
      themeSwitcherMenu.style.display = 'none';
    }
  });
});

window.addEventListener('scroll', function () {
  var scrollButton = document.querySelector('.top');
  if (window.scrollY > 1000) {
    scrollButton.style.display = 'flex';
  } else {
    scrollButton.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', checkStorageOnPageLoad);

function checkStorageOnPageLoad(e) {
  try {
    const theme = JSON.parse(localStorage.getItem(THEME_STATE));

    if (theme) {
      switch (theme) {
        case 'theme-blue':
          bodyEl.className = theme;
          break;
        case 'theme-green':
          bodyEl.className = theme;
          break;
        default:
          bodyEl.className = 'theme-red';
      }
    }
  } catch {
    return;
  }
}
