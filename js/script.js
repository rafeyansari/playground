(function() {
  var app = angular.module('slideShow', []);

  app.controller('SlideshowController', function() {
    this.slide = slide;
  });

  var slide = {
    name: 'Slide 1',
    description: 'Slide Description',
    dimensions: 'Slide Dimensions'
  };
})();
