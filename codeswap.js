// const a = document.querySelector('.sliderwrapper');
// const m = document.querySelectorAll('.menu');
// const productsarray = [
//   {
//     id:1,
//     title: "Air Force",
//     price: 119,
//     colors: [
//       {
//         code: "black",
//         img: "./img/air.png",
//       },
//       {
//         code: "darkblue",
//         img: "./img/air2.png",
//       },
//     ],
//   },
//   {
//     id:2,
//     title: "Air Jordan",
//     price: 139,
//     colors: [
//       {
//         code: "lightgray",
//         img: "./img/jordan.png",
//       },
//       {
//         code: "green",
//         img: "img/blazer2.png",
//       },
//     ],
//   },
//   {
//     id:3,
//     title: "Blazer",
//     price: 99,
//     colors: [
//       {
//         code: "lightgray",
//         img: "./img/blazer.png",
//       },
//       {
//         code: "green",
//         img: "./img/blazer2.png",
//       },
//     ],
//   },
//   {
//     id:4,
//     title: "Crater",
//     price: 159,
//     colors: [
//       {
//         code: "black",
//         img: "./img/crater.png",
//       },
//       {
//         code: "lightgray",
//         img: "./img/crater2.png",
//       },
//     ],
//   },
//   {
//     id:5,
//     title: "Hippie",
//     price: 99,
//     colors: [
//       {
//         code: "gray",
//         img: "./img/hippie.png",
//       },
//       {
//         code: "black",
//         img: "./img/hippie2.png",
//       },
//     ],
//   },
// ];

// let choosenproduct = productsarray[0];
// const currentproductimg = document.querySelector('.productimg');
// const currentproducttitle = document.querySelector('.producttitle');
// const currentproductprize = document.querySelector('.productprize');
// const currentproductcolor = document.querySelectorAll('.color');
// const currentproductSizes = document.querySelectorAll('.size');

// m.forEach((item, index) => {
//   item.addEventListener('click', () => {
//     a.style.transform = `translateX(${-100 * index}vw)`;

//     let choosenproduct = productsarray[index];

//     currentproducttitle.textContent = choosenproduct.title;
//     currentproductprize.textContent = '$' + choosenproduct.price;
//     currentproductimg.src = choosenproduct.colors[0].img;
 
//     currentproductcolor.forEach((color,index) => {
//       color.style.backgroundColor = choosenproduct.colors[index].code;
//     });
//   });
// });

//   currentproductcolor.forEach((color, index) => {
//     color.addEventListener('click', () => {
//       let choosenproduct = productsarray[index];
//       currentproductimg.src = choosenproduct.colors[index].img;
//     });
//   });


// currentproductSizes.forEach((size, index) => {
//   size.addEventListener('click', () => {
//     currentproductSizes.forEach((size, index) => {
//       size.style.backgroundColor = 'white';
//       size.style.color = 'black';
//     });
//     size.style.backgroundColor = 'black';
//     size.style.color = 'white';
//   });
// });

// const currentproductbutton = document.querySelector('.productbutton');
// const currentpayment = document.querySelector('.payment');
// const currentclose = document.querySelector('.close');

// currentproductbutton.addEventListener('click', () => {
//   currentpayment.style.display = 'flex';
// });

// currentclose.addEventListener('click', () => {
//   currentpayment.style.display = 'none';
// });

// const currentlogo = document.querySelector('.lineslogo');
// const currentlinesitemslist = document.querySelector('.linesitemslist')
// const currentclose2 = document.querySelector('.close2');
// currentlogo.addEventListener('click', ()=>{
//   currentlinesitemslist.style.display = 'flex';
// });
// currentclose2.addEventListener('click',()=>{
//   currentlinesitemslist.style.display = 'none';
// });
const a = document.querySelector('.sliderwrapper');
const m = document.querySelectorAll('.menu');
const productsarray = [
  {
    id:1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "air.png",
      },
      {
        code: "darkblue",
        img: "air2.png",
      },
    ],
  },
  {
    id:2,
    title: "Air Jordan",
    price: 139,
    colors: [
      {
        code: "lightgray",
        img: "jordan.png",
      },
      {
        code: "green",
        img: "blazer2.png",
      },
    ],
  },
  {
    id:3,
    title: "Blazer",
    price: 99,
    colors: [
      {
        code: "lightgray",
        img: "blazer.png",
      },
      {
        code: "green",
        img: "blazer2.png",
      },
    ],
  },
  {
    id:4,
    title: "Crater",
    price: 159,
    colors: [
      {
        code: "black",
        img: "crater.png",
      },
      {
        code: "lightgray",
        img: "crater2.png",
      },
    ],
  },
  {
    id:5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "hippie.png",
      },
      {
        code: "black",
        img: "hippie2.png",
      },
    ],
  },
];


let choosenproduct = productsarray[0];
const currentproductimg = document.querySelector(".productimg");
const currentproducttitle = document.querySelector('.producttitle');
const currentproductprize = document.querySelector('.productprize');
const currentproductcolor = document.querySelectorAll('.color');
const currentproductSizes = document.querySelectorAll('.size');

function updateProductDetails(index) {
  a.style.transform = `translateX(${-100 * index}vw)`;
  // console.log(index);
  choosenproduct = productsarray[index];

  currentproducttitle.textContent = choosenproduct.title;
  currentproductprize.textContent = '$' + choosenproduct.price;
  currentproductimg.src = choosenproduct.colors[0].img;

  currentproductcolor.forEach((color, index) => {
    color.style.backgroundColor = choosenproduct.colors[index].code;
    // color.removeEventListener('click', colorClickListener);
    color.addEventListener('click', colorClickListener);
  });
}

function colorClickListener(event) {
  const clickedColorIndex = Array.from(currentproductcolor).indexOf(event.target);
  currentproductimg.src = choosenproduct.colors[clickedColorIndex].img;
}

m.forEach((item, index) => {
  item.addEventListener('click', () => {
    updateProductDetails(index);
  });
});

currentproductSizes.forEach((size) => {
  size.addEventListener('click', () => {
    currentproductSizes.forEach((size) => { //Since it is a forEach it loops through all color, and chnage them to bgc=white color=black.
      size.style.backgroundColor = 'white';
      size.style.color = 'black';
    });
    size.style.backgroundColor = 'black';  //This will Execute when the user selected a particular button, since it is a click event.
    size.style.color = 'white';
  });
});

const currentproductbutton = document.querySelector('.productbutton');
const currentpayment = document.querySelector('.payment');
const currentclose = document.querySelector('.close');

currentproductbutton.addEventListener('click', () => {
  currentpayment.style.display = 'flex';
});

currentclose.addEventListener('click', () => {
  currentpayment.style.display = 'none';
});

const currentlogo = document.querySelector('.lineslogo');
const currentlinesitemslist = document.querySelector('.linesitemslist')
const currentclose2 = document.querySelector('.close2');
currentlogo.addEventListener('click', () => {
  currentlinesitemslist.style.display = 'flex';
});
currentclose2.addEventListener('click', () => {
  currentlinesitemslist.style.display = 'none';
});
updateProductDetails(0);