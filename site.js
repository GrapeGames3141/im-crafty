document.querySelectorAll('#year').forEach(el => el.textContent = new Date().getFullYear());

// Click any gallery/feature image to view it full size.
const box = document.getElementById('lightbox');
if (box) {
  const img = box.querySelector('img'), cap = box.querySelector('p');
  document.querySelectorAll('.gallery img, .feature img').forEach(el => {
    el.tabIndex = 0;
    const open = () => {
      img.src = el.currentSrc || el.src; img.alt = el.alt;
      const fc = el.closest('figure')?.querySelector('figcaption');
      cap.textContent = fc ? fc.textContent : el.alt;
      box.showModal();
    };
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => { if (e.key === 'Enter') open(); });
  });
  box.addEventListener('click', e => { if (e.target !== img) box.close(); });
}
