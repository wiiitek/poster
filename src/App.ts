export function createA4Page(): HTMLDivElement {
  const page = document.createElement('div');
  
  page.style.width = '297mm';
  page.style.height = '210mm';
  page.style.backgroundColor = 'white';
  page.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  
  return page;
}
