const tabButtons = Array.from(document.querySelectorAll('.tab-button'));
const tabPanels = Array.from(document.querySelectorAll('.tab-panel'));

function activateTab(tabId) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === tabId;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  tabPanels.forEach((panel) => {
    const isActive = panel.dataset.panel === tabId;
    panel.hidden = !isActive;

    if (isActive) {
      requestAnimationFrame(() => panel.classList.add('active'));
    } else {
      panel.classList.remove('active');
    }
  });
}

tabButtons.forEach((button, index) => {
  button.addEventListener('click', () => activateTab(button.dataset.tab));

  button.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') {
      return;
    }

    event.preventDefault();
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextIndex = (index + direction + tabButtons.length) % tabButtons.length;
    tabButtons[nextIndex].focus();
    activateTab(tabButtons[nextIndex].dataset.tab);
  });
});

activateTab('licenciatura');
document.getElementById('year').textContent = new Date().getFullYear();
