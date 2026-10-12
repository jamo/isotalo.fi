const steps = [
  ['START WITH THE REAL PROBLEM', 'Get clear on who it’s for, what matters, and what we can leave out. Pick a small, useful first step.'],
  ['SHORT LOOPS. REAL PROGRESS.', 'Build in small increments. Use AI where it helps, review what it produces, and put working software in front of the people who will use it.'],
  ['PRODUCTION IS THE STARTING LINE', 'Test the important paths, deploy with care, and make the system observable. Leave your team with code and context they can own.']
];
document.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-step]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    const [label, text] = steps[Number(button.dataset.step)];
    document.getElementById('method-label').textContent = label;
    document.getElementById('method-text').textContent = text;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
