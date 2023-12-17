// mount Svelte app in shadow root to isolate css
import App from './App.svelte';

// create <div id="tempermonkey-app"></div>
function createContainerInDocument() {
  const container = document.createElement('div');
  container.id = 'tempermonkey-app';
  return container;
}

// create <div id="tempermonkey-app-shadow-container"></div>
function createContainerInShadowRoot() {
  const container = document.createElement('div');
  container.id = 'tempermonkey-app-shadow-container';
  return container;
}

// div#tempermonkey-app > #shadow-root > div#tempermonkey-app-shadow-container
function createDom() {
  const container = createContainerInDocument();
  const shadowRoot = container.attachShadow({ mode: 'closed' });
  const containerInShadow = createContainerInShadowRoot();

  shadowRoot.appendChild(containerInShadow);
  document.body.appendChild(container);
  return containerInShadow;
}

const appDom = createDom();
const app = new App({
  target: appDom,
});

export default app;
