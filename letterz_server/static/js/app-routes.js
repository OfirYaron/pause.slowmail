'use strict';

(function () {
  'use strict';

  angular.module('eGeret').config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
})();
//# sourceMappingURL=app-routes.js.map
