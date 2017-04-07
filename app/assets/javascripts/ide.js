
$( document ).ready(function() {

   setupEditor();
   setupNavbar();

 });


function setupEditor(){
  "use strict"
  var editor = ace.edit("html_box");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue('<h2> The world is Great</h2>')
    setupButton(editor)
  var editor = ace.edit("css_box");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/css");
    editor.setValue('')
    setupButton(editor)

var editor = ace.edit("javascript_box");
    editor.setTheme("ace/theme/twilight");
    editor.getSession().setMode("ace/mode/javascript");
    editor.setValue('')
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
     $(this).parents().addClass('active').siblings().removeClass('active')

  });
}
