import { paths } from "../../../gulpfile.babel";
import path from 'path';

module.exports.register = function (Handlebars) {
    Handlebars.registerHelper('render', function(partialId, options) {
        var selector = 'script[type="text/x-handlebars-template"]#' + partialId,
            source = $(selector).html(),
            html = Handlebars.compile(source)(options.hash);
      
        return new Handlebars.SafeString(html);
    });
}
