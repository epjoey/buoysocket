define(["underscore"], 

function(_) {
  
  return {

    hijackLinks: function(router) {
      $(document).on('click', 'a:not([data-bypass])', function (event) {
        var href = $(this).attr('href')
          , protocol = this.protocol + '//';

        if (href.slice(protocol.length) !== protocol) {
          event.preventDefault();
          router.navigate(href, true);
        }
      });
    }



  }

});