(function () {
    'use strict';

    angular
        .module('oipa', [
            // 'ngAnimate',
            'angulartics',
            'angulartics.google.analytics',
            'checklist-model',
            'ui.bootstrap-slider',
            'ncy-angular-breadcrumb',
            'angularUtils.directives.dirPagination',
            'nvd3',
            'leaflet-directive',
            'infinite-scroll',
            'oipa.constants',
            'oipa.config',
            'oipa.routes',
            'oipa.layout',
            'oipa.partials',
            'oipa.charts',
            'oipa.search',
            'oipa.toolbar',
            'oipa.aggregations',
            'oipa.countries',
            'oipa.regions',
            'oipa.locations',
            'oipa.sectors',
            'oipa.filters',
            'oipa.budget',
            'oipa.activityStatus',
            'oipa.pages',
            'oipa.implementingOrganisations',
            'oipa.bubbleChart',
            'oipa.sunburst',
            'oipa.geovis',
            'oipa.tabs',
            'oipa.activities',
            'oipa.policyMarkers',
            'oipa.stackedBarChart',
            'oipa.searchPage',
            'oipa.contact'
        ]);

    angular
        .module('oipa.constants', []);

    angular
        .module('oipa.config', ['angularUtils.directives.dirPagination']);

    angular
        .module('oipa.routes', ['ui.router']);

    angular
        .module('oipa')
        .run(run);

    run.$inject = ['$http', '$rootScope', '$state'];

    function run($http, $rootScope, $state) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';

        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
          if (to.redirectTo) {
            evt.preventDefault();
            $state.go(to.redirectTo, params)
          }
        });
    }

})();
