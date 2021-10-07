//srolUp
$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});

//filter speaker
$('#openFilter').on('click', function(){
  $('#filter-speaker').show();
  $('#openFilter').hide();
  $('#closeFilter').show();
});
$('#closeFilter').on('click', function(){
  $('#filter-speaker').hide();
  $('#openFilter').show();
  $('#closeFilter').hide();
});

//dasboard filter
$(document).ready(function(){
  $('a#filter-a').click(function(){
    //hide all works by default 
     $(".view").addClass('filter-hide');
     //show slected works based on the menu clicked
     $(".view[data-filter='"+$(this).attr('data-filter')+"']").removeClass("filter-hide");
     //remove selected class to the link      
     $('a#filter-a').removeClass('selected');
     //add selected class to the active link
     $(this).addClass('selected');
     return false;
    });
    //show all works for "all" menu
    $('a[data-filter="*"]').click(function(event) {    
      $(".view").removeClass('filter-hide');
      return false;
    });
});

// nav header mobile
// define all UI variable
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


//banner header
var sTimerLength = 1000;
var sTimer = sTimerLength;
var slideCount, slideWidth, sliderUlWidth;
jQuery(document).ready(function($)
{
  slideCount = $('#slider ul > a').length;
  slideWidth = $('#slider').width();
  sliderUlWidth = slideCount * slideWidth;
  $('#slider ul > a').css({ width: slideWidth });
  $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
  $('#slider ul > a:last-child').prependTo('#slider ul');
  
  function moveLeft()
  {
    $('#slider ul').animate(
      {
   left: + slideWidth
  }, 400,
  function()
  { //bring the last li to the beginning of the ul
   $('#slider ul > a:last-child').prependTo('#slider ul');
   //reset the ul's 'left' property as empty string 
   $('#slider ul').css('left', '');
  });
  sTimer = sTimerLength;
 };
 
 function moveRight()
 {
   $('#slider ul').animate(
     {
   left: - slideWidth
  }, 400,
  function()
  { //bring the first li to the end of the ul
    $('#slider ul > a:first-child').appendTo('#slider ul');
    //reset the ul's 'left' property as empty string
    $('#slider ul').css('left', '');
  });
  sTimer = sTimerLength;
};

/*============button controls========*/
$('.prev').click(function()
{
  moveLeft();
});
$('.next').click(function()
{
  moveRight();
});
setInterval(function()
{
  if( --sTimer == 0 )
  {
    moveRight();
  }
}, 1 );
});
$(window).resize(function()
{
  slideCount = $('#slider ul > a').length;
 slideWidth = $('#slider').width();
 sliderUlWidth = slideCount * slideWidth;
 $('#slider ul > a').css({ width: slideWidth });
 $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
});

//client//
$('.carousel-client').bxSlider({
  auto: true,
  slideWidth: 234,
  minSlides: 2,
  maxSlides: 5,
  controls: false,
});

$('#search').click(function() {
  $('.search-popup').show();
  $('.search-bg').click(function() {
    $('.search-popup').hide();
  });
});

//popular topic//
const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

function handleScrollNext (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft += window.innerWidth / 3 
}

function handleScrollPrev (direction) {
  const cards = document.querySelector('.card-content')
  cards.scrollLeft=cards.scrollLeft -= window.innerWidth / 3
}

next.addEventListener('click', handleScrollNext)
prev.addEventListener('click', handleScrollPrev)

///feature-image//
function changeImage() {
  $('#features-image').fadeOut(function() {
    image = $(this).find('.show-image')
    imageNext = image.next()
    
    if(imageNext.length == 0) imageNext = $(this).find('img:nth-child(1)')
    
    image.removeClass('show-image').addClass('hide-image')
    imageNext.removeClass('hide-image').addClass('show-image')
    $(this).fadeIn()
  })
}

setInterval(changeImage, 2000)

//scroll efect//
$('.page-scroll').on('click', function(e){
  
  var tujuan = $(this).attr('href');
  var elemenTujuan = $(tujuan);
  
  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top - 30
  }, 800);
  
  e.preventDefault();
  
});
