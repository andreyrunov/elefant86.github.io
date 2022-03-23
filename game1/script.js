
function randomInt() {
  let min = 0;
  let max = 8;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  console.log(rand);
  return rand;
}

let doc = document;
let butterflyList = document.querySelectorAll('.butterfly');
console.log(butterflyList);
butterflyList[randomInt()].style.cssText = `
  display: inherit;
`;
console.log(butterflyList);
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
      target.style.cssText = `
      display: none;
      `;
      count++;
      for (let i = 0; i < net.length; i++) {
        net[i].style.cssText = `
          display: none;
          `;
      }
      /* net.style.cssText = `
      display: none;
      `; */
      net[i].style.cssText = `
      display: inherit;
      `;
      p.innerText = `Поймано бабочек: ${count}`;
    }
  }
  

  setTimeout(function(){
  butterflyList[randomInt()].style.cssText = `
  display: inherit;
  `; 
  },2000); 
  
})


