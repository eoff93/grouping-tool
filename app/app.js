'use strict';

angular.module('groupApp',['checklist-model'])
  .controller('MainController', function() {
    var vm = this;
    vm.tab = 0;
    vm.sites = [];
    vm.groups = [];
    vm.selectedGroups = [];

    // adds a website from a modal and resets the forms
    vm.addSite = function() {
      vm.sites.push({
        id: vm.sites.length + 1,
        url: vm.url,
        color: vm.color,
        groups: vm.selectedGroups
      });

      // add sites to picked groups
      for (var i = 0; i < vm.selectedGroups.length; i++) {
        for (var j = 0; j < vm.groups.length; j++) {
          if (vm.selectedGroups[i] === vm.groups[j].name) {
            vm.groups[j].sites.push(vm.url);
          }
        }
      }

      // reset forms and selected groups
      vm.url = '';
      vm.color = '';
      vm.selectedGroups = [];

    }

    // dynamically removes a table row and site from vm.sites
    vm.removeSite = function(url) {
      var index = -1;
      var siteArr = eval(vm.sites);
      for (var i = 0; i < siteArr.length; i++) {
        if (siteArr[i].url === url) {
          index = i;
          break;
        }
      }

      vm.sites.splice(index, 1);
    }

    // adds a group from a modal and resets the forms
    vm.addGroup = function() {
      vm.groups.push({
        id: vm.groups.length + 1,
        name: vm.name,
        color: vm.color,
        sites: []
      });
      vm.name = '';
      vm.color = '';
    }
  });
