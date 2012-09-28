$(document).ready(function(){
  
  $('#fill').infinitescroll({
    loading: {
      img: "",
      msgText: "",
    },
    navSelector  : ".pager",
    nextSelector : "#next-page",
    itemSelector : "#fill .post"
  });
  
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  $("#newsletter").submit(function(event){
    event.preventDefault();
    $("#mailchimp-success").removeClass("hide");
    $.ajax({
      dataType: 'jsonp',
      url: "http://files.holstee.com/tumblr/holstee/mailchimp/mailchimp.php",
      data: $(this).serialize(),
      success:function(mailchimp){
        if(mailchimp.success === true){
          $("#mailchimp-success").text("You're signed up!").addClass("success");
        }else{
          $("#mailchimp-success").text("Sign up failed, apologies!").addClass("fail");
        }
      }
    });
  });
  
});