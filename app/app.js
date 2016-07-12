'use strict';

angular.module('groupApp',[])
  .controller('MainController', function() {
    var vm = this;

    // adds a website from a modal and resets the forms
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

    // adds a group from a modal and resets the forms
    vm.addGroup = function() {
      vm.groups.push({
        id: vm.groups.length + 1,
        name: vm.name,
        color: vm.color
      });
      vm.name = '';
      vm.color = '';
    }

    vm.sites = [];
    vm.groups = [];
  });
