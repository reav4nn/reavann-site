// Non-invasive client-side deterrents (no impact on animations/layout)
document.addEventListener('contextmenu', e => e.preventDefault(), { passive: false });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('img').forEach(img => {
    img.setAttribute('draggable', 'false');
    img.addEventListener('dragstart', e => e.preventDefault());
  });
});
