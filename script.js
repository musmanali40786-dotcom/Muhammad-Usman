// ============================================================
// Muhammad Usman — Portfolio interactions
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---- mobile nav toggle ---- */
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  siteNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- footer revision year ---- */
  document.getElementById('rev-year').textContent = new Date().getFullYear();

  /* ---- gallery data ---- */
  const galleryItems = [
    { src: 'assets/images/steam-engine-01.jpg', title: 'Horizontal Steam Engine — Study I', tag: 'Mechanism Design' },
    { src: 'assets/images/steam-engine-02.jpg', title: 'Horizontal Steam Engine — Study II', tag: 'Mechanism Design' },
    { src: 'assets/images/beam-steam-engine.jpg', title: 'Beam (Balance) Steam Engine', tag: 'Mechanism Design' },
    { src: 'assets/images/heat-exchanger.jpg', title: 'Shell-and-Tube Heat Exchanger', tag: 'Process Equipment' },
    { src: 'assets/images/ball-valve.jpg', title: 'Flanged Ball Valve', tag: 'Process Equipment' },
    { src: 'assets/images/crane-hook.jpg', title: 'Forged Crane Hook', tag: 'Machine Element' },
    { src: 'assets/images/exhaust-pipe.jpg', title: 'Exhaust Manifold Pipe', tag: 'Piping Design' },
    { src: 'assets/images/extensometer-rig.jpg', title: 'Linear Motion Test Rig', tag: 'Precision Assembly' },
    { src: 'assets/images/robotic-cell.jpg', title: 'Robotic Pick-and-Place Cell', tag: 'Automation' },
    { src: 'assets/images/concept-coupe.jpg', title: 'Concept Sports Coupe', tag: 'Surface Modeling' },
    { src: 'assets/images/perforated-chair.jpg', title: 'Perforated Wood Chair', tag: 'Product Design' },
    { src: 'assets/images/lattice-basket.jpg', title: 'Lattice Wire Basket', tag: 'Generative Design' },
    { src: 'assets/images/grid-pallet.jpg', title: 'Perforated Grid Panel', tag: 'Product Design' },
    { src: 'assets/images/headset-concept.jpg', title: 'Wireless Headset Concept', tag: 'Product Design' },
  ];

  const grid = document.getElementById('gallery-grid');
  galleryItems.forEach((item, i) => {
    const fig = document.createElement('div');
    fig.className = 'gallery-item';
    fig.setAttribute('data-index', i);
    fig.innerHTML = `
      <img src="${item.src}" alt="${item.title}" loading="lazy">
      <div class="gallery-caption">${item.title}<br><span style="opacity:0.7">${item.tag}</span></div>
    `;
    grid.appendChild(fig);
  });

  // closing tile so the grid always fills evenly (3 columns)
  const remainder = galleryItems.length % 3;
  if (remainder !== 0) {
    const closer = document.createElement('a');
    closer.className = 'gallery-item gallery-closer';
    closer.href = 'mailto:musmanali40786@gmail.com';
    closer.innerHTML = `
      <span class="closer-dwg">DWG&nbsp;${String(galleryItems.length + 1).padStart(2,'0')}</span>
      <span class="closer-text">More studies<br>on request</span>
      <span class="closer-arrow">→</span>
    `;
    grid.appendChild(closer);
  }

  /* ---- lightbox ---- */
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');
  const lbClose = document.getElementById('lightbox-close');
  const lbPrev = document.getElementById('lightbox-prev');
  const lbNext = document.getElementById('lightbox-next');
  let currentIndex = 0;

  function openLightbox(index) {
    currentIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  function updateLightbox() {
    const item = galleryItems[currentIndex];
    lbImg.src = item.src;
    lbImg.alt = item.title;
    lbCaption.textContent = `${item.title} — ${item.tag}`;
  }
  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  function showNext() { currentIndex = (currentIndex + 1) % galleryItems.length; updateLightbox(); }
  function showPrev() { currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length; updateLightbox(); }

  grid.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (item) openLightbox(parseInt(item.getAttribute('data-index'), 10));
  });
  lbClose.addEventListener('click', closeLightbox);
  lbNext.addEventListener('click', showNext);
  lbPrev.addEventListener('click', showPrev);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });

});
