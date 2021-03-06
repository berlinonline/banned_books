/* ----- bde_2010 ----- */
var bde_2010 = {
  navTimeoutHandlerOpen : 0,
  navTimeoutHandlerClose : 0,
  navOpenable : false,
  navIsMobile : false,
  Time:
  {
      Nav:
      {
          //Wait for opening Nav
          enter: 250,
          //Wait for closing Nav
          leave: 250,
          //Time for Open animation
          open: 200,
          //Time for Close animation
          close: 100
      },
      Tab:
      {
          //Time to wait between auto-switches
          auto: 5000,
          //Time for fading animation
          fading: 400
      }
  },
  activeLink : '',
  navBlock : {
    kultur_und_tickets : '<div class="col col1">\
  <div class="teaser">\
    <div class="inner"> \
      <div class="mobile_only">\
          <h3><a href="/kultur-und-tickets/">Kultur &amp; Ausgehen - Startseite</a></h3>\
      </div>\
      <h3><a href="/kultur-und-tickets/">Termine</a></h3>\
      <ul class="blocklinks">\
        <li><a href="/tickets/konzert-highlights/">Konzert-Highlights</a></li>\
        <li><a href="/kino/">Kinoprogramm</a></li>\
        <li><a href="/ausstellungen/">Ausstellungen</a></li>      \
        <li><a href="/tickets/suche/az-veranstaltungen.php/veranstaltungen/">Veranstaltungen A - Z</a></li>      \
        </ul>\
      <h3><a href="/kultur-und-tickets/tipps/">Tipps</a></h3>      \
      <ul class="blocklinks">\
        <li><a href="/kultur-und-tickets/tipps/">Stadtleben</a></li>\
        <li><a href="/clubs-und-party/party-tipps/">Party-Tipps</a></li>\
        <li><a href="/wochenend-tipps/">Wochenende</a></li>\
        <li><a href="/kultur-und-tickets/gay/">Gay Berlin</a></li>\
      </ul>\
    </div>\
  </div>\
</div>\
<div class="col col2">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/tickets/shop/">Tickets</a></h3>\
      <ul class="blocklinks">\
        <li><a href="/tickets/musical-und-show/">Musical &amp; Show</a></li>\
        <li><a href="/tickets/kabarett-und-comedy/">Kabarett &amp; Comedy</a></li>\
        <li><a href="/tickets/theater">Theater</a></li>\
        <li><a href="/tickets/oper-und-tanz">Oper &amp; Tanz</a></li>\
        <li><a href="/tickets/rock-pop-jazz/">Rock, Pop, Jazz</a></li>\
        <li><a href="/tickets/open-air/">Open-Air</a></li>\
        <li><a href="/tickets/klassische-konzerte">Klassische Konzerte</a></li>\
        <li><a href="/tickets/kinder/">Kinder</a></li>\
        <li><a href="/tickets/literatur/">Literatur</a></li>\
      </ul>\
    </div>\
  </div>\
</div>\
<div class="col col3">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/orte/">Adressen</a></h3>\
      <ul class="blocklinks">\
        <li><a href="/orte/museum/">Museumsführer</a></li>\
        <li><a href="/kino/_bin/azkino.php">Kinos A - Z</a></li>\
        <li><a href="/restaurants/">Restaurants</a></li>\
        <li><a href="/clubs-und-party/">Clubs</a></li>\
        <li><a href="/orte/kultur/">Kulturorte</a></li>\
        <li><a href="/kultur-und-tickets/adressen/">Weitere Adressen</a></li>\
      </ul>\
      <h3><a href="/kultur-und-tickets/nachrichten/">Weitere Angebote</a></h3>\
        <ul class="blocklinks">\
            <li><a href="/kultur-und-tickets/nachrichten/">Kultur-Nachrichten</a></li>\
            <li><a href="/kultur-und-tickets/fotos/">Fotos aus Kultur & Stadtleben</a></li>\
    </div>\
  </div>\
</div>',
    rubrik_politik_und_verwaltung : '<div class="col col1">\
  <div class="teaser">\
    <div class="inner">\
      <div class="mobile_only">\
          <h3><a href="/rubrik/politik-und-verwaltung/">Politik, Verwaltung, B&uuml;rger - Startseite</a></h3>\
      </div>\
      <h3><a href="/landespressestelle/">Presse  &amp; Newsletter</a></h3>\
      <ul class="blocklinks">\
        <li><a 
href="/pressemitteilungen/archiv/index/search?institutions%5B%5D=Presse-+und+Informationsamt+des+Landes+Berlin&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Bildung%2C+Jugend+und+Wissenschaft&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Finanzen&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Gesundheit%2C+und+Soziales&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Arbeit%2C+Integration+und+Frauen&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Inneres+und+Sport&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Justiz+und+Verbraucherschutz&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Stadtentwicklung+und+Umwelt&institutions%5B%5D=Senatsverwaltung+f%C3%BCr+Wirtschaft%2C+Technologie+und+Forschung&institutions%5B%5D=Senatskanzlei+-+Kulturelle+Angelegenheiten">Aktuelle 
Mitteilungen</a></li>\
        <li><a href="/pressemitteilungen/archiv/user/signupnewsletter">Abonnement</a></li>\
      </ul>\
      <h3><a href="/politik-und-verwaltung/buergerservice/">B&uuml;rgerservice</a></h3>\
        <ul>\
            <li><a href="http://service.berlin.de/">Verwaltungsservice</a></li>\
            <li><a href="/verwaltungsfuehrer/buergerberatung">B&uuml;rger&auml;mter, -beratung</a></li>\
            <li><a href="/buergeraktiv">B&uuml;rgerschaftliches Engagement</a></li>\
            <li><a href="/rbmskzl/kontakt">B&uuml;rgerkontakt - Ihre Anregungen</a></li>\
        </ul>\
    </div>\
  </div>\
</div>\
<div class="col col2">\
  <div class="teaser">\
    <div class="inner">\
    <h3><a href="/rubrik/politik-und-verwaltung/">Parlament, Regierung, Gerichte</a></h3>\
    <ul>\
        <li><a href="http://www.parlament-berlin.de/pari/web/wdefault.nsf/vHTML/A00?OpenDocument" target="_blank">Abgeordnetenhaus</a></li>\
        <li><a href="/rbmskzl/rbm/senat">Senat von Berlin</a></li>\
        <li><a href="/rbmskzl">Der Regierende B&uuml;rgermeister</a></li>\
        <li><a href="/sen/justiz/gerichte">Gerichte</a></li>\
    </ul>\
    <h3><a href="/politik-und-verwaltung/senatsverwaltungen/">Beh&ouml;rden</a></h3>\
    <ul>\
        <li><a href="/politik-und-verwaltung/senatsverwaltungen">Senatsverwaltungen</a></li>\
        <li><a href="/politik-und-verwaltung/bezirksaemter">Bezirks&auml;mter</a></li>\
        <li><a href="/polizei/">Polizei</a></li>\
        <li><a href="http://service.berlin.de/behoerde/">Beh&ouml;rden A-Z</a></li>\
    </ul>\
    </div>\
  </div>\
</div>\
<div class="col col3">\
  <div class="teaser">\
    <div class="inner">\
    <h3><a href="/berlin-im-ueberblick/hauptstadt/">Hauptstadt Berlin</a></h3>\
    <ul>\
        <li><a href="/berlin-im-ueberblick/">Berlin im &Uuml;berblick</a></li>\
        <li><a href="/berlin-im-ueberblick/zahlenfakten/">Zahlen & Fakten</a></li>\
        <li><a href="/berlin-im-ueberblick/hauptstadt/verfassungsorgane.html">Bundeseinrichtungen</a></li>\
        <li><a href="/rbmskzl/europa/">Berlin & Europa</a></li>\
        <li><a href="/rbmskzl/staedteverbindungen/">Berlin International</a></li>\
        <li><a href="http://www.berlin-brandenburg.de/">Berlin-Brandenburg</a></li>\
    </ul>\
    </div>\
  </div>\
</div>',
    special : '<div class="col col1">\
  <div class="teaser">\
    <div class="inner">\
      <div class="mobile_only">\
        <h3><a href="/special/">Themen - Startseite</a></h3>\
      </div>\
        <h3><a href="/special/shopping/">Shopping</a></h3>\
        <ul>\
            <li><a href="/special/shopping/einkaufsmeilen/">Einkaufsmeilen</a></li>\
            <li><a href="/special/shopping/einkaufscenter/">Einkaufscenter</a></li>\
            <li><a href="/special/shopping/design-in-berlin/">Berliner Designer</a></li>\
        </ul>\
      <h3><a href="/special/gesundheit-und-beauty/">Gesundheit & Beauty</a></h3>\
      <ul class="blocklinks">\
      <li><a href="/special/gesundheit-und-beauty/gesundheit/">Gesundheit </a></li>\
      <li><a href="/special/gesundheit-und-beauty/beauty-und-wellness/">Wellness & Beauty </a></li>\
      <li><a href="/special/gesundheit-und-beauty/ernaehrung/">Ern&auml;hrung </a></li>\
      </ul>\
    </div>\
  </div>\
</div>\
<div class="col col2">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/special/immobilien-und-wohnen/">Immobilien & Wohnen</a></h3>\
      \
      <ul class="blocklinks">\
      <li><a href="/special/immobilien-und-wohnen/suche/">Immobiliensuche </a></li>\
      <li><a href="/special/immobilien-und-wohnen/mietrecht/">Mietrecht & Urteile</a></li>\
      <li><a href="/special/immobilien-und-wohnen/stadtteile/">Stadtteile </a></li>\
      </ul>\
      \
      <h3><a href="/special/jobs-und-ausbildung/">Jobs & Ausbildung</a></h3>\
      \
      <ul class="blocklinks">\
      <li><a href="/special/jobs-und-ausbildung/stellenmarkt/">Stellenmarkt </a></li>\
      <li><a href="/special/jobs-und-ausbildung/uni-und-studium/">Uni & Studium </a></li>\
      <li><a href="/special/jobs-und-ausbildung/weiterbildung-und-sprachkurse/">Weiterbildung & Sprachkurse </a></li>\
      </ul>\
      \
    </div>\
  </div>\
</div>\
<div class="col col3">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/special/reise/">Reisen & Ausfl&uuml;ge</a></h3>\
      <ul class="blocklinks">\
      <li><a href="/special/reise/brandenburg/">Brandenburg</a></a></li>\
      <li><a href="/special/reise/ostsee/">Ostsee </a></li>\
      <li><a href="/special/reise/staedtereisen/">St&auml;dtereisen</a></li> \
      </ul>\
      <h3><a href="/special/">Weitere Themen</a></h3>\
      <ul class="blocklinks">\
      <li><a href="/special/auto-und-motor/">Auto & Motor</a></li>\
      <li><a href="/special/finanzen-und-recht/">Finanzen & Recht</a></li>\
      <li><a href="/special/computer-und-handy/">Computer & Handy </a></li>\
      </ul>\
    </div>\
  </div>\
</div>',
    tourismus : '<div class="col col1">\
  <div class="teaser">\
    <div class="inner">\
      <div class="mobile_only">\
          <h3><a href="/tourismus/">Tourismus - Startseite</a></h3>\
      </div>\
        <h3><a href="/tourismus/sightseeing/">Sightseeing</a></h3>\
        <ul>\
        <li><a href="/tourismus/stadtrundfahrten/">Stadtrundfahrten</a></li>\
        <li><a href="/tourismus/dampferfahrten/">Schiffstouren</a></li>\
        <li><a href="/tourismus/stadtfuehrungen/">Stadtf&uuml;hrungen</a></li>\
        <li><a href="/tourismus/parks-und-gaerten/">Parks &amp; G&auml;rten</a></li>\
        <li><a href="/tourismus/zoos-und-tierparks/">Zoos &amp; Tierparks</a></li>\
        <li><a href="/orte/museum">Museen</a></li>\
        <li><a href="/orte/sehenswuerdigkeiten/">Sehensw&uuml;rdigkeiten A-Z</a></li>\
    	</ul>\
    </div>\
  </div>\
</div>\
<div class="col col2">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/tourismus/unterkunft/">Hotels &amp; Unterk&uuml;nfte</a></h3>\
      <ul>\
        <li><a href="/tourismus/unterkunft/hotels/">Hotels suchen & buchen</a></li>\
        <li><a href="/tourismus/unterkunft/luxushotels/">Luxushotels</a></li>\
        <li><a href="/ferienwohnungen/">Ferienwohnungen</a></li>\
        <li><a href="/tourismus/unterkunft/themenhotels/">Themenhotels</a></li>\
        <li><a href="/tourismus/unterkunft/herbergen/">Herbergen &amp; Hostels</a></li>\
        <li><a href="/tourismus/unterkunft/gruppen/">Gruppenunterk&uuml;nfte</a></li>\
        <li><a href="/tourismus/klassenfahrt/">Klassenfahrt</a></li>\
      </ul>        \
    </div>\
  </div>\
</div>\
<div class="col col3">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/tourismus/infos">Weitere Angebote</a></h3>\
      <ul>\
        <li><a href="/tourismus/infos/">Berlin Infos A-Z</a></li>\
        <li><a href="/tourismus/infos/nahverkehr">Nahverkehr</a></li>\
        <li><a href="/special/shopping/">Shopping</a></li>\
        <li><a href="/restaurants/">Restaurants</a></li>\
        <li><a href="/tourismus/adressen/">Adressen</a></li>\
        <li><a href="/tourismus/fotos/">Fotos aus Berlin</a></li>\
      </ul>\
    </div>\
  </div>\
</div>',
    wirtschaft : '<div class="col col1">\
  <div class="teaser">\
    <div class="inner">\
      <div class="mobile_only">\
          <h3><a href="/wirtschaft/">Wirtschaft - Startseite</a></h3>\
      </div>\
      <h3><a href="/wirtschaft/wirtschaftsstandort/">Wirtschaftsstandort Berlin</a></h3>\
      <ul class="blocklinks">\
        <li><a href="/wirtschaft/wirtschaftsstandort/zahlen-daten-fakten-standortvorteile/">Zahlen, Daten, Fakten</a></li>\
        <li><a href="/wirtschaft/wirtschaftsstandort/gewerbeimmobilien">Gewerbeimmobilien</a></li>\
        <li><a href="/wirtschaft/wirtschaftsstandort/existenzgruendung-unternehmensnachfolge/">Existenzgr&uuml;ndung und Unternehmensnachfolge</a></li>\
        <li><a href="/wirtschaft/wirtschaftsstandort/investieren-in-berlin/">Investieren in Berlin</a></li>\
        <li><a href="/wirtschaft/messekalender/">Messekalender</a></li>\
      </ul>\
    </div>\
  </div>\
</div>\
<div class="col col2">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/wirtschaft/wirtschaftsstandort/finanzierung-und-foerderung/">Finanzierung und F&ouml;rderung</a></h3>\
      <ul class="blocklinks">\
        <li><a href="/wirtschaft/wirtschaftsstandort/finanzierung-und-foerderung/investitionsfoerderung">Investitionsf&ouml;rderung</a></li>\
        <li><a href="/wirtschaft/wirtschaftsstandort/finanzierung-und-foerderung/innovationsfoerderung">Innovationsf&ouml;rderung</a></li>\
      </ul>\
      <h3><a href="/wirtschaft/arbeitsmarkt/">Arbeitsmarkt</a></h3>\
      <ul class="blocklinks">\
        <li><a href="/wirtschaft/arbeitsmarkt/ausbildung/">Ausbildung</a></li>\
        <li><a href="/wirtschaft/arbeitsmarkt/weiterbildung/">Weiterbildung</a></li>\
        <li><a href="/wirtschaft/arbeitsmarkt/jobsuche/">Jobsuche</a></li>\
      </ul>\
    </div>\
  </div>\
</div>\
<div class="col col3">\
  <div class="teaser">\
    <div class="inner">\
      <h3><a href="/wirtschaft/wissenschaft-und-innovation/">Wissenschaft</a></h3>\
      <ul class="blocklinks">\
        <li><a href="/wirtschaft/wissenschaft-und-innovation/technologieparks-technologiezentren">Technologieparks und -zentren</a></li>\
        <li><a href="/wirtschaft/wissenschaft-und-innovation/netzwerke-kooperationen">Netzwerke und Kooperationen</a></li>\
      </ul>\
      <h3><a href="/wirtschaft/service">Service</a></h3>\
      <ul class="blocklinks">\
            <li><a href="/wirtschaft/service/ansprechpartner/">Ansprechpartner</a></li>\
            <li><a href="/wirtschaft/service/information/reiseservice/">Reiseservice</a></li>\
            <li><a href="/branchenbuch/">Branchenbuch</a></li>\
        </ul>\
    </div>\
  </div>\
</div>'

  },
  goodBrowser : !/MSIE [0-7]/.test(navigator.userAgent),

  toggleNav : function(el) {
    if(this.activeLink == el.attr('href')) {
      this.closeNav();
    }
    else {
      this.openNav(el);
    }
  },

  openNav : function(el) {
    var aClass = el.attr('class');
    var navUrl = this.navUrl(el);
    var blockName = this.blockName(el);
    jQuery('.singlenav').addClass('x-singlenav').removeClass('singlenav');
    this.navOpenable = true;
    //jQuery('#bo_supernavigation').html('<div style="text-align:center;margin-top:-1em;"><img src="_css/supernavigation_load.gif" alt="Loading..." /></div>');
    jQuery('#main_navigation .superactive').removeClass('superactive');
    if(blockName && typeof(this.navBlock[blockName]) !== undefined && this.navBlock[blockName]) {
      bde_2010.makeNav(this.navBlock[blockName],el);
    }
    else if(navUrl) {
      jQuery.ajax({
        url: navUrl,
        success: function(data) { bde_2010.makeNav(data,el); }
      });
    }
    this.activeLink = el.attr('href');
  },

  closeNav : function() {
    if(this.activeLink != '') {
      this.navOpenable = false;
      jQuery('.x-singlenav').addClass('singlenav');
      if(this.goodBrowser) {
        if (bde_2010.navIsMobile == true) {
            //jQuery('#bo_supernavigation').animate({width: 'hide'});
            jQuery('#bo_supernavigation').slideUp(bde_2010.Time.Nav.close);
            // show content
            //jQuery('#bo_box').slideDown();
        }
        else
        {
            jQuery('#bo_supernavigation').slideUp(bde_2010.Time.Nav.close);
        }
      }
      else {
        jQuery('#bo_supernavigation').hide();
      }
      jQuery('#main_navigation .superactive').removeClass('superactive');
      jQuery('#main_navigation .inactive').removeClass('inactive');
      this.activeLink = '';
    }
  },

  tabSwitch: function(anchor) {
    var parent = anchor.parents('.tab');
    window.clearTimeout(bde_2010.tabTimer);
    var oldactive = parent.find('div.active');
    var actives = parent.find('.active');
    if(anchor.parents('.tab_stage').length != 0) {
      bde_2010.tabLast =  anchor.parents('li').next('li').find('a');
      bde_2010.tabTimer = window.setTimeout(bde_2010.tabNext, bde_2010.Time.Tab.auto);
      actives.removeClass('active');
      oldactive.fadeOut(bde_2010.Time.Tab.fading);
      jQuery(anchor.attr('href').replace(/^[^#]*/, '')).fadeIn(bde_2010.Time.Tab.fading).addClass('active');
    }
    else {
      actives.removeClass('active');
      oldactive.hide();
      jQuery(anchor.attr('href').replace(/^[^#]*/, '')).show().addClass('active');
      anchor.parents('li').addClass('active');
    }
    anchor.parents('li').addClass('active');
  },

  tabLast: null,
  tabTimer: null,
  tabNext: function() {
    if(bde_2010.tabShow) {
      if(!bde_2010.tabLast || bde_2010.tabLast.length < 1) {
        bde_2010.tabLast =  jQuery('.tab_stage .tab_control a').first();
      }
      bde_2010.tabSwitch(bde_2010.tabLast);
    }
  },
  tabShow: true,
  tabShowStart: function() {
    window.clearTimeout(bde_2010.tabTimer);
    bde_2010.tabTimer = window.setTimeout(bde_2010.tabNext, bde_2010.Time.Tab.auto);
    bde_2010.tabShow = true;
  },
  tabShowStop: function() {
    bde_2010.tabShow = false;
  },

  navUrl: function(el) {
    var url = el.attr('href').replace(/http:\/\/.+?\//,'/').replace(/(\/)?(\?.*)?$/,'').replace(/\//g,'_');
    return '/_bde/js/navigation/'+url+'.html';
  },
  blockName: function(el) {
    var url = el.attr('href').replace(/http:\/\/.+?\//,'/').replace(/(\/)?(\?.*)?$/,'').replace(/^\//,'').replace(/[\/\-]/g,'_');
    return url;
  },

  makeNav: function(data,el) {
    data = data.replace(/(href=")(\/)/gi,'$1http://www.berlin.de$2');
    jQuery('#bo_supernavigation').html(data+'<a href="#" onclick="bde_2010.closeNav();return false;" class="close"><span class="sprite_bde">X</span> Schlie&szlig;en</a>');
    el.parent().addClass('superactive');
    jQuery('#main_navigation .active').addClass('inactive');
    if (bde_2010.goodBrowser) {
      if (bde_2010.navIsMobile == true) {
          //jQuery('#bo_supernavigation').animate({width: 'show'});
          jQuery('#bo_supernavigation').slideDown(bde_2010.Time.Nav.open);
          // hide content
          //jQuery('#bo_box').slideUp();
      }
      else
      {
          jQuery('#bo_supernavigation').slideDown(bde_2010.Time.Nav.open);
      }
    }
    else {
      jQuery('#bo_supernavigation').show();
    }
  },

  toggleMobileCss: function() {
    if(!document.cookie || document.cookie.indexOf('bo_nomobile') == -1) {
      var a = new Date();
      a = new Date(a.getTime() +1000*60*60*24*365);
      document.cookie = 'bo_nomobile=nomobile; expires='+ a.toGMTString()+'; path=/;';
      location.href = location.href.replace(/(#.*?)?$/,"#desk");
    }
    else {
      document.cookie = 'bo_nomobile=0; expires=01-Jan-70 00:00:01 GMT; path=/;';
      location.href = location.href.replace(/(#.*?)?$/,"#mobi");
    }
    location.reload();
    return false;
  },

  end : 0
}
/* ----- Onload ----- */
jQuery(document).ready(function(){
  if (jQuery('#bo_page').width() < 340) {
    if (jQuery('#bo_page #alles #navigation').css('display') == 'none') {
      jQuery('#mobile_main_navigation ul').append('<li class="last"><a href="#" id="lmnavigation">Navigation</a></li>');
      jQuery('#lmnavigation').click(function(){
        jQuery('#mobile_main_navigation a.openmainnav').parent('li').removeClass('back');
        jQuery('#bo_page #alles #navigation').addClass('mobile').toggleClass('open');
        jQuery('#mobile_main_navigation a.openmainnav').html(jQuery('#mobile_main_navigation a.openmainnav').parent('li').hasClass('back')? 'zur&uuml;ck' : 'Alle Rubriken');
        jQuery('#main_navigation').removeClass('open');
        jQuery('#bo_supernavigation').hide();
        jQuery('#alles').removeClass('mobile_hide');
        jQuery('#containerbereich').toggleClass('mobile_hide');
        jQuery('#lmnavigation').parent('li').toggleClass('back');
        jQuery(this).html(jQuery('#lmnavigation').parent('li').hasClass('back')? 'zur&uuml;ck' : 'Navigation');
      });
    }
    if (jQuery('#bdenavi').css('display') == 'none') {
      jQuery('#mobile_main_navigation ul').append('<li class="last"><a href="#" id="lmnavigation">Navigation</a></li>');
      jQuery('#lmnavigation').click(function(){
        jQuery('#mobile_main_navigation a.openmainnav').parent('li').removeClass('back');
        jQuery('#bdenavi').addClass('mobile').toggleClass('open');
        jQuery('#mobile_main_navigation a.openmainnav').html(jQuery('#mobile_main_navigation a.openmainnav').parent('li').hasClass('back')? 'zur&uuml;ck' : 'Alle Rubriken');
        jQuery('#main_navigation').removeClass('open');
        jQuery('#bo_supernavigation').hide();
        jQuery('#bdecontainer').removeClass('mobile_hide');
        jQuery('#lmnavigation').parent('li').toggleClass('back');
        jQuery(this).html(jQuery('#lmnavigation').parent('li').hasClass('back')? 'zur&uuml;ck' : 'Navigation');
      });
	  }
  }

  // switcher for .t_stage
  if(jQuery('.tab_control a').length > 1) {
    jQuery('.tab_control a').bind('click',function(event){
      event.preventDefault();
      bde_2010.tabSwitch(jQuery(this));
      if(typeof reloadCp != 'undefined') {
        reloadCp();
      }
    }).addClass('ui-clickable');
	jQuery('.tab_stage .t_stage a.more').each(function(idx,anchor) {
		jQuery(anchor).parents('.inner').css('cursor','pointer');
		jQuery(anchor).parents('.inner').click(function() {
			anchor.click();
		});
	});
    bde_2010.tabLast =  jQuery('.tab_stage .tab_control a').eq(1);
    bde_2010.tabTimer = window.setTimeout(bde_2010.tabNext, bde_2010.Time.Tab.auto);
    jQuery('.tab_stage').bind('mouseover', bde_2010.tabShowStop);
    jQuery('.tab_stage').bind('mouseout', bde_2010.tabShowStart);
  }

  // do not open layer after click
  jQuery('#main_navigation > ul > li > a').click(function()
    {
        window.clearTimeout(bde_2010.navTimeoutHandlerOpen);
        window.clearTimeout(bde_2010.navTimeoutHandlerClose);
        //bde_2010.closeNav();
        jQuery('#bo_supernavigation').hide();
    }
  );
  jQuery('ul.horizontal.sub > li > a').click(function()
    {
        window.clearTimeout(bde_2010.navTimeoutHandlerOpen);
        window.clearTimeout(bde_2010.navTimeoutHandlerClose);
        //bde_2010.closeNav();
        jQuery('#bo_supernavigation').hide();
    }
  );

      // open layer from MAIN navigation on mosueOVER in nonmobile navigation mode
      jQuery('#main_navigation > ul > li > a').mouseenter(function(){
        if(bde_2010.navIsMobile == false)
        {
            window.clearTimeout(bde_2010.navTimeoutHandlerOpen);
            window.clearTimeout(bde_2010.navTimeoutHandlerClose);
            if(bde_2010.navOpenable) {
              bde_2010.openNav(jQuery(this));
            }
            else {
              var that = this;
              bde_2010.navTimeoutHandlerOpen = window.setTimeout(function(){
                bde_2010.openNav(jQuery(that));
              },bde_2010.Time.Nav.enter);
            }
        }
      });

      // open layer from MAIN navigation on mosueDOWN in mobile navigation mode
      jQuery('#main_navigation > ul > li > a').click(function(event){
        if(bde_2010.navIsMobile == true)
        {
            // show menu ...
            bde_2010.openNav(jQuery(this));
            return false;
        }
      });

  // open layer from SUB navigation
  jQuery('#main_navigation').mouseleave(function(){
    if(bde_2010.navIsMobile == false)
    {
      window.clearTimeout(bde_2010.navTimeoutHandlerOpen);
      bde_2010.navTimeoutHandlerClose = window.setTimeout(function() {
        bde_2010.closeNav();
      },bde_2010.Time.Nav.leave);
    }
  });

  jQuery(".toggle_hover").mouseover(function(){
      jQuery(this).addClass("active-hover");
  }).mouseout(function(){
      jQuery(this).removeClass("active-hover");
  });

  jQuery("div.trakkking a").addClass("trakkking");
  var turls = [], gmap = 1;
  jQuery("div.geomap,div.minimap").each(function() {
	try { _gaq.push(['_trackEvent','gmap','gmapDisplay',this.className]); } catch(err){}
	turls.push('gmap' + (gmap++) + this.className);
  });
  jQuery("a.trakkking").each(function(i,el) {
    var href = el.href;
    if(el.href.indexOf('fwd.fcgi') == -1) {
      el.href='/.bin/fwd.fcgi?'+href;
    }
    else {
      href = href.replace(/^.*\/\.bin\/fwd\.fcgi\?/,"");
    }
    jQuery(el).click(function() {
        try { _gaq.push(['_trackEvent','trakkking','trkFollow',href]); } catch(err){}
        setTimeout(function() { document.location.href = el.href; }, 100);
		return false;
    });
    if (jQuery.inArray(href, turls) == -1) {
	  try { _gaq.push(['_trackEvent','trakkking','trkDisplay',href]); } catch(err){}
      turls.push(href);
    }
  });
  if (turls.length > 0) {
    jQuery.post("/.bin/fwd.fcgi", { keywords : turls});
  }

  // open MAIN navigation from mobile menu
  jQuery('#mobile_main_navigation a.openmainnav').mousedown(function(){
    // tell that you are in mobile usage ...
    bde_2010.navIsMobile = true;
    if(!bde_2010.navOpenable)
    {
        // ... and open main_navigation if supernav is closed:
        jQuery('#lmnavigation').parent('li').removeClass('back');
        jQuery('#lmnavigation').text('Navigation');
	    jQuery('#bo_page #alles #navigation').removeClass('open');
        jQuery('#main_navigation').addClass('mobile').toggleClass('open');
        jQuery('#bo_box').toggleClass('mobile_hide');
        jQuery('#alles').toggleClass('mobile_hide');
        jQuery('#mobile_main_navigation a.openmainnav').parent('li').toggleClass('back');
        jQuery(this).html(jQuery('#mobile_main_navigation a.openmainnav').parent('li').hasClass('back')? 'zur&uuml;ck' : 'Alle Rubriken');
    }
    else
    {
      // ... or close supernav if open:
      window.clearTimeout(bde_2010.navTimeoutHandlerOpen);
      bde_2010.navTimeoutHandlerClose = window.setTimeout(function() {
        bde_2010.closeNav();
      },bde_2010.Time.Nav.leave);
    }
  });

  var socialshare = jQuery('#socialshare');
  if (socialshare && "function" == typeof socialshare.socialSharePrivacy) {
    socialshare.socialSharePrivacy({
      'info_link':'http://www.berlin.de/wir-ueber-uns-be/agb/pp/',
      'css_path':'https://www.berlin.de/_bde/js/socialshareprivacy/bde-ssp.css',
      'services':{
        'facebook':{'dummy_img':'https://www.berlin.de/_bde/js/socialshareprivacy/socialshareprivacy/images/dummy_facebook.png'},
        'twitter':{'dummy_img':'https://www.berlin.de/_bde/js/socialshareprivacy/socialshareprivacy/images/dummy_twitter.png'},
        'gplus':{'dummy_img':'https://www.berlin.de/_bde/js/socialshareprivacy/socialshareprivacy/images/dummy_gplus.png'}}});
  };
});

/*
 * ContentMachine: open popup for gallery
 */
function doPopup(anchor) {
    var url = anchor.href + (anchor.href.match(/\?/) ? "&popup=1" : "?popup=1");
    window.open(url,'popup','width=925,height=664,toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no').focus();
    return false;
}

