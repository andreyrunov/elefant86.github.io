let previousRand = 0;
function randomInt() {
  let min = 0;
  let max = 8;
  console.log(previousRand);
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
  
  if (previousRand !== rand) {
/*     console.log('Тут все норм!');
    console.log(`Предыдущий рандом: ${previousRand}`);
    console.log(`Новый рандом: ${rand}`); */
    previousRand = rand;
    return rand;
  } else if (previousRand === rand && rand <= 8 && rand >= 2) {
/*     console.log('Тут делаем -1');
    console.log(`Предыдущий рандом: ${previousRand}`);
    console.log(`Новый рандом: ${rand}`); */
    previousRand = rand - 1;
    return rand - 1;
  } else if (previousRand === rand && rand === 1 || rand === 0) {
/*     console.log('Тут делаем +2');
    console.log(`Предыдущий рандом: ${previousRand}`);
    console.log(`Новый рандом: ${rand}`); */
    previousRand = rand + 2;
    return rand + 2;
  }
}

let doc = document;
let butterflyList = document.querySelectorAll('.butterfly');
console.log(butterflyList);
butterflyList[randomInt()].style.cssText = `
  display: inherit;
`;

let net = document.querySelectorAll('.net');
console.log(net);
let p = document.getElementsByTagName("p")[0];
let target;
let count = 0;
doc.addEventListener('click', (event) => {
   console.log(event.target);
  for (let i = 0; i < butterflyList.length; i++) {
    if (event.target === butterflyList[i]) {
      target = event.target;
      console.log(target);
      target.style.cssText = `
      display: none;
      `;
      count++;
      for (let i = 0; i < net.length; i++) {
        net[i].style.cssText = `
          display: none;
          `;
      }
      net[i].style.cssText = `
      display: inherit;
      `;
      p.innerText = `Поймано бабочек: ${count}`;

      setTimeout(function(){
      butterflyList[randomInt()].style.cssText = `
      display: inherit;
      `; 
      },2000); 
    }
  }  
})


