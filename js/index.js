function getArticle(articleName){
  $.ajax({
    url : "https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch="+encodeURIComponent(articleName),
    Accept: 'applications/json',
    success: function(data){
      $("#tableResult").html("");
      for (i = 0 ; i < (data.query.search).length ; i++){
        $("#tableResult").append("<tr><td><a target='_blank' href='https://en.wikipedia.org/?curid="+data.query.search[i].pageid+"'>"+(data.query.search[i].title)+"</a></td><td>"+(data.query.search[i].snippet)+"</td></tr>");
      }
    }
  });
}

$("document").ready(function(){
  //when clicking the button
  $("#bouton").click(function(){
    getArticle((document.getElementById("entree")).value)
  });
});