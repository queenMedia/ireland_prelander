function replaceTextInElement(elementId, searchText, replaceText) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = element.innerHTML.replace(new RegExp(searchText, 'g'), replaceText);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  replaceTextInElement('currency', '{{CURRENCY}}', 'EUR');
});
