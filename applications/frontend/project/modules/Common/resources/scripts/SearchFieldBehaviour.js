(function(document, $, jsb, undefined){
    var SearchFieldBehavior = function(dom_element, options) {
        var that = this;

        this.dom_element = $(dom_element);
        this.input_field = this.dom_element.find('.search-input');
        this.options = options;

        this.input_field.typeahead({
            header: "foobar",
            source: function(query, cb) {
                $.getJSON(that.options.suggest_url, {q: query}, function(data) {
                    cb(data);
                });
            },
            minLength: 3
        });
    };

    SearchFieldBehavior.prototype = {
    };

    jsb.registerHandler('search_field', SearchFieldBehavior);
})(document, jQuery, jsb);
