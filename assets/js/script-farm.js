  
function popup()
{

    var str=''
    str+='<div id="my-modal">';
    str+='<div class="popup-content-out">';
    str+='<div class="pop_header">';
    str+='<h2>Food Security</h2>';
    str+='</div>';
    str+='<div class="pop-img">';
    str+='<img src="images/CCF-pop-up-image.png">';
    str+='</div>';
    str+='<div class="pop-content">';

    str+='<div class="home-tab">';
    str+='<h3><img src="images/secure-icn.png" title="secure donation" alt="donations">Secure Donation</h3>';
    str+='<div class="home-tab-list">';
    str+='<ul>';
    str+='<li class="noticies active"><a href="javascript:void(0);">Give Once</a></li>';
    str+='<li class="agenda"><a href="javascript:void(0);">Monthly</a></li>';
    str+='</ul>';
    str+='</div>';
    str+='<div class="home-content">';
    str+='<div class="home-content-noticies home-tab-cnt show">';
    str+='<div class="home-news-lst">';
    str+='<ul>';
    str+='<li class="choose_val"><a href="javascript:void(0);" class="choose-btn">';
    str+='<h2>$10</h2>';
    str+='<p>Yes, I Want to help</p><span>USD</span>';
    str+='</a><input type="hidden" name="donate_val" class="donate_val" value="10"></li>';
    str+='<li class="choose_val"><a href="javascript:void(0);" class="choose-btn">';
    str+='<h2>$20</h2>';
    str+='<p>I can help more</p><span>USD</span>';
    str+='</a><input type="hidden" name="donate_val" class="donate_val" value="20"></li>';
    str+='<li class="choose_val"><a href="javascript:void(0);" class="choose-btn">';
    str+='<h2>$30</h2>';
    str+='<p>I can help even more</p><span>USD</span>';
    str+='</a><input type="hidden" name="donate_val" class="donate_val" value="30"></li>';
    str+='</ul>';
                
    str+='</div>';
    str+='</div>';

    str+='<div class="home-content-agenda home-tab-cnt">';
    str+='<div class="home-news-lst">';
    str+='<ul>';
    str+='<li class="choose_val"><a href="javascript:void(0);" class="choose-btn">';
    str+='<h2>$10</h2>';
    str+='<p>Yes, I Want to help</p><span>USD</span>';
    str+='</a><input type="hidden" name="donate_val" class="donate_val" value="10"></li>';
    str+='<li class="choose_val"><a href="javascript:void(0);" class="choose-btn">';
    str+='<h2>$20</h2>';
    str+='<p>I can help more</p><span>USD</span>';
    str+='</a><input type="hidden" name="donate_val" class="donate_val" value="20"></li>';
    str+='<li class="choose_val"><a href="javascript:void(0);" class="choose-btn">';
    str+='<h2>$30</h2>';
    str+='<p>I can help even more</p><span>USD</span>';
    str+='</a><input type="hidden" name="donate_val" class="donate_val" value="30"></li>';
    str+='</ul>';
                
    str+='</div>';
    str+='</div>';
    str+='</div>';

    str+='<div class="donation-cnt">';
    str+='<p class="pop-para">Our mission is to tackle food insecurity around the world using innovative Crop Circle farms & gardens. Crop Circles are climate adaptable and use far less water and soil resources than current agricultural systems. Ideal for disaster relief and as a bridge for broken supply chains, they can be deployed rapidly and grow food almost the day they arrive. They define “point-of-use agriculture” able to grow high quantities of quality produce wherever people live. We would love to keep in touch - please type your email in the form provided below.</p>';
    str+='<div class="email-box">';
    str+='<form method="post" action="https://www.aweber.com/scripts/addlead.pl">';
    str+='<input type="text" id="username" name="username" placeholder="Type your email here - thank you" required>';
    str+='<span  id="username_err" style="color: red; font-size: 15px;"></span>';
    str+='<input type="hidden" name="listname" value="[awlist6208972]" />';
    str+='</form>';
    str+='</div>';
    str+='<p class="privacy-para">We respect your <u>email privacy</u></p>';
    str+='</div>';
   
    str+='<button onclick="return validation()"><span id="append_link">Donate</span></button>';
    str+='<input type="hidden" name="donate_link" id="donate_link" value="">';
    str+='<div class="cryp-btn"><a href="https://www.newleaftechnologies.com/donate-with-crypto.html" target="_blank">Donate With Crypto</a></div>';
    str+='</div>';
    str+='</div>';

    str+='</div>';  
    str+='</div>';

    document.write(str);
}




$(document).ready(function(){

$('#append_link').html('Donate');

$('.choose_val').on('click',function(){

     var donate_val = $(this).find("input").val();
     var tab = $(".home-tab-list li").attr('class');

     if(tab == 'noticies active')
     {
          if(donate_val == '10')
          {
              var link = 'https://buy.stripe.com/cN24iB5Qz40Fctq3cl';
          }
          else if(donate_val == '20')
          {
              var link = 'https://buy.stripe.com/00gcP73IrfJnali4gx';
          }
          else if(donate_val == '30')
          {
              var link = 'https://buy.stripe.com/aEU16p6UD9kZ9he4gv';
          }
          //alert(link);
     }
     else
     {
          if(donate_val == '10')
          {
              var link = 'https://buy.stripe.com/00g5mF1Aj2WB0KI00i';
          }
          else if(donate_val == '20')
          {
              var link = 'https://buy.stripe.com/00g7uNdj154J3WU00g';
          }
          else if(donate_val == '30')
          {
              var link = 'https://buy.stripe.com/3cseXfgvdcxbfFCaES';
          }
         
     }

    $('#donate_link').val(link);
      //$('#append_link').html('<a href="'+link+'">Donate</a>');
     
   
});

});


function validation()
{
var valid = true;

var url = $('#donate_link').val();

if(!$("#username").val().trim()) {
    $("#username_err").html("Enter email");
    $("#username").css('border-color','red');
    valid = false;
}
else if(!$("#username").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
    $("#username_err").html("Enter valid email");
    $("#username").css('border-color','rgb(249, 162, 134)');
    valid = false;
}
else
{

    $("#username").css('border-color','#cbc9c8');
     $("#username_err").html('');
    // $('#append_link').html('<a href="'+url+'">Donate</a>');
   // window.location.href = url;
    window.open(url, '_blank');
}

return valid;
}





