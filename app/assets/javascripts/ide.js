
$( document ).ready(function() {
   setupEditor()
 });


function setupEditor(){
  "use strict"
  var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setValue('c = document.getElementsByTagName("h1")')


  $(":button").click(function(response){
     var codeToRender = editor.getValue();
     console.log(codeToRender)
  });
}
