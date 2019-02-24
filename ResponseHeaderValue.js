(function() {
    var ResponseHeaderValue;

    ResponseHeaderValue = function() {
        this.evaluate = function(context) {
            var exchange;
            if (this.req) {
                exchange = this.req.getLastExchange();
            } else {
                exchange = context.getCurrentRequest().getLastExchange();
            }

            return exchange.responseHeaders[this.name];
        };
        this.title = function() {
            return "Response Header Value";
        };
    };

    ResponseHeaderValue.identifier = "com.archangelsdy.PawExtensions.ResponseHeaderValue";

    ResponseHeaderValue.title = "Response Header Value";

    ResponseHeaderValue.inputs = [
        InputField("req", "Source Request", "Request"),
        InputField("name", "Header Name", "String")
    ];

    registerDynamicValueClass(ResponseHeaderValue);

}).call(this);
