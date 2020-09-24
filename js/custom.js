
$(document).ready(function () {
    console.log("document is ready");
    // nav collapse
    $('[data-toggle="offcanvas"], #navToggle').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open');
        if ( $( '.offcanvas-collapse' ).hasClass( "open" ) ) {
            $( '.fa-bell' ).addClass('blue')
        } else (
            $( '.fa-bell' ).removeClass('blue')
        )
    })
});
// remove notification items
var totalList = document.getElementById('total');
var deleteBtn = document.getElementsByClassName('delete');
var allList = document.querySelectorAll(".navbar-nav li");
var removeNotify = function(e) {
	e.preventDefault();
  var notifyItem = $(e.delegateTarget).parent();
  var html = $('html');
  html.css('overflowX', 'hidden');
  notifyItem.addClass(notifyItem.data('animation-class'));
  notifyItem.bind('oanimationend animationend webkitAnimationEnd', function() {
  	notifyItem.remove();
  	html.removeAttr('style');
  }); 
};
$(function() {
  $('.delete').on('click', removeNotify);
});
// total li
$('.delete').on('click', function(ev) { 
  totalList.innerHTML = document.querySelectorAll(".navbar-nav li:not(:first-child)").length -1
});

window.onload = function () {
    console.log("window is loaded");
};