function 
fradSection(a){if(DartBelegung=="empty"||DartBelegung=="beberlin"||DartBelegung==""||location.protocol=="https:"||DartFunctions.isDisabled(a)||DartFunctions.isDisabled("all"))return!0;if(a=="Oben"){var 
b=document.getElementById("banner_placeholder");b&&(b.className="banner_placeholder");if(buildIframe(728,90,a))return!0;dartTag(DartDcopt+"sz=728x90;tile=1")}else 
if(a=="Fotobanner"){if(buildIframe(728,90,a))return!0;dartTag(DartDcopt+"sz=728x1;tile=1")}else if(a=="Content"||a=="ContentNoHpA"){if(DartDomain!="oms.berlin.de"||typeof 
adlIsMaster=="undefined"){if(buildIframe(300,262,a))return!0;DartDomain=="oms.berlinonline.de"?(dartTag("sz=300x250;tile=3;hpa="+(a=="ContentNoHpA"?0:1)),dartImg()):(dartImg(),dartTag("sz=300x250;tile=3;hpa="+(a=="ContentNoHpA"?0:1)))}}else 
if(a=="Skyscraper"){if(buildIframe(300,600,a))return!0;location.href.match(/(berliner\.de|prod\.berliner)/)?sponsoredLink():dartTag("sz=120x600;tile=2")}else 
if(a=="Service"){if(buildIframe(300,262,a))return!0;location.href.match(/erotik/)||(dartImg(),google_ad_client="pub-4469988915177618",google_ad_width=300,google_ad_height=250,DartDomain=="oms.b2bbb.de"?(google_ad_channel="3695185309",google_color_border="204794",google_color_bg="DCEAF8",google_color_link="204794",google_ad_format="300x250_as",google_ad_type="text",google_color_text="000000",google_color_url="000000"):DartDomain=="oms.berlin.de"?(google_ad_client="ca-pub-8518874607822337",google_ad_slot="3511765225"):DartDomain=="oms.berliner-zeitung.de"?(google_ad_client="pub-5796068289136774",google_ad_slot="3199451256",google_ad_format="300x250_as",google_ad_type="text",google_color_text="000000",google_color_url="000000"):(google_ad_channel="7418660611",google_color_border="A51F02",google_color_bg="FFFFFF",google_color_link="A51F02",google_ad_format="300x250_as",google_ad_type="text",google_color_text="000000",google_color_url="000000"),document.write('<script 
type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>'))}else 
if(a=="Content2"){if(buildIframe(300,262,a))return!0;dartImg(),DartDomain=="oms.twotickets.de"||DartDomain=="oms.berlinerkurier.de"?dartTag("sz=300x280"):dartTag("sz=300x250;tile=4")}else 
if(a=="Content3"){if(buildIframe(300,362,a))return!0;dartTag("sz=300x350")}else if(a=="Sponsoring"){if(buildIframe(300,262,a))return!0;dartTag("sz=300x280")}else if(a=="Teaser")DartSpecial1&&typeof 
google_ad_request_done!="undefined"&&(google_ad_client="pub-4469988915177618",google_ad_channel=typeof 
DartSpecial1!="undefined"&&DartSpecial1!=""?DartSpecial1:"6666704436",google_ad_output="js",google_max_num_ads="1",google_ad_type="text",google_image_size="728x90",google_feedback="on",location.href.match(/(prod\.bde|\/special\/test_admanagement_bde\/)/)&&(google_adtest="on"),typeof 
google_adnum!="undefined"&&(google_skip=google_adnum),document.write('<script type="text/javascript" src="http://pagead2.googlesyndication.com/pagead/show_ads.js"></script>'));else 
if(a=="Teaser1"){if(buildIframe(300,112,a))return!0;dartTag("sz=300x100")}else if(a=="Teaser2"){if(buildIframe(300,113,a))return!0;dartTag("sz=300x101")}else 
if(a=="Teaser3"){if(buildIframe(300,114,a))return!0;dartTag("sz=300x102")}else if(a=="Sponsored"){if(buildIframe(300,362,a))return!0;location.href.match(/tip/)&&sponsoredLink()}else 
if(a=="Billboard"){if(DartFramed=="y")return!0;dartTag("sz=800x250;tile=4")}else if(a=="HP_Content"){if(buildIframe(180,162,a))return!0;dartImg(),dartTag("sz=300x150;hpa=1")}}function 
buildIframe(a,b,c){return typeof DartFramed!="undefined"&&DartFramed=="y"?(document.write('<iframe class="adserv" 
src="'+DartRelDomain+"/.adserv/_bin/iframe.html"+"?section="+encodeURIComponent(c)+"&DartRelDomain="+encodeURIComponent(DartRelDomain)+"&DartDcopt="+encodeURIComponent(DartDcopt)+"&DartBelegung="+encodeURIComponent(DartBelegung)+"&DartURLMatch="+encodeURIComponent(DartURLMatch)+"&DartSpecial1="+encodeURIComponent(DartSpecial1)+"&DartSpecial2="+encodeURIComponent(typeof 
DartSpecial2!="undefined"?DartSpecial2:"")+"&DartDomain="+encodeURIComponent(DartDomain)+"&DartBT="+encodeURIComponent(DartBT)+"&DartIvwKategorie="+encodeURIComponent(DartIvwKategorie)+"&adlink_randomnumber="+encodeURIComponent(adlink_randomnumber)+'" 
height="'+b+'" width="'+a+'" marginwidth="0" marginheight="0" frameborder="0" scrolling="no"></iframe>'),!0):!1}function reloadIframes(){var a=document.getElementsByTagName("iframe");for(var 
b=0;b<a.length;b++){var c=a[b];typeof c.className!="undefined"&&c.className=="adserv"&&(c.src=c.src+"&i")}reloadCp()}function reloadCp(){var a=document.getElementById("cp");if(a){var b=new 
Date,c=a.getElementsByTagName("img");for(var d=0;d<c.length;d++){var e=/^(.*?\?)(.*)$/.exec(c[d].src),f=e[2].split(/&/);for(var 
g=0;g<f.length;g++)f[g].match(/^r=/)&&(f[g]="r="+encodeURIComponent(location)),f[g].match(/^(d|ts)=/)&&(f[g]="ts="+b.getTime()+"."+Math.random());c[d].src=e[1]+f.join("&")}}return}function 
dartTag(a){var b;typeof 
DartSpecial2!="undefined"&&DartSpecial2?b=DartSpecial2:b=DartDomain=="oms.berlinerzeitung.de"||DartDomain=="oms.berlinerkurier.de"||DartDomain=="oms.tipberlin.de"?1:5,document.write('<script 
type="text/javascript" 
src="http://ad.de.doubleclick.net/adj/'+DartDomain+"/"+DartBelegung+";oms="+DartBelegung+";nielsen="+b+";"+WLRCMD+";"+a+";ord="+adlink_randomnumber+'?"><'+"/scr"+"ipt>")}function 
dartImg(){if(DartDomain!="oms.visitberlin.de"){var a='<div><img src="'+DartRelDomain+'/.adserv/_img/ad-letter-en.gif" alt="Ad" style="margin:0 0 5px 0; width:37px; height:7px" /></div>',b='<div><img 
src="'+DartRelDomain+'/.adserv/_img/ad-letter.gif" alt="Anzeige" style="margin:0 0 5px 0; width:37px; height:7px" /></div>';if(location.href.match(/(\/en\/|\.en\.)/))b=a;else{var 
c=document.getElementsByTagName("html"),d;c&&c[0]&&(d=c[0].getAttribute("lang"))&&d&&d.match(/^en/)&&(b=a)}document.write(b)}}function sponsoredLink(){document.write('<script type="text/javascript" 
src="'+DartRelDomain+"/poink/poink_include/wids.php?p_url="+encodeURIComponent(location.href)+'"><'+"/scr"+"ipt>")}function mapSponsoredLink(a,b){if(!a)return!1;typeof 
b=="undefined"&&(b=3),document.write('<script type="text/javascript" 
src="'+DartRelDomain+"/poink/poink_include/wids.php?tmpl=bde_stadtplan_toastslice&amp;p_key="+encodeURIComponent(a)+"&amp;p_limit="+encodeURIComponent(b)+'"></script>')}function getRandom(a,b){return 
a>b?-1:a==b?a:a+parseInt(Math.random()*(b-a+1))}var 
google_adnum=0;if(DartBelegung=="empty"||DartBelegung=="beberlin"||DartBelegung==""||window.location.protocol.match(/https/)||location.protocol=="https:"||typeof 
DartIvwKategorie!="undefined"&&DartIvwKategorie=="buerger")DartBelegung=="";else{if(DartDomain=="oms.berlin.de")function google_ad_request_done(a){var b="";if(a.length>0)if(a[0].type=="flash")b+='<a 
href="'+google_info.feedback_url+'" style="color:000000">Ads by Google</a><br>'+'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+' 
codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+google_ad.image_width+'" HEIGHT="'+google_ad.image_height+'"> <PARAM NAME="movie" 
VALUE="'+google_ad.image_url+'">'+'<PARAM NAME="quality" VALUE="high">'+'<PARAM NAME="AllowScriptAccess" VALUE="never">'+'<EMBED src="'+google_ad.image_url+'" WIDTH="'+google_ad.image_width+'" 
HEIGHT="'+google_ad.image_height+'" TYPE="application/x-shockwave-flash"'+' AllowScriptAccess="never" '+' PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT>';else 
if(a[0].type=="image")b+='<a href="'+google_info.feedback_url+'" style="color:000000">Ads by Google</a><br> <a href="'+a[0].url+'" target="_top" title="go to '+a[0].visible_url+'" 
onmouseout="window.status=\'\'" onmouseover="window.status=\'go to '+a[0].visible_url+'\';return true"><img border="0" 
src="'+a[0].image_url+'"width="'+a[0].image_width+'"height="'+a[0].image_height+'"></a>';else if(a[0].type=="html")b+=a[0].snippet;else{var 
c=0;for(c=0;c<a.length;++c)location.href.match(/www\.berliner-silvester\.de/)?(b='<div class="mod_contentteaser floatbox"><div class="ct std_box floatbox">',b+='<h4><a target="_blank" 
href="'+google_info.feedback_url+'">Google-Anzeige</a></h4>',b+='<h3 style="background:none;"><a target="_blank" href="'+a[c].url+'" style="display:inline;" onmouseout="window.status=\'\'" 
onmouseover="window.status=\'go to '+a[c].visible_url+"';return true\">"+a[c].line1+"</a></h3>",b+="<p>",b+=a[c].line2+" "+a[c].line3+'<br /><a target="_blank" href="'+a[c].url+'" 
onmouseout="window.status=\'\'" onmouseover="window.status=\'go to '+a[c].visible_url+"';return true\">"+a[c].visible_url+"</a>",b+="</p>",b+="</div></div>"):(b='<div class="teaser i_add">',b+='<h3 
style="background:none;"><a target="_blank" style="color:#999;display:inline;" href="'+google_info.feedback_url+'">Google-Anzeige</a></h3>',b+='<h3 style="background:none;"><a target="_blank" 
href="'+a[c].url+'" style="display:inline;" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to '+a[c].visible_url+"';return true\">"+a[c].line1+"</a></h3>",b+='<div 
class="inner">',b+=a[c].line2+" "+a[c].line3+'<br /><a target="_blank" href="'+a[c].url+'" onmouseout="window.status=\'\'" onmouseover="window.status=\'go to '+a[c].visible_url+"';return 
true\">"+a[c].visible_url+"</a>",b+="</div>",b+="</div>");a[0].bidtype=="CPC"&&(google_adnum+=a.length)}document.write(b);return}var WLRCMD="";if(typeof adlink_randomnumber=="undefined")var 
adlink_randomnumber=Math.floor(Math.random()*1e10);if(typeof adlAutoScrolling=="undefined")var adlAutoScrolling=!0;var 
adlWallPaperTop=0;switch(DartDomain){case"oms.berliner-zeitung.de":adlWallPaperLeft=833;break;case"oms.tip-berlin.de":adlWallPaperLeft=842;break;case"oms.berlin.de":adlWallPaperLeft=988;break;case"oms.berlinonline.de":adlWallPaperLeft=988;break;default:adlWallPaperLeft=825}var 
adlLayerTop=100,adlLayerLeft=5,adlLayerBottom=640,adlLayerRight=520;document.writeln('<style type="text/css">.banner {background:url('+DartRelDomain+"/.adserv/_img/ad-landscape.gif) left top 
no-repeat;padding-left:12px;text-align:left;margin:0px 0px 0px 40px;height:90px;}"+".skyscraper {width:200px;}"+".skyscraper div {margin-bottom:3px;}"+".banner, .skyscraper, #omsv_sky_DhtmlLayer 
{z-index:1 !important;}"+(DartDomain=="oms.berlin.de"?"#adl_sb_table {margin-left:-40px;}":"")+"#adl_sb_table {width:"+adlWallPaperLeft+"px;position:absolute;left:0px;top:0px;}"+"#adl_sb_table td 
{text-align:right;}"+"</"+"style>");if(DartBT){var oms_site=DartDomain,btcode=DartBT,oms_zone=DartBelegung,wsite=oms_site,ccat=btcode,oms_random=adlink_randomnumber;document.write('<script 
src="http://oms.nuggad.net/rc?nuggn=1615459509&amp;nuggtg='+encodeURIComponent(oms_zone)+'" type="text/javascript"></script>')}}var 
DartFunctions={variables:{},init:function(a){DartFunctions.variables=a,DartFunctions.variables.feedback&&DartFunctions.feedback()},isDisabled:function(a){return typeof 
DartBehaviour!="undefined"?typeof DartBehaviour["disable_all_"+a]!="undefined"||typeof DartBehaviour["disable_"+DartDomain+"_"+a]!="undefined"||typeof 
DartBehaviour["disable_"+DartDomain+"_all"]!="undefined":!1},feedback:function(){document.location.href.match(/popup|foto/)||document.body.appendChild(DartFunctions.loadScript("http://www.berlin.de/special/feedback/feedback.js"))},loadScript:function(a){var 
b=document.createElement("script");return b.setAttribute("type","text/javascript"),b.setAttribute("src",a),b}};typeof 
DartVariables!="undefined"&&(document.addEventListener?window.addEventListener("load",function(){DartFunctions.init(DartVariables)},!1):window.onload=function(){DartFunctions.init(DartVariables)});
