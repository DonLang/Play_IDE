
$( document ).ready(function() {
   setupEditor()
 });


function setupEditor(){
  "use strict"
  var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue('<h2> The world is Great</h2>')


  $(":button").click(function(response){
    var codeToRender = editor.getValue();
    console.log(codeToRender)
    var $iframe = $('#renderbox');
    $iframe.ready(function() {
    $iframe.contents().find("body").empty().append(codeToRender);
  });

  });

  $(".languages").click(function(event){
      event.preventDefault()

  });
}
