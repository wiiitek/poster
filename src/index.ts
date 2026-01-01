import { createA4Page } from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
  const page = createA4Page();
  rootElement.appendChild(page);
}
