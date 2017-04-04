
$( document ).ready(function() {
   setupEditor()
 });


function setupEditor(){
  "use strict"
  var editor = ace.edit("editor");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setValue('var y = "Insert code here"');
}
