import App from './App.svelte';
import tailwindBase from './assets/tailwind.css';
// 创建顶层 document 环境的 dom 节点
function createContainerInDocument() {
  const container = document.createElement('div');
  container.id = 'tempermonkey-app';
  return container;
}
// 创建 shadowRoot 环境下的 container 节点（用于挂在 Vue 示例）
function containerInShadowRoot() {
  const container = document.createElement('div');
  container.id = 'tempermonkey-app-shadow-container';
  return container;
}
function createDom() {
  const container = createContainerInDocument();
  const shadowRoot = container.attachShadow({ mode: 'closed' });
  const containerInShadow = containerInShadowRoot();
  shadowRoot.appendChild(containerInShadow);
  document.body.appendChild(container);
  return containerInShadow;
}
function copyCssFromMainDocument(container) {
  // [...document.querySelectorAll('style')].map((i)=>i.cloneNode(true)).forEach((i)=>container.appendChild(i));
  // [...document.querySelectorAll('link')].map(i=>i.cloneNode(true)).forEach(i=>container.appendChild(i));
  const styleDom = document.createElement('style');
  styleDom.innerText = tailwindBase;
  container.appendChild(styleDom);
}
const appDom = createDom();
copyCssFromMainDocument(appDom);
const app = new App({
  target: appDom,
});

export default app;
