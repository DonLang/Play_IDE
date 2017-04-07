
$( document ).ready(function() {

   setupEditor();
   setupNavbar();

 });


function setupEditor(){
  "use strict"
  var html_editor = ace.edit("html_editor");
    html_editor.setTheme("ace/theme/twilight");
    html_editor.getSession().setMode("ace/mode/html");
    html_editor.setValue('<h2> The world is Great</h2>')
    setupButton(html_editor)
  var css_editor = ace.edit("css_editor");
    css_editor.setTheme("ace/theme/twilight");
    css_editor.getSession().setMode("ace/mode/css");
    css_editor.setValue('')
    // setupButton(css_editor)

var javascript_editor = ace.edit("javascript_editor");
    javascript_editor.setTheme("ace/theme/twilight");
    javascript_editor.getSession().setMode("ace/mode/javascript");
    javascript_editor.setValue('')
    // setupButton(javascript_editor)


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
