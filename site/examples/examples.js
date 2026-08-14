const syncStageState = (stage) => {
  const isBefore = stage.dataset.state === 'before';
  stage.querySelector('.generic-before')?.setAttribute('aria-hidden', String(!isBefore));
  [...stage.children].filter((child) => !child.classList.contains('generic-before')).forEach((child) => {
    child.setAttribute('aria-hidden', String(isBefore));
  });
};

const viewLabel = (view) => view === 'after' ? 'with Gridgeist' : 'without skill';

const setCaseView = (name, view) => {
  const stage = document.querySelector(`[data-case-stage="${name}"]`);
  if (!stage) return;

  stage.dataset.state = view;
  syncStageState(stage);
  document.querySelectorAll(`[data-case="${name}"]`).forEach((candidate) => {
    candidate.setAttribute('aria-pressed', String(candidate.dataset.view === view));
  });

  const status = document.querySelector(`[data-case-status="${name}"]`);
  if (status) status.textContent = `Viewing: ${viewLabel(view)}`;
};

const syncGalleryControls = () => {
  const states = [...document.querySelectorAll('[data-case-stage]')].map((stage) => stage.dataset.state);
  document.querySelectorAll('[data-gallery-view]').forEach((button) => {
    button.setAttribute('aria-pressed', String(states.every((state) => state === button.dataset.galleryView)));
  });
};

const requestedView = new URLSearchParams(window.location.search).get('view');
const initialView = requestedView === 'after' ? 'after' : 'before';

document.querySelectorAll('[data-case-stage]').forEach((stage) => {
  setCaseView(stage.dataset.caseStage, initialView);
});
syncGalleryControls();

document.querySelectorAll('.case-controls button').forEach((button) => {
  button.addEventListener('click', () => {
    setCaseView(button.dataset.case, button.dataset.view);
    syncGalleryControls();
  });
});

document.querySelectorAll('[data-gallery-view]').forEach((button) => {
  button.addEventListener('click', () => {
    const view = button.dataset.galleryView;
    document.querySelectorAll('[data-case-stage]').forEach((stage) => {
      setCaseView(stage.dataset.caseStage, view);
    });
    syncGalleryControls();

    const url = new URL(window.location.href);
    if (view === 'after') url.searchParams.set('view', 'after');
    else url.searchParams.delete('view');
    window.history.replaceState({}, '', url);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
