'use strict';

angular.module('groupApp',['checklist-model'])
  .controller('MainController', function() {
    var vm = this;
    vm.tab = 0;
    vm.sites = [];
    vm.groups = [];
    vm.selectedGroups = [];

    // changes vm.tab to the id of a clicked group
    vm.selectTab = function(setTab) {
      vm.tab = setTab;
    };

    // checks which tab is selected and then use it to set a class
    vm.isSelected = function(checkTab) {
      return vm.tab === checkTab;
    };

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
      vm.removeFromGroup(url);
      vm.sites.splice(index, 1);
    }

    // check if a currently selected group has websites
    vm.hasSites = function() {
      if (vm.groups.length) {
        return (vm.groups[vm.tab - 1].sites.length > 0) ? true:false;
      }
    }

    vm.removeGroupFromSites = function(group) {
      for (var i = 0; i < vm.sites.length; i++) {
        for (var j = 0; j < vm.sites[i].groups.length; j++) {
          if (vm.sites[i].groups[j] === group) {
            vm.sites[i].groups.splice(j, 1);
          }
        }
      }
    }

    vm.updateGroupIds = function() {
      for (var i = 0; i < vm.groups.length; i++) {
        vm.groups[i].id = i + 1;
      }
    }

    vm.removeGroup = function(activeGroup, group) {
      vm.removeGroupFromSites(group);
      vm.groups.splice(activeGroup, 1);
      vm.updateGroupIds();
      vm.selectTab(vm.tab - 1);
    }

    // finds all occurences of a website in groups and deletes it
    vm.removeFromGroup = function(site) {
      for (var i = 0; i < vm.groups.length; i++) {
        for (var j = 0; j < vm.groups[i].sites.length; j++) {
          if (vm.groups[i].sites[j] === site) {
            vm.groups[i].sites.splice(j, 1);
          }
        }
      }
    }

    // only removes a website from its group, not from all websites
    vm.removeFromGroupOnly = function(site) {
      var index = vm.groups[vm.tab - 1].sites.indexOf(site);
      vm.groups[vm.tab - 1].sites.splice(index, 1);
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
