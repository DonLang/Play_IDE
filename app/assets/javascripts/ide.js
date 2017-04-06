
$( document ).ready(function() {

   setupEditor();
   setupNavbar();

 });


function setupEditor(){
  "use strict"
  var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue('<h2> The world is Great</h2>')
    setupButton(editor)


}

function setupButton(editor){
  $(":button").click(function(response){
    var codeToRender = editor.getValue();
    console.log(codeToRender)
    var $iframe = $('#renderbox');
    $iframe.ready(function() {
    $iframe.contents().find("body").empty().append(codeToRender);
    });
  });
}

function setupNavbar(){
  $(".languages").click(function(event){
      event.preventDefault();

  });
}
