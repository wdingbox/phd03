function messgaeSubmit(){
  $('#messageFalse').css('display', 'none');
  $('#eMailFalse').css('display', 'none');
  $("#tips").css("display","none");
  var url = "http://local.cndy.org/wuxiMessage/api.php?tab=zw&typename=juhe&email="+$("#memail").val()+"&text="+$("#message").val()+"&callback=?";
  $.getJSON(url, function(data){
    if(data.success == 'false'){
      $("#messageFalse").html(data.message);
      $('#messageFalse').css('display', 'block');
    }
    else if(data.success == 'falsetext'){
      $('#eMailFalse').css('display', 'none');
      $("#messageFalse").html(data.message);
      $('#messageFalse').css('display', 'block');
    }else if(data.success == 'falseemail'){
      $('#messageFalse').css('display', 'none');
      $("#eMailFalse").html(data.message);
      $('#eMailFalse').css('display', 'block');
    }else{
      $('#eMailFalse').css('display', 'none');
      $('#messageFalse').css('display', 'none');
      $("#tips").css("display","block");
      $("#tips").html("<i>*<\/i>"+data.message);
    }
  });
  return false;
}