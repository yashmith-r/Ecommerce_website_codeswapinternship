const currentimg = document.querySelector('.mainimg1');
const currentsmallimg = document.querySelectorAll('.mainimg');
const currentallproduct = document.querySelector('.allproducts');
const currentsproduct = document.querySelector('.sproduct')
const productimg = document.querySelector('.productimg');
const array = [
    {
      id:1,
      img:'f1.jpg'
    },
    {
      id:2,
      img:'f2.jpg'
    },
    {
      id:3,
      img:'f3.jpg'
    },
    {
      id:4,
      img:'f4.jpg'
    }
  ]

  const array2 = [
    {
      id:1,
      img:'n2.jpg'
    },
    {
      id:2,
      img:'n3.jpg'
    },
    {
      id:3,
      img:'n4.jpg'
    },
    {
      id:4,
      img:'n5.jpg'
    }
  ]

  currentsmallimg.forEach((item,index)=>{
  item.addEventListener('click',()=>{
    let choosenproducts = array[index];
    currentimg.src = choosenproducts.img;
  });
});
currentallproduct.addEventListener('click',()=>{
    // let choosenproducts = array[0];
    currentsproduct.style.display = 'flex';
    // currentimg.src = productimg.img;
});

const currentclose = document.querySelector('.close2');
currentclose.addEventListener('click', () => {
    currentsproduct.style.display = 'none';
  });

//for the summercollection discription

const currentsmallimg2 = document.querySelectorAll('.mainimg2');
const currentimg2 = document.querySelector('.mainimg1_2');

currentsmallimg2.forEach((item,index)=>{
    item.addEventListener('click',()=>{
      let choosenproducts2 = array2[index];
      currentimg2.src = choosenproducts2.img;
    });
  });

const currentallpro = document.querySelector('.allpro');
const currentsproduct2 = document.querySelector('.sproduct2')
  currentallpro.addEventListener('click',()=>{
    // let choosenproducts = array[0];
    currentsproduct2.style.display = 'flex';
    // currentimg.src = productimg.img;
});

const currentclose3 = document.querySelector('.close3');
currentclose3.addEventListener('click', () => {
    currentsproduct2.style.display = 'none';
  });