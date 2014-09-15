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
    if (xmlhttp.readyState==4 && xmlhttp.status==200) {
      // document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
       window.myJSON = xmlhttp.responseText;
       splitJSONintoObjects();
    }
  }
  xmlhttp.open("GET","http://www.buzzfeed.com/buzzfeed/api/comments?buzz_id=3371338",true);
  xmlhttp.send();
  };


  var splitJSONintoObjects = function() { 
  // alert(window.myJSON);
    var wholeResponse = JSON.parse(window.myJSON);
    var allComments = wholeResponse.comments;
    //alert(allComments[0].badge_title);
    for (var i = 0; i < allComments.length; i++) {
      document.getElementById("myDiv").innerHTML += "<br/>"
      for (var key in allComments[i]) {
       if (allComments[i].hasOwnProperty(key)) {
      document.getElementById("myDiv").innerHTML += (key + " -> " + allComments[i][key] + "<br/>");
     //  console.log(key + " -> " + allComments[i][key]);
      }
    }

  }
}


requestJSONfromAPI();

//end jquery
});