/**
 * ----------------------------------------------------------------------------
 * TITLE       : calendar
 * AUTHOR      : Andreas Maengel <andreas.maengel@berlinonline.de>
 * AUTHOR      : Aljoscha Brell <aljoscha.brell@berlinonline.de>
 * COMPANY     : BerlinOnline <http://www.berlinonline.de/>
 * DATE        : 2007-08-16
 * UPDATED     : 2007-09-XX
 * DESCRIPTION : extends input fields for date with calendar widget
 * Documentation: http://support.berlin.de/
 * ----------------------------------------------------------------------------
 */

var global_cal_ids = new Array();

if (typeof(addEvent) == 'undefined')
function addEvent(obj,type,fn) {
	if (document.addEventListener) {
		addEvent = function (obj,type,fn) {
			obj.addEventListener(type,fn,false);
		}
	}
	else if (document.attachEvent) {
		addEvent = function (obj,type,fn) {
			obj["e"+type+fn] = fn;
			obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
			obj.attachEvent('on'+type,fn);
		}
	}
	addEvent(obj,type,fn);
}

var globalCAL = '';
function calendar(obj) {
    this.init = function(optdate, von, bis) {
        this.obj = obj;
        if (von && bis) {this.von = von.id;this.bis = bis.id;this.extended = 100;}
        else {this.extended = 0;this.von = '';this.bis = '';}
        this.months = ["Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
        this.days  = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
        this.special = {title:'Spezial-Zeitr&auml;ume', heu:'Heute', heumo:'Heute und Morgen', mo:'Morgen', wo:'Wochenende', os:'Ostern', hi:'Himmelfahrt', pf:'Pfingsten', ok:'03. Oktober', wei:'Weihnachten'}
        this.specialorder = ["heu", "heumo", "mo", "os", "hi", "pf", "ok", "wei"];

        if (typeof(calendarLanguage) == "string") {
        if (calendarLanguage == 'en') {
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.days  = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        this.special = {title:'Special-Dates', heu:'Today', heumo:'Today and Tomorrow', mo:'Tomorrow', wo:'Weekend', os:'Eastern', hi:'Ascension Thursday', pf:'Pentecost', ok:'03. October', wei:'Christmas'}
        }
        }
        this.date = this.parse_value(optdate);
        this.day = this.date.getDay();
        this.month = this.date.getMonth();
        this.monthday = this.date.getDate();
        this.year = this.date.getFullYear();
        this.work_date = this.parse_value(optdate);
        this.orig_date = this.parse_value(optdate, true);
        this.today = new Date();
        this.getfirstday();
        this.id = this.set_id();
        this.show();
        obj.cal_id = this.id;
        window.clearTimeout(obj.timeout);
        obj.onblur  = function (){obj.timeout = window.setTimeout("document.getElementById('id_"+obj.cal_id+"').style.display='none';",300);}
    }

    this.parse_value = function(optdate, ignore_optdate) {
        var date = new Date;
        if (!optdate || ignore_optdate == true) optdate = this.obj.value
        if (optdate && optdate.match(/\d+\.\d+\.\d\d\d\d/)) {
            var startdate = optdate.split('.');
            if (startdate[0] && startdate[1] && startdate[2]) {
                date.setDate(startdate[0]);
                date.setMonth((startdate[1])-1);
                date.setYear(startdate[2]);
            }
        }
        return date;
    }

    this.set_id = function() {
        if (this.obj.id) this.id = this.obj.id;
        else {
            this.id = 'cal_'+Date.parse(this.date);
            this.obj.id = this.id;
        }
        return this.id;
    }

    this.findPosX = function (){
        var curleft = 0;
        if (this.obj.offsetParent){
            xobj = this.obj;
            while (xobj.offsetParent){
                curleft += xobj.offsetLeft
                xobj = xobj.offsetParent;
            }
        } else if (this.obj.x)
            curleft += this.obj.x;
        return curleft;
    }

    this.findPosY = function (){
        var curtop = 0;
        if (this.obj.offsetParent){
            yobj = this.obj;
            while (yobj.offsetParent){
                curtop += yobj.offsetTop;
                yobj = yobj.offsetParent;
            }
        } else if (this.obj.y)
            curtop += this.obj.y;
        return curtop;
    }

    this.getfirstday = function() {
        if (this.work_date.getDay != 1) {
            this.work_date.setDate(1);
            this.work_date.setDate(1 - (7 + this.work_date.getDay() - 1) % 7);
        }
    }

    this.prevmonth = function() {
        var y = 0;
        if ((this.month) < 1) y = 1;
        return this.monthday+'.'+this.month+'.'+(this.year-y);
    }

    this.nextmonth = function() {
        var y = 0;
        if ((this.month) > 10) y = 1;
        return this.monthday+'.'+(this.month+2)+'.'+(this.year+y);
    }

    this.prevyear = function() {
        var y = 0;
        if ((this.year-1)>1970)
            y=1
        return this.monthday+'.'+(this.month+1)+'.'+(this.year-y);
    }

    this.nextyear = function() {
        var y = 0;
        if ((this.year+1)<2030)
            y=1
        return this.monthday+'.'+(this.month+1)+'.'+(this.year+y);
    }

    this.special_time = function(when) {
        var von = '';var bis = '';var today = new Date();var month = today.getMonth()+1;var year = today.getFullYear();var wday = today.getDay();var day = today.getDate();
        switch(when) {
            case 'heu': von = day+'.'+(month)+'.'+year;bis = day+'.'+(month)+'.'+year;break;
	    case 'mo':
		var reqDate = today; reqDate.setDate(day+1);von = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		bis=von;
		break;
	    case 'heumo':
		var reqDate = today;                        von = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		var reqDate = today; reqDate.setDate(day+1);bis = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		break;
	    case 'wo':
		var reqDate = today; reqDate.setDate(day+(6-wday));von = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		                     reqDate.setDate(reqDate.getDate()+1);       bis = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		break;

            case 'os': var reqDate = this.parse_value(this.getEaster(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()));
		bis = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		reqDate.setDate(reqDate.getDate()-3);
		von = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();break;
            case 'hi': var reqDate = this.parse_value(this.getEaster(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()));
		reqDate.setDate(reqDate.getDate()+38);
		von = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		reqDate.setDate(reqDate.getDate()+3);
		bis = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();break;
            case 'pf': var reqDate = this.parse_value(this.getEaster(this.today.getFullYear(), this.today.getMonth(), this.today.getDate()));
		reqDate.setDate(reqDate.getDate()+47);
		von = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();
		reqDate.setDate(reqDate.getDate()+2);
		bis = reqDate.getDate()+'.'+(reqDate.getMonth()+1)+'.'+reqDate.getFullYear();break;

            case 'ok': y=0;if (month == 12 && day > 26){y=1;}von = '3.10.'+(year+y);bis = '3.10.'+(year+y);break;
            case 'wei': y=0;if (month == 12 && day > 26){y=1;}von = '24.12.'+(year+y);bis = '26.12.'+(year+y);break;
        }
        return 'document.getElementById(\''+this.von+'\').value=(\''+von+'\');document.getElementById(\''+this.bis+'\').value=(\''+bis+'\');document.getElementById(\'id_'+this.id+'\').style.display=\'none\';return false;'
    }

    this.getEaster = function (year, month, day) {
        var curDate = new Date();
        a = year % 19;b = year % 4;c = year % 7;k = year / 100;q = k / 4;p = ((8 * k) + 13) / 25;Egz = (38 - (k - q) + p) % 30;M = (53 - Egz) % 30;N = (4 + k - q) % 7;d = ((19 * a) + M) % 30;e = ((2 * b) + (4 * c) + (6 * d) + N) % 7;
        if ((22 + d + e) <= 31) {day = 22 + d + e;month = 3;}
        else {
            day = d + e - 9;month = 4;
            if (day == 26) day = 19;
            else if ((day == 25) && (d == 28) && (a > 10)) day = 18;
        }
        day = Math.ceil(day);
        if ((month < curDate.getMonth() && year == curDate.getFullYear()) || (month == curDate.getMonth() && year == curDate.getFullYear() && day > curDate.getDate()))
            easter = this.getEaster(year+1, month, day);
        else
            easter = day+'.'+month+'.'+year;
      return easter;
    }

    this.build = function() {
        var html = '<div class="calendar" style="width:'+(200+this.extended)+'px;top:'+(this.findPosY()+25)+'px;left:'+(this.findPosX())+'px;"><div>';
        html += '<a href="#" onclick="document.getElementById(\'id_'+this.id+'\').style.display=\'none\';return false;" class="close"><img src="/.img/apps/mini_icons2/cross.gif" alt="X" /></a><a href="#" onclick="var cal = new calendar(document.getElementById(\''+this.id+'\'));cal.init(\''+this.prevyear()+'\', document.getElementById(\''+this.von+'\'), document.getElementById(\''+this.bis+'\'));return false" class="b_link"><img src="/.img/apps/16x16_mono/fast_back.gif" alt="&lt;&lt;" /></a><a href="#" onclick="var cal = new calendar(document.getElementById(\''+this.id+'\'));cal.init(\''+this.prevmonth()+'\', document.getElementById(\''+this.von+'\'), document.getElementById(\''+this.bis+'\'));return false" class="b_link"><img src="/.img/apps/16x16_mono/prev.gif" alt="&lt;" /></a> <strong>'+this.months[this.month]+' '+this.year+'</strong> <a href="#" onclick="var cal = new calendar(document.getElementById(\''+this.id+'\'));cal.init(\''+this.nextmonth()+'\', document.getElementById(\''+this.von+'\'), document.getElementById(\''+this.bis+'\'));return false" class="b_link"><img src="/.img/apps/16x16_mono/next.gif" alt="&gt;" /></a><a href="#" onclick="var cal = new calendar(document.getElementById(\''+this.id+'\'));cal.init(\''+this.nextyear()+'\', document.getElementById(\''+this.von+'\'), document.getElementById(\''+this.bis+'\'));return false" class="b_link"><img src="/.img/apps/16x16_mono/fast_forward.gif" alt="&gt;&gt;" /></a>';
        html += '<table><tr>';
        for (var n=1; n<7; n++) {
            html += '<th>'+this.days[n]+'</th>';
        }
        html += '<th>'+this.days[0]+'</th>';
        if (this.extended) {
            html += '<td rowspan="7" class="weekend special"><b>'+this.special.title+'</b><ul>';
            for (var n in this.specialorder) {
                var s = this.specialorder[n];
                html += '<li><a href="#" onclick="'+this.special_time(s)+'">'+this.special[s]+'</a></li>';
            }
            html += '</ul></td>';
        }
        html += '</tr>';
        for (var i=1; i<=6; i++){
            html +=('<tr>');
            for (var n=0; n<7; n++){
                if ((this.work_date.getDate() == this.orig_date.getDate()) && (this.work_date.getMonth() == this.orig_date.getMonth()) && (this.work_date.getFullYear() == this.orig_date.getFullYear()))
                    html +=('<td class="days today">');
                else if (this.work_date.getDay() == 0 || this.work_date.getDay() == 6)
                    html +=('<td class="days weekend">');
                else
                    html +='<td class="days workdays">';

                html +='<a';
                if (this.work_date.getMonth() != this.date.getMonth())
                    html +=(' class="inactive"');
                html +=' href="#" onclick="document.getElementById(\''+this.id+'\').value=(\''+this.work_date.getDate()+'.'+(this.work_date.getMonth()+1)+'.'+this.work_date.getFullYear()+'\');document.getElementById(\'id_'+this.id+'\').style.display=\'none\';if (typeof(document.getElementById(\''+this.id+'\').update) == \'function\') document.getElementById(\''+this.id+'\').update(); return false;">';
                html +=(this.work_date.getDate()+'</a></td>');
                this.work_date.setDate(this.work_date.getDate()+1);
            }
            html +=('</tr>');
        }
        html += '</table></div></div>';
        return html;
    }

    this.show = function() {
        if (document.getElementById('id_'+this.id)) {
            this.hideall();
            document.getElementById('id_'+this.id).innerHTML = this.build();
            document.getElementById('id_'+this.id).style.display='block';
        } else {
            this.hideall();
            this.calendar = document.createElement('div');
            this.calendar.id = 'id_'+this.id;
            global_cal_ids.push('id_'+this.id);
            this.calendar.innerHTML = this.build();
            document.getElementsByTagName('body')[0].appendChild(this.calendar);
        }
    }

    this.hideall = function() {
        for (var i=global_cal_ids.length;i>=0;i--) {
            if (global_cal_ids[i] && document.getElementById(global_cal_ids[i]).style.display != 'none')
                document.getElementById(global_cal_ids[i]).style.display = 'none';
        }
    }
}

function init() {
    var cal = new calendar(this);cal.init(this.value);
}

function calendar_init() {
    var inputs = document.getElementsByTagName('input');var foundsome = false;
    if (inputs) {
        for (var i=inputs.length;i>=0;i--) {
            if (inputs[i] && (inputs[i].getAttribute('type')=='date' || inputs[i].className.indexOf('date') != -1) && ! inputs[i].onclick)
                addEvent(inputs[i], 'click', init);
        }
    }
}
calendar_init();

