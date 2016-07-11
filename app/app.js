'use strict';

angular.module('groupApp',[])
  .controller('MainController', function() {
    var vm = this;

    vm.sites = [];
      /*
      {
        id: 1,
        url: 'google.com',
        color: 'green',
        groups: []
      },
      */
    vm.groups = [];

      /*
      {
        id: 1,
        name: 'Search engines',
        color: "",
        sites: []
      },
      */
  });
