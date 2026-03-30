'use strict';

const tree = document.querySelector('.tree');
const lis = tree.querySelectorAll('li');

for (const li of lis) {
  const textNode = li.firstChild;
  const span = document.createElement('span');

  span.append(textNode);
  li.prepend(span);
}

tree.addEventListener('click', function (e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const closestLi = e.target.closest('li');
  const uls = closestLi.querySelector('ul');

  if (!uls) {
    return;
  }

  uls.hidden = !uls.hidden;
});
