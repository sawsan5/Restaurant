let navbar=document.querySelector('.header .navbar');
let menubtn=document.querySelector('#menu-btn');


menubtn.onclick = () =>{
    menubtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    grabCursor:true,
    loop:true,
    centeredSliides:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".food-slider", {
    grabCursor:true,
    loop:true,
    centeredSliides:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  });

  let previewContainer=document.querySelector('.food-previrw-container');
  let previewBox=previewContainer.querySelectorAll('.food-previrw');

  document.querySelectorAll('.food .slide').forEach(food =>{
food.onclick = () =>{
  previewContainer.style.display='flex';
  let name=food.getAttribute('data-name');

  previewBox.forEach(preview =>{
let target=preview.getAttribute('data-target');
if(name == target){
  preview.classList.add('active');
}
 });

};
  });

  previewContainer.querySelector('#close-preivew').onclick = () =>{
    previewContainer.style.display='none';

    previewBox.forEach(close =>{
      close.classList.remove('active');
      
       });

  };

  var swiper = new Swiper(".menu-slider", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSliides:true,
    spaceBetween:20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });


  var swiper = new Swiper(".blogs-slider", {
    grabCursor:true,
    loop:true,
    autoHeight:true,
    centeredSliides:true,
    spaceBetween:20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
  });