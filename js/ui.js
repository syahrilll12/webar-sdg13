// Simple interaction: raise sea level based on scenario buttons
const sea = document.getElementById('sea');
const buttons = document.querySelectorAll('.controls button');
const tipsEl = document.getElementById('tips');

// height positions (y) for sea plane relative to island top (~0.1)
const SEA_LEVELS = {
  0: 0.11, // baseline
  1: 0.18, // +1.5°C (approx scenario)
  2: 0.26  // +3°C
};

const TIPS = [
  'Hemat energi di rumah (matikan perangkat saat tidak digunakan).',
  'Gunakan transportasi publik/bersepeda untuk jarak dekat.',
  'Tanam pohon atau dukung rehabilitasi mangrove.'
];

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lvl = btn.dataset.level;
    const target = SEA_LEVELS[lvl];
    animateSeaTo(target);
  });
});

function animateSeaTo(targetY){
  // simple tween via setInterval
  const start = parseFloat(sea.getAttribute('position').y);
  const end = targetY;
  const dur = 600; // ms
  const steps = 30;
  const delta = (end - start) / steps;
  let i = 0;
  const timer = setInterval(() => {
    i++;
    sea.setAttribute('position', `0 ${ (start + delta*i).toFixed(3) } 0`);
    if(i>=steps) clearInterval(timer);
  }, dur/steps);
}

// populate tips
tipsEl.innerHTML = TIPS.map(t => `<li>${t}</li>`).join('');
