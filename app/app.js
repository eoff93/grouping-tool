'use strict';

angular.module('groupApp',[])
  .controller('MainController', function() {
    var vm = this;
    vm.addSite = function() {
      vm.sites.push({
        id: vm.sites.length + 1,
        url: vm.url,
        color: vm.color,
        groups: []
      });
      vm.url = '';
      vm.color = '';
    }

    vm.sites = [];

    vm.groups = [
      {
        id: 1,
        name: 'Search engines',
        color: "",
        sites: []
      },
      {
        id: 2,
        name: 'Social sites',
        color: "",
        sites: []
      }
    ];
  });
