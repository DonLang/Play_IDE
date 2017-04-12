$(document).ready(function() {
  'use strict';
  setupEditor();
  setupNavbar();
});

function setupEditor() {
  "use strict";
  var html_editor = ace.edit("html_editor");
  html_editor.setTheme("ace/theme/twilight");
  html_editor.getSession().setMode("ace/mode/html");
  html_editor.setValue('<h2> The world is Great</h2>');

  var css_editor = ace.edit("css_editor");
  css_editor.setTheme("ace/theme/twilight");
  css_editor.getSession().setMode("ace/mode/css");
  css_editor.setValue('');

  var javascript_editor = ace.edit("javascript_editor");
  javascript_editor.setTheme("ace/theme/twilight");
  javascript_editor.getSession().setMode("ace/mode/javascript");
  javascript_editor.setValue('');
  renderButton(html_editor, css_editor, javascript_editor);
  saveButton(html_editor, css_editor, javascript_editor);
  fontChange(html_editor, css_editor, javascript_editor);
}




function renderButton(html_editor, css_editor, javascript_editor) {

  $(".render_code").click(function(response) {
    var html_results = html_editor.getValue();
    var css_results = css_editor.getValue();
    var javascript_results = javascript_editor.getValue();
    var H = '<html><head><style>' + css_results;
    H += '</style></head><body>' + html_results;
    H += '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>';
    H += '<script>$(document).ready(function () {';
    H += javascript_results;
    H += '});</script>';
    H += '</body></html>';

    var previewFrame = document.getElementById("renderbox");
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    preview.open();
    preview.write(H);
    preview.close();

  });


}

function saveButton(html_editor, css_editor, javascript_editor) {

  $(".save_code").click(function(response) {
    var data = {
      htmlcode: {},
      csscode: {},
      javascriptcode: {}
    };

    data.htmlcode.code = html_editor.getValue();
    data.csscode.code = css_editor.getValue();
    data.javascriptcode.code = javascript_editor.getValue();

    console.log(data);

    $.ajax({
      type: "POST",
      url: "/pages",
      data: data

    })

  });

}






function setupNavbar() {
  $(".languages").click(function(event) {
    event.preventDefault();
    $(this).parents().addClass('active').siblings().removeClass('active');
    results = $($(this)[0]).html();
    $("#" + results.toLowerCase() + "_editor").show().siblings().hide();
  });
}

function fontChange() {
  editors = arguments
  console.log(editors.length)
  $('#opendyslexic').on('change', function() {
    if ($(this).is(':checked')) {
      for (i = 0; i < editors.length; i++) {
        editors[i].setOptions({
          fontFamily: "OpenDyslexicMono",
          fontSize: "9pt"
        });
      }
    } else {
      for (i = 0; i < editors.length; i++) {
        editors[i].setOptions({
          fontFamily: "Monaco",
          fontSize: "9pt"
        });
      }
    }
    $('.languages').toggleClass('dyslexic');
  });


}
