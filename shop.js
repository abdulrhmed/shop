///------onclick dwon
let downone =document.getElementById('downone')
let downtwo =document.getElementById('downtwo')
let downthree =document.getElementById('downthree')
let ulone =document.querySelector('.ulone')
let ultwo =document.querySelector('.ultwo')
let ulthree =document.querySelector('.ulthree')



let closemood = false;
downone.addEventListener('click',()=>{
    if(!closemood){
        ulone.style.display='flex'
    }else{
        ulone.style.display='none'
    }
    closemood = !closemood;
})

let closemoodtwo = false;
downtwo.addEventListener('click',()=>{
    if(!closemoodtwo){
        ultwo.style.display='flex'
    }else{
        ultwo.style.display='none'
    }
    closemoodtwo = !closemoodtwo;
})

let closemoodthree = false;
downthree.addEventListener('click',()=>{
    if(!closemoodthree){
        ulthree.style.display='flex'
    }else{
        ulthree.style.display='none'
    }
    closemoodthree = !closemoodthree;
})


//------------active nambur--------
const numbers = document.querySelectorAll('.num');

numbers.forEach((number, index) => {
  number.addEventListener('click', () => {
    
    document.querySelector('.activenum').classList.remove('activenum');

    number.classList.add('activenum');
  });
});


///------------
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseover', () => {
    const overlay = card.querySelector('.overlay');
    overlay.style.display = 'flex';
  });

  card.addEventListener('mouseout', () => {
    const overlay = card.querySelector('.overlay');
    overlay.style.display = 'none';
  });
});