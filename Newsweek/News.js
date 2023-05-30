

let pre_loder = document.getElementById('pre_loder');
let loder = document.getElementById('loder');
let id = setTimeout(anim, 2000);

function anim() {
  document.getElementById('body').style.display = "block";
  loder.style.display = "none";
  pre_loder.style.display = "none";
};

let spans = document.getElementsByTagName('span')

window.onload = function () {

  for (spans of spans) {
    spans.classList.add('active');
  };
};

//  let modale = document.getElementById('modal'); Loder End


let mobile_icon_X = document.getElementById('mobile_icon_X');

mobile_icon_X.addEventListener('click', function () {
  document.getElementById('width').style.width = "300px";
})

let modal_box = document.querySelector('.modal_box');

modal_box.addEventListener('click', function (e) {
  if (e.target !== this) return;
  console.log(this)
  document.getElementById('show').style.display = "none";
})

function dicpla() {
  document.getElementById('show').style.display = "block";
};

let email = document.getElementById('email_btn');
email.addEventListener('click', function () {

  let email_input = document.getElementById('email').value;
  let domo_input = document.getElementById('domo_input');
  if (email_input == "") {
    domo_input.style.display = "block";
  }
  else {
    domo_input.style.display = "none";
  }
  let Email = document.getElementById('email');
  Email.addEventListener('click', function () {
    domo_input.style.display = "none";
    email_earr.style.display = "none";
  });
});
///////////////////// search search start  /////////////////////////////
const images = document.getElementById('images');
const search = document.getElementById('search');
search.addEventListener('click', () => {
  search.style.width = 'calc(95vw - 60px)';
});
images.addEventListener('click', () => {
  search.style.width = '67px';
});

// ///////////////// search search End    //////////////////////////////
const emailvalidat = document.getElementById('email');
const email_earr = document.getElementById('email_earr');
let domo_input = document.getElementById('domo_input');
emailvalidat.addEventListener('blur', () => {

  const str = emailvalidat.value;
  const numrer = /(([\+]+[0-9]{2,3})?([03]{2,2}[0-9]{9,9}))/;
  const regex =
    /(^[_a-zA-Z]{3,14}[0-9]{0,4})([a-z]{0,4}?)[\@][A-Za-z]{2,5}\.[a-zA-Z]{2,6}$/;

  if (regex.test(str) || numrer.test(str)) {

    email_earr.style.display = "none";
  }
  else {
    email_earr.style.display = "block";
  }
});
// ///////// Mobile navigation bar sticky //////////// 
window.addEventListener('scroll',
  function () {
    let nav = document.getElementById('nave');
    let date = document.getElementById('date');
    let logo = document.getElementById('logo');
    let brand_svg = document.getElementById('brand');
    let mobile_icon_X = document.getElementById('mobile_icon_X');
    let nave_link_item = document.getElementById('nave_link_item');
    //  let nave_link_item2 = document.getElementById('nave_link_item2');
    if (window.pageYOffset > 50) {
      nav.classList.add('top_nav');
      logo.classList.add('top_logo');
    }
    if (window.pageYOffset > 130) {
      nav.classList.remove('top_nav');
      nav.classList.add('nave_wi');
      nave_link_item.classList.add('display_none');
      nav.classList.add('nave_wite');
      nav.classList.remove('nave_hader_logo');
      logo.classList.add('news_w');
      brand_svg.classList.add('top_log');
      date.classList.add('date_date');
      logo.classList.remove('header_nave_logo');
      brand_svg.classList.add('svg');
      mobile_icon_X.classList.add('mobileicon_X');
      mobile_icon_X.classList.add('mobile_icon');
      mobile_icon_X.classList.remove('mobile_icon_X');
    }
    else {
      nave_link_item.classList.remove('display_none');
      logo.classList.remove('news_w');
      nav.classList.remove('nave_wite');
      nav.classList.add('nave_hader_logo');
      logo.classList.add('header_nave_logo');
      date.classList.remove('date_date');
      brand_svg.classList.remove('svg');
      mobile_icon_X.classList.add('mobile_icon_X');
      mobile_icon_X.classList.remove('mobileicon_X');
      mobile_icon_X.classList.remove('mobile_icon');
      nav.classList.remove('top_nav');
      nav.classList.remove('nave_wi');
      nave_link_item.classList.remove('nave_link_item_side_5')
      nave_link_item.classList.add('nave_link_item');
      search_s.classList.remove('search_5');
    }
  });
// /////////////////////// nave_link_item on click event //////
let ul_link_item = document.write('ul_link_item');
let search_s = document.getElementById('search_5');

let none = 0;
mobile_icon_X.addEventListener('click', () => {

  if (none == 0) {
    nave_link_item.classList.add('nave_link_item_right');
    nave_link_item.classList.add('nave_link_item_side_5')
    nave_link_item.classList.remove('display_none');
    nave_link_item.classList.remove('nave_link_item');
    search_s.classList.add('search_5');
    return none = 1;
  }
  else {
    nave_link_item.classList.remove('nave_link_item_right');
    nave_link_item.classList.remove('display_none');
    return none = 0;
  }

});

function myFunction(x) {
  x.classList.toggle("change");
}

