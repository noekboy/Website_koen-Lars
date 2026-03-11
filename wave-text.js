/* Wave text effect for "Plan een gesprek" / "Book a call" buttons */
(function () {
  function applyWave() {
    const btns = Array.from(document.querySelectorAll('a')).filter(a => {
      const nl = a.querySelector('.nl');
      return nl && nl.textContent.toLowerCase().includes('plan een gesprek');
    });

    btns.forEach(btn => {
      btn.classList.add('wave-btn');

      btn.querySelectorAll('.nl, .en').forEach(span => {
        const text = span.textContent;
        span.textContent = '';
        text.split('').forEach((char, i) => {
          const s = document.createElement('span');
          s.className = 'wave-char';
          s.style.setProperty('--i', i);
          // Preserve spaces as non-breaking so inline-block renders them
          s.textContent = char === ' ' ? '\u00a0' : char;
          span.appendChild(s);
        });
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyWave);
  } else {
    applyWave();
  }
})();
