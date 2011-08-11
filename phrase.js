// Phrase: encodeURI [url encode]
//==============================================
var encstr = encodeURI("URL");

// Phrase: decodeURI [url decode]
//==============================================
var decstr = decodeURI("URL");

// Phrase: Date [date]
//==============================================
var now = new Date();

var year     = now.getYear()+1900;
var fullyear = now.getFullYear();
var month    = now.getMonth()+1;
var day      = now.getDate();
var hour     = now.getHours();
var minute   = now.getMinutes();
var seconde  = now.getSeconds();

// Phrase: jQuery ajax [jquery click event]
//==============================================
$('#id').click(function () {
    $.ajax({
        type: "POST",
        url: "/hoge/fuga/",
        data: { param1: "hoge", param2: "fuga" },
        dataType: "json",
        success: function(json){
            if(json.error){
                alert('error');
            }
            else {
                alert( json.content );
            }                                                                                                                                      
        }
    });
});

// Phrase: hide and show [visible]
//==============================================
// html
<div id="id2" style="display:none;"></div>

// script
if( $('#id1').is(':visible') ) {
    $('#id1').hide();
    $('#id2').show();
}

// Phrase: RegExp replace [regexp]
//==============================================
var html = 'html content';
var re = new RegExp('<hoge>' + '([\\s\\S]*?)' + '</hoge>','gi');
html = html.replace(re,"$1");

// Phrase: surroundHTML [select range text slice]
//==============================================
function surroundHTML(tag) {
    var target = document.getElementById('id');
    var pos = getAreaRange(target);

    var val = target.value;
    var range = val.slice(pos.start, pos.end);
    var beforeNode = val.slice(0, pos.start);
    var afterNode = val.slice(pos.end);
    var insertNode;

    if (range || pos.start != pos.end) {
        insertNode = '<' + tag + '>' + range + '</' + tag + '>';
        target.value = beforeNode + insertNode + afterNode;
    }
    else if (pos.start == pos.end) {
        insertNode = '<' + tag + '>' + '</' + tag + '>';
        target.value = beforeNode + insertNode + afterNode;
    }
}

function getAreaRange(obj) {
    var pos = new Object();

    if(window.getSelection()) {
        pos.start = obj.selectionStart;
        pos.end = obj.selectionEnd;
    }

    return pos;
}

