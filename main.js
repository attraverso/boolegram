$(document).ready(function() {/*DNT*/

/** SEARCH **/
$('.searchbar input').keyup(search);

/** SWITCH CHATS WHEN CLICKING ON A CONTACT **/
$('.contact').click(function() {
  /*get current contact data value*/
  var currentContact = $(this).data('contact');
  /*remove class active from all contacts*/
  $('.contact').removeClass('active');
  /*add class active to current contact*/
  $(this).addClass('active');
  /*remove class active from all chatspaces*/
  $('.chatspace').removeClass('active');
  /*add class active to current chatspace*/
  $('.chatspace[data-contact="' + currentContact + '"]').addClass('active');
  /*grab profile pic*/
  var profilePic = $(this).find('.contact-picture img').attr('src');
  /*send to compose area*/
  $('.compose-area-picture-incoming img').attr("src", profilePic);
  /*grab contact name*/
  var contactName = $(this).find('.contact-name').text();
  /*send to header right*/
  $('.chat-info-contact').text(contactName);
  /*update last seen in header right*/ /***CHANGE with time from last incoming msg***/
  var timestamp = getTime();
  $('.chat-info-last-seen-time').text(timestamp);
})

/** SHOW MESSAGE SELECT BADGE ON HOVER **/
$('section').on('mouseenter', '.message-content', function() {
  $(this).children('.message-select').show();
}).on('mouseleave', '.message-content', function() {
  $(this).children('.message-select').hide();
})

/** WHEN TYPEBOX HAS FOCUS, CHANGE BORDER **/
$('.typebox textarea').focus(function() {
  $(this).parent().addClass('active');
}).blur(function() {
  $(this).parent().removeClass('active');
})

/** SEND MESSAGE **/
$('.typebox textarea').keypress(function(event) {
  if (event.which == '13') {
    sendMessage();
  }
})

/* * FUNCTIONS * */

function getTime() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var currentMinutes = currentTime.getMinutes();
  if (currentHour < 10) {
    var currentHour = '0' + currentHour;
  }
  if (currentMinutes < 10) {
    var currentMinutes = '0' + currentMinutes;
  }
  var timeStamp = currentHour + ':' + currentMinutes;
  return timeStamp;
}

function search() {
  if ($('.searchbar input').val() != '') {
    /*grab user input*/
    var searchFor = $('.searchbar input').val().trim().toLowerCase();
    /*look through contacts for a match*/
    $('.contact').each(function() {
      var contactName = $(this).find('.contact-name').text().toLowerCase();
      /*if a contact's name includes the search, show it*/
      if(contactName.includes(searchFor)) {
        $(this).show();
      } else{
        $(this).hide();
      }
    })
  } else {
    $('.contact').show();
  }
}

function sendMessage() {
  /*grab text in textarea*/
  var userText = $('.typebox textarea').val().trim();
  /*if the last message in the chat is yours*/
  if ($('.chatspace.active .message-bundle').last().children('.message').hasClass('msg-own')) {
    console.log('the bundle is there');
    var newMessage = $('#template .message-content').clone();
    newMessage.children('span').text(userText);
    $('.chatspace.active .message-left').append(newMessage);
    /*if the last message in the chat is from the other person*/
  } else {
    console.log('no bundle found');
    var newBundle = $('#template .message-bundle').clone();
    newBundle.find('.message-content').children('span').text(userText);
    $('.chatspace.active .right-container').append(newBundle);
  }
}

}) /*DNT - closing document.ready*/
