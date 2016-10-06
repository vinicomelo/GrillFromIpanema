myApp.config(function($routeProvider) {
    $routeProvider
        .when('/brunch', {
            templateUrl: 'pages/brunch.html',
            controller: 'brunchController'
        });
});

myApp.controller('brunchController', function($scope) {
    $scope.title = 'brunch title',
    $scope.firstCourseItems = firstCourseItems,
    $scope.secondCourseItems = secondCourseItems,
    $scope.thirdCourseItems = thirdCourseItems;
});

var firstCourseItems = [{
  name: 'SALADA VERDE',
  description: 'House green salad with mixed greens (romaine red leaf lettuce) tomatoes, cucumber and shredded carrots served with a gourmet house dressing.'
}, {
  name: 'SOPA DE FEIJÃO',
  description: 'Black bean soup, served with a touch of Parmesan cheese and bacon.'
}];

var secondCourseItems = [{
  name: 'OMELETE A BRASILEIRA',
  description: 'A tomato, onions, hearts of palm, olives, mushrooms and cheese omelet.'
}, {
  name: 'VEGETARIANO',
  description: 'Our Brazilian vegetarian dish includes garlic sautéed collard greens and vegetables, rice, black beans, farofa (grounded yuca roasted with garlic and butter) and salad with hearts of palm, avocado and jumbo olives, Romaine and red leaf lettuce.'
}, {
  name: 'PÁSSARO PRETO',
  description: 'Crispy fried chicken pieces on the bone marinated in olive oil, garlic, and basil. Served with rice, black beans, collard greens, and farofa (grounded yuca roasted with garlic and butter).'
}, {
  name: 'FRANGO A BRASILEIRA',
  description: 'Grilled chicken breast served with black beans, rice, farofa and vegetables.'
}, {
  name: 'FRANGO AO MOLHO BRANCO',
  description: 'Chicken breast sautéed in a light cream sauce with capers, onions, parsley, and tomato served with rice and vegetables.'
}, {
  name: 'LINGUINE À CABO FRIO',
  description: 'Chicken breast sautéed in a light cream sauce with capers, fresh tomato, onion, and parsley sauce served with linguine.'
}, {
  name: 'LINGUICA A MINEIRA',
  description: 'Grilled pork hot link sausage served with rice, black beans, collard greens and farofa.'
}, {
  name: 'CHULETA A MINEIRA',
  description: 'Grilled pork chop served with rice, Tutu a Mineira (black beans and yuca flour puree) and collard greens'
}, {
  name: 'BIFE ACEBOLADO',
  description: 'Grilled beefsteak top sirloin topped with sautéed onions and served with black beans, rice and vegetables.'
}, {
  name: 'MOQUECA DE PEIXE',
  description: 'Fresh fish of the day stew in a cilantro, tomato, onions, scallions, green Pepper and tomato sauce served with pirao and rice on the side. (A CAPIXABA OR BAHIA STYLE)'
}, {
  name: 'FEIJOADA',
  description: 'A rich stew of black beans, pork, sausage, and smoked meats served with collard greens, rice, farofa and orange slices.'
}];

var thirdCourseItems = [{
  name: 'CLASSIC RICE PUDDING',
  description: 'Brazilian version of Arroz Doce'
}, {
  name: 'FRIED BANANA',
  description: 'served with a gourmet house whipped-cream sprinkled with cinnamon.'
}, {
  name: 'ROMEO & JULIETA',
  description: 'Brazilian version of Goiabada Cascão served with a gourmet cheese.'
}];
