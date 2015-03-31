/**
* FiltersSelectionController
* @namespace oipa.filters.controllers
*/
(function () {
  'use strict';

  angular
    .module('oipa.filters')
    .controller('FiltersSelectionController', FiltersSelectionController);

  FiltersSelectionController.$inject = ['FilterSelection', 'Countries', 'Regions', 'Budget', 'Sectors', 'ImplementingOrganisations'];

  /**
  * @namespace FiltersController
  */

  // function FiltersSelectionController(FilterSelection, Countries, Regions, Budget, Sectors, ActivityDate, ImplementingOrganisations, PolicyMarkers, ActivityStatus, Documents) {
  function FiltersSelectionController(FilterSelection, Countries, Regions, Budget, Sectors, ImplementingOrganisations) {
    var vm = this;
    vm.selectedCountries = Countries.selectedCountries;
    vm.selectedRegions = Regions.selectedRegions;
    // vm.selectedBudget = Budget.budget;
    vm.selectedSectors = Sectors.selectedSectors;
    // vm.selectedActivityDate = ActivityDate.selectedActivityDates;
    vm.selectedImplementingOrganisations = ImplementingOrganisations.selectedImplementingOrganisations;
    // vm.selectedPolicyMarkers = PolicyMarkers.selectedPolicyMarkers;
    // vm.selectedActivityStatus = ActivityStatus.selectedActivityStatus;
    // vm.selectedDocuments = DocumentLink.selectedDocumentLinks;

    vm.total_count = vm.selectedCountries.length;

    /**
    * @name activate
    * @desc Actions to be performed when this controller is instantiated
    * @memberOf oipa.filters.controllers.FiltersController
    */
    function activate() {
      
    }

    vm.removeFilter = function(selectedArr, item_id) {
      for (var i = 0; i < selectedArr.length;i++){
        if(selectedArr[i].code == item_id){
          selectedArr.splice(i, 1);
          break;
        }
      }
    }

  }

})();