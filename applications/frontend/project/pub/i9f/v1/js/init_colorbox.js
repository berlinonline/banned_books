(function($, document) {
    $(document).ready(function(){
        $('a.gallery').each(function(index, element){
            $(element).colorbox({
                preload:false,
                transition:"none",
                innerWidth:"800px",
                innerHeight:"600px",
                rel:"colorbox",
                onComplete:function(){
                  //$("#cboxTitle").hide();
                },
                //html: '<iframe class="cboxIframe" src="'+ $(element).attr('href') +'" frameborder="0" scrolling="no" allowfullscreen></iframe>',
                fixed: true
            });
        });
    });
})(jQuery, document);
