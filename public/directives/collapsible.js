(function() {
  angular.module('collapse',[]).directive('colapsbl',colapsbl);

  
  function colapsbl($timeout) {
  	console.log("success");
  	return {
	    restrict: 'A',
	    transclude: true,
	    replace: true,
	    template: '<div style="position:relative;height: 0;overflow:hidden;-webkit-transition:height 200ms;transition:height 200ms"><div ng-transclude></div></div>',
	    link: function(scope, element, attrs) {
	    	console.log("came here");
	      scope.$watch(attrs.colapsbl, function(isExpanded) {
	        $timeout(function() {
	          element.css('height', isExpanded ? element.children()[0].offsetHeight + 'px' : '0');
	        }, 10);
	      });
	    }
	  };
  }
  colapsbl.$inject = ['$timeout'];

})();