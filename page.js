$( document ).ready(function() {


  var requestJSONfromAPI = function() {
  var xmlhttp;
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
      document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
      }
  }
  xmlhttp.open("GET","http://www.buzzfeed.com/buzzfeed/api/comments?buzz_id=3371338",true);
  xmlhttp.send();
  };

  var splitJSONintoObjects = function() { 

  }



requestJSONfromAPI();

});