app.controller('mainCtrl', function ($scope, $rootScope, $cookies, Data){
    $rootScope.showLogin = true;

    if($cookies.get('keepme') != undefined){

    	var user = {
            email: $cookies.get('email'), 
            password: $cookies.get('password')
        }

    	Data.post('login', user).then(function (result) {
            if(result.status == 'error'){
                       
            }else{
                if (!result){
                    alert('login faild');
                } else {
                    $scope.showLogin = false;
                    $rootScope.username = result.name; 
                }
            }
         });  
    } 
	$scope.items = [
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Android Siêu khủng 3468',
			card_text: 'Some quick example text to build on the card title.', 
			card_price: "25.000.000 đ", 
			price_reduction: "200000đ", 
			price_percent_reduction: "-47%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'OPPO đẹp trai ',
			card_text: 'while "myCtrl.js" contains the controller:', 
			card_price: "30.000.000 đ", 
			price_reduction: "200000đ", 
			price_percent_reduction: "-57%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Benq Nhật chính hãng',
			card_text: 'Some quick example text to build on the card title.', 
			card_price: "27.000.000 đ", 
			price_reduction: "200000đ", 
			price_percent_reduction: "-24%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Dell Vostro 3468',
			card_text: 'Some quick example text to build on the card title.', 
			card_price: "22.000.000 đ", 
			price_reduction: "300000đ", 
			price_percent_reduction: "-32%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Dell Vostro 3468',
			card_text: 'In this example, "myApp.js" contains an application module definition', 
			card_price: "16.000.000 đ", 
			price_reduction: "200000 đ", 
			price_percent_reduction: "-44%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Nokia đẹp 3468',
			card_text: 'It is common in AngularJS applications to ', 
			card_price: "15.000.000 đ", 
			price_reduction: "200000 đ", 
			price_percent_reduction: "-47%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Sony Ericson 3468',
			card_text: 'Some quick example text to build on the card title.', 
			card_price: "9.000.000 đ", 
			price_reduction: "200000 đ", 
			price_percent_reduction: "-47%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Dell Vostro 3468',
			card_text: 'Some quick example text to build on the card title.', 
			card_price: "12.000.000 đ", 
			price_reduction: "200000đ", 
			price_percent_reduction: "-47%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Dell Vostro 3468',
			card_text: 'Some quick example text to build on the card title.', 
			card_price: "14.000.000 đ", 
			price_reduction: "200000đ", 
			price_percent_reduction: "-47%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Nasus vip',
			card_text: 'your own directives to your applications', 
			card_price: "65.000.000 đ", 
			price_reduction: "500000 đ", 
			price_percent_reduction: "-18%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'HP chinh hang 123',
			card_text: 'addition you can use the module to', 
			card_price: "19.000.000 đ", 
			price_reduction: "4320000đ", 
			price_percent_reduction: "-56%"
			
		},
		{
			card_img: 'img/slider1.jpg',
			card_title: 'Asus vip 3468',
			card_text: 'ohayo AngularJS has', 
			card_price: "35.000.000 đ", 
			price_reduction: "100000 đ", 
			price_percent_reduction: "-23%"
			
		},
	];
});

 