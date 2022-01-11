'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnopenmodal = document.querySelectorAll('.show-modal');
const btnclosemodal = document.querySelector('.close-modal');
console.log(btnopenmodal);

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openmodal = function () {
  console.log('button clicked');
  modal.classList.remove('hidden'); //no dot as we're not selecting
  overlay.classList.remove('hidden');

  // modal.style.display = 'block';
};
for (let i = 0; i < btnopenmodal.length; i++)
  btnopenmodal[i].addEventListener('click', openmodal);

// function closemodal() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// }

btnclosemodal.addEventListener('click', closemodal);

overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (event) {
  console.log(event);

  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    closemodal();
});
