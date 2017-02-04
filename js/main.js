angular.module("cat", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');

$stateProvider

.state('home', {
  url: "/home",
  controller: "homeCtrl",
  templateUrl: "views/home-tmpl.html"
})
.state('love', {
  url: "/love",
  controller: "loveCtrl",
  templateUrl: "views/love.html"
})
.state('feel', {
  url: "/feel",
  controller: "feelCtrl",
  templateUrl: "views/feel.html"
})
.state('kiss', {
  url: "/kiss",
  controller: "kissCtrl",
  templateUrl: "views/kiss.html"
})

})
