const navigationLinks = ['nav-work', 'nav-about'];

for (const link of navigationLinks) {
  document.getElementById(link).addEventListener('click', () => {
    document.getElementById('section-' + link.slice(4)).scrollIntoView(true);
  });
}
