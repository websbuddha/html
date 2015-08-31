'use strict';
var app = angular .module('buddhaApp', ['ngAnimate',
        'ngAria',
        'ngMaterial',
        'ngTouch',
        'duScroll',
        'SlideViewer'
    ])
    app.controller('mainCtrl', function ($scope, $timeout, $interval, $document) {
    	$scope.slides = [
	        {imgUrl: "images/slideimg1.png", title1: "STILL WAITING TO GET A HEART THROB", title2: "Revolution in web world..!!", value:"", href:"#section-2", class:"hide-class" },
	        {imgUrl: "images/slideimg2.png", title1: "OUR PROFFESIONALS ARE WAITING", title2:"For a hearty welcome..!!", value:"EXPLORE OUR SERVICES", href:"#section-2"},
	        {imgUrl: "images/slideimg3.png", title1: "TO BE RICH, ENHANCED & OUTSTAND IN", title2:"Our inovative world.!!", value:"SHAKE HAND WITH US",  href:"#section-3"},
	    ];
        $scope.toTheTop = function() {//for scrolling page by nav bar
            $document.scrollTopAnimated(0, 5000).then(function() {
                console && console.log('You just scrolled to the top!');
            });
        }
        var section2 = angular.element(document.getElementById('section-2'));
        $scope.toSection2 = function() {
            $document.scrollToElementAnimated(section2);
        }
        window.sr = new scrollReveal();//for page scroll animation
    }).value('duScrollOffset', 10);