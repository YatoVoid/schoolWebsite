let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if(e.className.includes(toggleClassName)) {
    e.className = e.className.replace(' ' + toggleClassName, '');
  } else {
    e.className += ' ' + toggleClassName;
  }
}

function movePage(e, page) {
  if (page == currentPage) {
    currentPage+=2;
    toggleClass(e, "left-side");
    toggleClass(e.nextElementSibling, "left-side");
    
  }
  else if (page = currentPage - 1) {
    currentPage-=2;
    toggleClass(e, "left-side");
    toggleClass(e.previousElementSibling, "left-side");
  }
  
}



$('.button').click(function(){
  var buttonId = $(this).attr('id');
  var modalContainerId = '#modal-container-' + buttonId;

  // Optional: remove any existing classes first
  $('#modal-container').removeAttr('class').addClass(buttonId);
  
  $(modalContainerId).removeClass('out');
  $('body').removeClass('modal-active');
  void $(modalContainerId)[0].offsetWidth;

  $(modalContainerId).addClass(buttonId);
  $('body').addClass('modal-active');
});


$(document).on('click', '.modal-container', function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});


$('.button').click(function(){
  var buttonId = $(this).attr('id');
  $('#modal-container').removeAttr('class').addClass(buttonId);
  $('body').addClass('modal-active');
})


function scrollToAbout() {
  var section = document.getElementById("book_start");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToAcademics() {
  var section = document.getElementById("academics_start");
  section.scrollIntoView({ behavior: "smooth" });
}

function scrollToContact() {
  var section = document.getElementById("contact_start");
  section.scrollIntoView({ behavior: "smooth" });
}