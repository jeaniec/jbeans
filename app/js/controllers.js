'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$scope', function($scope) {

    $scope.fadeLeft = function() {
        $(this).addClass('animated fadeInLeft');
    };
    $scope.fadeRight = function() {
        $(this).addClass('animated fadeInRight');
    };
    $scope.fadeInDown = function() {
      $(this).addClass('animated fadeInDown');
    };

    $scope.offset = {
        offset: '80%'
      };
    $scope.zoomIn = function() {
        $(this).addClass('animated zoomIn');
    };

    $scope.team = [
      {
        name: 'Jeanie',
        position: 'devengineer/shark afficionado',
        description: 'Jeanie is a developer who tries to code every process in her life. She almost always picks the fire Pokémon starter, plays "Rogue" class, and has a penchant for live music and scuba diving. She loves going to the Shedd Aquarium, her favorite spot in Chicago.',
        img: 'jeanie.jpg',
        animation: 'fadeLeft'
      },
      {
        name: 'Jo',
        position: 'moral support/tasty beverage',
        description: 'Jo always gets the team through a tough spot and is probably the hottest of the team. She\'s always the first one to say, "We\'ve got this, guys!" Her interests include mugs.',
        img: 'coffee.jpg',
        animation: 'fadeInDown'
      },
      {
        name: 'Jelly',
        position: 'drunk baby antics/shepherd mix',
        description: '80% pain-in-the-butt and 20% cute-face, Jelly often likes to sit on laptops, hindering a lot of work. Her interests include squeaky toys and sticks that are bigger than her body.',
        img: 'jelly.jpg',
        animation: 'fadeRight'
      }
    ];


  }])
  .controller('CVCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.jobs = [
      {
        dates: "Present",
        position: "Developer",
        company: "NORTHWESTERN UNIVERSITY",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Developing and debugging websites and mobile apps that target behavioral interventions using AngularJS, HTML5, CSS3, and Ruby on Rails. Additional experience using GitHub, Cordova, CLI, Grunt, Bower, and Node.",
           two: "Interfacing with clinicians and researchers to determine technical requirements and priorities to work in an agile manner.",
           three: "Continuing to create JavaScript libraries and contributing to Bower and Yeoman to assist in scalability in group's app development." 
          }
        ]
      },
      {
        dates: "1.2013 - 3.2014",
        position: "Functional Analyst",
        company: "RAZORFISH",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Collaborated with Fortune 500 clients across six time zones and pushing code changes on a daily basis.",
           two: "Reviewed code repositories and ensured best practices amongst five different disciplines via elementool, AtTask, JIRA, and Confluence.",
           three: "Self-taught coding languages to better communicate with developers and became a highly-utilized front-end resource." 
          }
        ]
      },
      {
        dates: "10.2012 - 1.2013",
        position: "Research Assistant",
        company: "NORTHWESTERN UNIVERSITY",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Co-authored 20+ health articles targeting medical providers, adolescents, and academic professionals.",
           two: "Researched GIS methods to reduce risky drug use by 20%.",
           three: "Wrote custom syntax for SPSS to save 40+ hours of manual analysis." 
          }
        ]
      },
      {
        dates: "6.2012 - 10.2012",
        position: "QA Analyst",
        company: "Mattersight Corporation",
        location: "Chicago, IL",
        tasks: [
          {
           one: "Composed client playbooks that reduced “Help” submission by 70% and future requests from client for additional guides.",
           two: "Tested and debugged new functionality to save 50+ hours and $3,000 in development costs.",
           three: "Jumped into projects at any point of lifecycle and employed scrum, agile, waterfall, and sometimes “agilefall” methodologies." 
          }
        ]
      }];

    $scope.skills = [
      {
        name: "Programming",
        perc: "80",
        labelColor: "#2B7C80",
        barColor: "#20B2AA",
        tooltip: "JavaScript, Ruby, Python"
      },
      {
        name: "Web",
        perc: "70",
        labelColor: "#48D1CC",
        barColor: "#AFEEEE",
        tooltip: "HTML, CSS, Foundation, Bootstrap, WordPress, jQuery"
      },
      {
        name: "Design",
        perc: "40",
        labelColor: "#008cba",
        barColor: "#87CEEB",
        tooltip: "Photoshop, inDesign, drawing stick people, making latté art"
      },
      {
        name: "Etc.",
        perc: "76",
        labelColor: "#3CB371",
        barColor: "#66CDAA",
        tooltip: "Fluent in Korean, proficient in Spanish, pretty good at making party playlists"
      }];

    $scope.portfolio = [{
        title: 'Seabreeze Charter',
        img: 'http://placekitten.com/600/600',
        description: 'Website facelifts = free boat rides on Lake Michigan.',
        effect:'bubba',
        delay:'0',
        animation: 'fadeLeft',
        url: 'http://seabreezesail.com/'
      },
      {
        title: 'CONEMO',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect:'bubba',
        delay:'.5s',
        animation: 'fadeRight',
        url: 'https://github.com/cbitstech/conemo_app'
      },
      {
        title: 'FOCUS',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect:'bubba',
        delay:'0s',
        animation: 'fadeLeft',
        url: 'https://github.com/cbitstech/focus_app'
      },
      {
        title: 'Special K',
        img: 'http://placekitten.com/600/600',
        description: 'Lorem ipsum bacon dolor pig fat jowl.',
        effect:'bubba',
        delay:'.5s',
        animation: 'fadeRight',
        url: "http://www.specialk.com/en_us/home-page.html"
    }];

    $scope.interests = [
      {
        path: 'images/svg/fish.svg',
        description: 'Sea creatures'
      },
      {
        path: 'images/svg/game.svg',
        description: 'Video games'
      },
      {
        path: 'images/svg/pizza.svg',
        description: 'Food & restaurants'
      },
      {
        path: 'images/svg/health.svg',
        description: 'Public health & health apps'
      },
      {
        path: 'images/svg/music.svg',
        description: 'Playing violin, piano, guitar, & DJing.'
      }
    ];

    $scope.bounceIn = function() {
      if ($window.innerWidth > 800) {
        $(this).addClass("animated bounceIn");
      }
    };

    $scope.fadeInDown = function() {
      if ($window.innerWidth > 800) {
        $(this).addClass("animated fadeInDown");
      }
    };
    $scope.fadeLeft = function() {
        $(this).addClass('animated fadeInLeft');
    };
    $scope.fadeRight = function() {
        $(this).addClass('animated fadeInRight');
    };
    $scope.animatePerc = function() {
      $(this).animate({
        width:$(this).attr('data-percent')
      },1000);
    };

    $scope.offset = {
      offset: '85%'
    };

  }])

  .controller('navCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navLinks = [{
      title: 'Home',
      url: '#',
      icon: ''
    },
    {
      title: 'CV',
      url: 'cv',
      icon: 'results'
    }];

	$scope.navClass = function (page) {
        var currentRoute = $location.path().substring(1) || '#';
        return page === currentRoute ? 'active' : '';
    };
  }])

  .controller('footerCtrl', ['$scope', function($scope) {
    $scope.socialLinks = [{
      title: 'Github',
      url: 'https://github.com/jchung1005',
      icon: 'social-github'
    },
    {
      title: 'Instagram',
      url: 'http://instagram.com/jbeans5',
      icon: 'social-instagram'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/profile/view?id=129993573',
      icon: 'social-linkedin'
    },
    {
      title: 'XBL',
      url: 'http://www.xboxgamertag.com/search/jbeans5/',
      icon: 'social-xbox'
    }];
  }]);
