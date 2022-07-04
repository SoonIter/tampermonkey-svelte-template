import App from './App.svelte';

const appDom = document.createElement('div');
appDom.id = 'appID';
document.body.appendChild(appDom);
const app = new App({
  target: document.getElementById('appID'),
});
console.log('hello');
export default app;
