(() => {
  const themeToggle = document.getElementById('themeToggle');
  const year = document.getElementById('year');
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  if (year) year.textContent = new Date().getFullYear();

  themeToggle?.addEventListener('click', () => {
    const light = document.body.classList.toggle('light-theme');
    themeToggle.innerHTML = light
      ? '<i class="bi bi-moon-stars-fill" aria-hidden="true"></i>'
      : '<i class="bi bi-sun-fill" aria-hidden="true"></i>';
    themeToggle.setAttribute('aria-label', light ? 'Switch to dark theme' : 'Switch to light theme');
  });

  // The form opens the visitor's email app; no message is stored or sent by a server.
  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (!name || !email || !message) {
      if (formMsg) formMsg.textContent = 'Please complete all fields before continuing.';
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    if (formMsg) formMsg.textContent = 'Your email app should open with the message prepared. Review it and press Send there.';
    window.location.href = `mailto:priyanshukumardwivedi186@gmail.com?subject=${subject}&body=${body}`;
  });

  form?.addEventListener('reset', () => {
    if (formMsg) formMsg.textContent = '';
  });

  // Close the mobile menu after choosing a section.
  document.querySelectorAll('#mainNav .nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      if (nav?.classList.contains('show') && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });
})();
