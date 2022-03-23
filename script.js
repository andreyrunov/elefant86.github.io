let doc = document;
let final = document.querySelector('.div__final');
let flag = document.querySelector('.win');
let climberImg = document.querySelector('.climber');

let btnZ = document.querySelector('.btnZ');
let btnX = document.querySelector('.btnX');

const showFlag = () => {
  if (final.hasChildNodes()) { 
    console.log(true);
    flag.style.visibility = 'visible';
  } else {
    flag.style.visibility = 'hidden';
  }
}


let parent;
let sibling;

doc.addEventListener('keydown', (event) => {
  if (event.code === "KeyX" || event.code === 'ArrowUp' || event.code === 'ArrowRight') { 
    parent = climberImg.parentElement;
    sibling = parent.nextElementSibling;
    sibling.appendChild(climberImg);
    btnX.style.backgroundColor = 'grey';
    setTimeout(function(){
      btnX.style.backgroundColor = 'white'; 
    },150);

  } else if (event.code === "KeyZ" || event.code === 'ArrowDown' || event.code === 'ArrowLeft') {
    parent = climberImg.parentElement;
    sibling = parent.previousElementSibling;
    sibling.appendChild(climberImg);
    btnZ.style.backgroundColor = 'grey'; 
    setTimeout(function(){
      btnZ.style.backgroundColor = 'white'; 
    },150);
  }
  showFlag();
});

btnZ.addEventListener('click', (event) => {
  event.preventDefault();
  parent = climberImg.parentElement;
  sibling = parent.previousElementSibling;
  sibling.appendChild(climberImg);
  btnZ.style.backgroundColor = 'grey';
  setTimeout(function(){
    btnZ.style.backgroundColor = 'white'; 
  },150);

  showFlag();
});

btnX.addEventListener('click', (event) => {
  event.preventDefault();
  console.log(event.target);
  parent = climberImg.parentElement;
  sibling = parent.nextElementSibling;
  sibling.appendChild(climberImg);
  btnX.style.backgroundColor = 'grey';
  setTimeout(function(){
    btnX.style.backgroundColor = 'white'; 
  },150);

  showFlag();
});

