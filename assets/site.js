(() => {
  const links = Array.from(document.querySelectorAll('.navigation a'));
  const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const setCurrent = id => {
    for (const link of links) {
      if (link.hash === '#' + id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  };

  let scheduled = false;
  const update = () => {
    scheduled = false;
    const readingLine = Math.min(200, window.innerHeight * .3);
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= readingLine) current = section;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    if (current) setCurrent(current.id);
  };
  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };
  window.addEventListener('scroll', scheduleUpdate, { passive: true });
  window.addEventListener('resize', scheduleUpdate);
  update();
})();
