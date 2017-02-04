angular.module("cat", ["ui.router"]).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/home');
var baseUrl = /local|127/.test(window.location.hostname) ? '' : '/#';
$stateProvider

.state('home', {
  url: "/home",
  controller: "homeCtrl",
  templateUrl: baseUrl + "/views/home-tmpl.html"
})
.state('love', {
  url: "/love",
  controller: "loveCtrl",
  templateUrl: baseUrl + "/views/love.html"
})
.state('feel', {
  url: "/feel",
  controller: "feelCtrl",
  templateUrl: baseUrl + "/views/feel.html"
})
.state('kiss', {
  url: "/kiss",
  controller: "kissCtrl",
  templateUrl: baseUrl + "/views/kiss.html"
})

})
