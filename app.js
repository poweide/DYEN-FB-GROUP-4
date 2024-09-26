// ! DON'T TOUCH MY JS CODE WRITE YOURS UNDER IT
console.log('JS Linked!');

let showMoreBtn = document.querySelector('#showMore');
let showLessBtn = document.querySelector('#showLess');
let moreContent = document.querySelector('#moreContent');

showMoreBtn.addEventListener('click', () => {
  console.log('class list changed');
  showMoreBtn.classList.add('hidden');
  moreContent.classList.toggle('hidden');
});

showLessBtn.addEventListener('click', () => {
  showMoreBtn.classList.remove('hidden');
  moreContent.classList.toggle('hidden');
});
