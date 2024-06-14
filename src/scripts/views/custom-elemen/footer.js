/* eslint-disable linebreak-style */
// Function to populate the footer

function loadFooter() {
  const footer = document.getElementById('footer');

  const footerInner = document.createElement('div');
  footerInner.className = 'footer__inner';

  const footerMenu = document.createElement('ul');
  footerMenu.className = 'footer__menu';

  const footerItem = document.createElement('li');
  footerItem.className = 'footer__item';

  const footerLink = document.createElement('a');
  footerLink.href = 'https://www.linkedin.com/in/wildan-rachman-366564304';
  footerLink.textContent = 'LinkedIn';

  footerItem.appendChild(footerLink);
  footerMenu.appendChild(footerItem);
  footerInner.appendChild(footerMenu);

  const footerCopyright = document.createElement('p');
  footerCopyright.className = 'footer__copyright';
  footerCopyright.textContent = 'Copyright © 2024 - Saddam Restaurant Catalog App';

  footerInner.appendChild(footerCopyright);
  footer.appendChild(footerInner);
}

// Load the footer when the DOM content is loaded
document.addEventListener('DOMContentLoaded', loadFooter);
