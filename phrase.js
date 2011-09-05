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

// Phrase: hide and show [jquery visible]
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

// Phrase: jQuery catch text change event [jquery plugin textarea undo redo]
//==============================================
// need plugin
// http://www.zurb.com/playground/jquery-text-change-custom-event
$('#id').bind('textchange',function(event,previousText) {
    alert( previousText );
});

// Phrase: jQuery select change event [jquery selectbox hide show]
//==============================================
$("select[name=hoge]").change(function(){
    if( $("select[name=hoge]").children(':selected').val() == 2 ){
        $('#id').show();
    }
    else {
        $('#id').hide();
    }
});

// Phrase: setInterval [time interval]
//==============================================
var interval = 2000;
var tid = setInterval(function() {
    // do something
    if( done ) {
        // do something
        clearInterval(tid);
    }
},interval);

// Phrase: jQuery countdown [jquery plugin textarea undo redo]
//==============================================
// need plugin
// http://keith-wood.name/countdown.html
var until_date_str = '2011-09-20 11:22:33';
var re = until_date_str.match(/(\d+)-(\d+)-(\d+) (\d+):(\d+):(\d+)/);
var year   = re[1];
var month  = re[2];
var dates  = re[3];
var hour   = re[4];
var minute = re[5];
var until_date = new Date(year,month,dates,hour,minute);
$('.countdown').countdown({
    until: until_date,
    layout: '<p>hogeまであと {dn}日 {hn}時間 {mn}分 {sn}秒</p>'
});

