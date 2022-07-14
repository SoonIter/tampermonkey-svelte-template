import App from './App.svelte';
// import 'uno.css';

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

const appDom = createDom();
const app = new App({
  target: appDom,
});

export default app;
