'use strict';

angular.module('groupApp',[])
  .controller('ListController', function() {
    var vm = this;

    vm.sites = [
      {
        id: 1,
        url: 'google.com',
        color: 'green',
        groups: []
      },
      {
        id: 2,
        url: 'facebook.com',
        color: 'blue',
        groups: []
      },
      {
        id: 3,
        url: 'twitter.com',
        color: 'red',
        groups: []
      },
    ];

    vm.groups = [
      {
        id: 1,
        name: 'Search engines',
        color: "",
        sites: []
      },
      {
        id: 2,
        name: 'Finance sites',
        color: "green",
        sites: []
      }
    ];
  });
