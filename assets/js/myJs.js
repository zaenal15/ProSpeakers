//calender
$(document).ready(function() {
  parent = $('#calendar-box')
  date = new Date()
  createCalendar(parent, date)
  $('#myCalendar tbody tr td button').prop('disabled', true)
})

const monthNamesFull      = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthNames          = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayNamesFull        = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayNames            = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function createCalendar(parent, fullDateCalendar) {
  if(fullDateCalendar) fullDateCalendar = fullDateCalendar
  else fullDateCalendar = new Date()
  periode = padTwo((fullDateCalendar.getMonth()+1))+"-"+fullDateCalendar.getFullYear()
  numberOfDays = new Date(fullDateCalendar.getFullYear(), fullDateCalendar.getMonth()+1, 0).getDate()
  $('#headerMonth span').remove();
  $('#headerMonth').append('<span class="back"><i class="icofont-rounded-left"></i></span>')
  $('#headerMonth').append('<span id="monthYearCal" class="monthYearCal" value="'+ monthNamesFull[fullDateCalendar.getMonth()]+" "+fullDateCalendar.getFullYear()+'">'+ monthNamesFull[fullDateCalendar.getMonth()]+" "+fullDateCalendar.getFullYear()+'</span>')
  $('#headerMonth').append('<span class="next"><i class="icofont-rounded-right"></i></span>')
  $('#headerMonth .back').on('click', function() {
    var newDate = fullDateCalendar
    newDate.setMonth(newDate.getMonth() - 1)
    createCalendar(parent, newDate)
  })
  $('#headerMonth .next').on('click', function() {
    var newDate = fullDateCalendar
    newDate.setMonth(newDate.getMonth() + 1)
    createCalendar(parent, newDate)
  })
  parent.empty().append('<table id="myCalendar"><thead></thead><tbody></tbody></table>')
  tableCalendar = parent.find('#myCalendar')
  tableCalendar.find('thead').append('<tr></tr>')
  for (let x = 0; x < dayNames.length; x++) {
    tableCalendar.find('thead tr:last').append('<td align="center">'+dayNames[x]+'</td>')
  }
  i = 1
  for (let x = 1; x <= numberOfDays; x++) {
    dt = new Date(fullDateCalendar.getFullYear()+", "+padTwo((fullDateCalendar.getMonth()+1))+", "+x)
    if(i > 7) i = 1
    if(i++ == 1) {tableCalendar.find('tbody').append('<tr></tr>')}
    if(dt.getDay() == 0 || dt.getDay() == 6) textColor = 'color:red'; else textColor = 'color:#000';
    if(x == 1){
      for (let y = 0; y < dayNames.length; y++) {
        if(dt.getDay() == y) {tableCalendar.find('tbody tr:last').append('<td align="center"><input type="hidden" id="agendaDate'+x+'"><input type="hidden" id="noteDate'+x+'"><button value="'+x+'" id="date'+x+'" class="button button-sm" style="'+textColor+'">'+x+'</button></td>'); break;}
        else{
          tableCalendar.find('tbody tr:last').append('<td></td>')
          i++
        }  
      }
    }
    else tableCalendar.find('tr:last').append('<td align="center"><input type="hidden" id="agendaDate'+x+'"><input type="hidden" id="noteDate'+x+'"><button value="'+x+'" id="date'+x+'" class="button button-sm" style="'+textColor+'">'+x+'</button></td>')
    // tableCalendar.find('#date'+x).attr("onclick", "fillAgenda(this, \""+x+"\")")
    if(x == fullDateCalendar.getDate() && fullDateCalendar.getMonth() == new Date().getMonth() && fullDateCalendar.getFullYear() == new Date().getFullYear()) tableCalendar.find('button:last')
  }

  $('#dateStart').on('click', function () {
    $('#myCalendar tbody tr td button').prop('disabled', false);
    $('.row-calender #calendar-box table td').css('color','black');
    $('#myCalendar tbody tr td button');
    $('#headerMonth').css('color','black');
    if($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('#dateFinish').addClass('active')
    }else{
      $(this).addClass('active')
      $('#dateFinish').removeClass('active')
    }
  });

  $('#dateFinish').on('click', function () {
    $('#myCalendar tbody tr td button').prop('disabled', false)
    if($(this).hasClass('active')) {
      $(this).removeClass('active')
      $('#dateStart').addClass('active')
    }else{
      $(this).addClass('active')
      $('#dateStart').removeClass('active')
    }
  });

  $('#nama-acara').on('click', function(){
    $('#myCalendar tbody tr td button').removeClass('selected-date')
    $('#dateStart').removeClass('active')
    $('#dateFinish').removeClass('active')
  });
  

  $('#myCalendar tbody tr td button').on('click', function() {
    var valDate = $(this).val();
    getMonthYear = padTwo((fullDateCalendar.getMonth()+1))+"/"+fullDateCalendar.getFullYear()
    $('#myCalendar button').removeClass('selected-date')
    $(this).toggleClass('selected-date')
    $('.date-calender .active input').val(valDate+"/"+getMonthYear)
  });
  
}


$(document).ready(function(){
  $('#closeButton').click(function(){
    $('#modal-kalender').hide();
  })

  $('#nextButton').click(function(){
    var getStartDate = $('#dt-start').val();
    var getFinishDate = $('#dt-finish').val();
    var getSpeakers = $('#nameSpeakers').val();
    var getTitleEvent = $('#titleEvent').val();
    var getDescEvent = $('#descEvent').val();
    var timeStart = $('#timeStart').val();
    var timeFinish = $('#timeFinish').val();
    if(getStartDate == '' || getFinishDate == '' || getSpeakers == '' || getTitleEvent == '' || getDescEvent == '' || timeFinish == '' || timeStart == ''){
      swal("PERINGATAN", "Lengkapi pengisian form sebelum lanjut", "warning");
    }else{
      $('#dateResult').find('p').empty().append('<p style="color: #0077B5;">'+getStartDate+' - '+getFinishDate+'</p>');
      $('#timeResult').find('p').empty().append('<p style="color: #0077B5;">'+timeStart+' - '+timeFinish+'</p>');
      $('#speakersResult').find('p').empty().append('<p style="color: #0077B5;">'+getSpeakers+'</p>');
      $('#eventResult').find('p').empty().append('<p style="color: #0077B5;">'+getTitleEvent+'</p>');
      $('#descResult').find('p').empty().append('<p style="color: #0077B5;">'+getDescEvent+'</p>');
      $('#card-modal-content1').hide();
      $('#card-modal-content2').show();
      $('#opsi-eo-show').hide();
    }
  })

  $('#backButton').click(function(){
    $('#card-modal-content1').show();
    $('#card-modal-content2').hide();
  })

  $('#content-show-eo').click(function(){
    if($('#opsi-eo-show').is(":checked")) {
      $('#opsi-eo-show').show();
    }
    else if($('#opsi-eo-show').is(":not(:checked)")) {
      $('#opsi-eo-show').hide();
    }
  });
})

function padTwo(n) {
  if(n.toString().length == 1) n = ("0" + n)
  return n
}
var btn = document.getElementById("calendar-box");

function openModal(el) {
  $('#modal-kalender').show();
  var card = $(el).closest('.card-profile');
  // alert(card.find('.speaker-profile h3').html())
  $('#modal-kalender').find('#speakers-booking input').remove();
  $('#modal-kalender').find('#speakers-booking').append('<input id="nameSpeakers" style="color:#000" value="'+card.find('.speaker-profile h3').html()+'" class="form" type="text" placeholder="Speakers" disabled>');
  
  $('.row-calender #calendar-box table td').css('color','grey');
  $('#myCalendar tbody tr td button').css('color','grey');
  $('#headerMonth').css('color','grey');
}

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

//edit profil
$('.edit-profil').click(function(){
  $('#show-edit-profil').show();
  $('#row-profile-speaker').hide();
});
$('#cancel-edit-profil').click(function(){
  $('#show-edit-profil').hide();
  $('#row-profile-speaker').show();
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

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      $('#imagePreview').css('background-image', 'url('+e.target.result +')');
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#imageUpload").change(function() {
    readURL(this);
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

//search
$('#search').click(function() {
  $('.search-popup').show();
  $('.search-bg').click(function() {
    $('.search-popup').hide();
  });
});


$(document).ready(function(){
  $('#edit-profil-form').hide()
  $('.booking-menu').click(function(){
    $('#modal-kalender').show()
  })
});

//kalender

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

