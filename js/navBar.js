angular.module("cat").directive("navBar", function(){
  return {
    templateUrl: baseUrl + '/views/navBar-tmpl.html',
    restric: "EA",
    scope: {

    },
    controller: function($scope){

    },
    link: function(scope, element, attrs){

    }

  };
});
var event = new Event('lastJsLoaded');
document.dispatchEvent(event);
