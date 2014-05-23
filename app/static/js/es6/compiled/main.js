(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#auth').on('click', login);
  }
  function login(e) {
    e.preventDefault();
    var formData = $('#loginForm').serialize();
    ajax('/login', 'post', formData, (function(d, ts, jqxhr) {
      $('#loginForm').remove();
      $('.container-fluid').append('<ul class="nav navbar-right navbar-nav"><li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">Settings<b class="caret"></b></a><ul class="dropdown-menu"><li><a href="/logout">Log Out</a></li></ul></li></ul>');
    }), 'json');
  }
  function ajax(url, type) {
    var data = arguments[2] !== (void 0) ? arguments[2] : {};
    var success = arguments[3] !== (void 0) ? arguments[3] : (function(r) {
      return console.log(r);
    });
    var dataType = arguments[4] !== (void 0) ? arguments[4] : 'html';
    $.ajax({
      url: url,
      type: type,
      dataType: dataType,
      data: data,
      success: success
    });
  }
})();

//# sourceMappingURL=main.map
