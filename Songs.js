var song = function (level) {
    this._level = level;
}

song.prototype.getAnswer = function () {
    //alert("Song Level" + level);

    //var SongTextHTML = "<div style='font-size:small;'>asdasdasd</br>asdasdasdasdasdasddsa<br/>asdasdasdasasdads<iframe width='100%' height='100' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177159515&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe><div>";
    return "how";
}

//TODO:swicth level 
song.prototype.getSong = function () {
 	var SongTextHTML = "<div style='font-size:small;font-family:courier;'>Open t<b>h</b>e door<br/>and look in<br/>and walk around<br/>you found<br/><br/>Walking ahead<br/>turning left<br/>see what you can find<br/>Remind<br/><br/>Open the door<br/>to my heart and you<br/><br/>will rise<br/>slowly<br/><br/>"+
	"Open the door<br/>to my heart and<br/>you will rise<br/>slowly<iframe width='100%' height='100' scrolling='no' frameborder='no' src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/177159515&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true'></iframe><div>"+
    "<br><b> Riddle: </b>asking the question, on the first line, at the middle of the middle";
    return SongTextHTML;
}

// obvuscation from : https://javascriptobfuscator.com/Javascript-Obfuscator.aspx
//var _0xdcb0=["\x5F\x6C\x65\x76\x65\x6C","\x67\x65\x74\x53\x6F\x6E\x67","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x61\x73\x64\x61\x73\x64\x61\x73\x64\x3C\x2F\x62\x72\x3E\x61\x73\x64\x61\x73\x64\x61\x73\x64\x61\x73\x64\x61\x73\x64\x61\x73\x64\x64\x73\x61\x3C\x62\x72\x2F\x3E\x61\x73\x64\x61\x73\x64\x61\x73\x64\x61\x73\x61\x73\x64\x61\x64\x73"];var song=function(_0xd6e4x2){this[_0xdcb0[0]]=_0xd6e4x2};song[_0xdcb0[2]][_0xdcb0[1]]=function(){var _0xd6e4x3=_0xdcb0[3];return _0xd6e4x3}

//eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[c.toString(a)]=k[c]||c.toString(a)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('4 1=0(2){9.7=2}1.a.c=0(){4 3="d</5>b<5/>8";6 3}',14,14,'function|song|level|SongTextHTML|var|br|return|_level|asdasdasdasasdads|this|prototype|asdasdasdasdasdasddsa|getSong|asdasdasd'.split('|'),0,{}))