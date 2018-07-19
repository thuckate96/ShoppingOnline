
app.directive('myName', function() {
    return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {

                var nlength = /(?=.{6,30})/
                var nvalidate = /^[A-Za-z0-9_ @]{6,30}$/

               if (!nlength.test(value)) {
                    scope.nameerror = "Tên tối thiểu dài 6 kí tự và tối đa 30 kí tự."
               }else{
                  if(value.match(nvalidate)[0] == null)
                     scope.nameerror = "Tên chỉ chứa kí tự Alphabet."
                  else
                     scope.nameerror = ""
               }
               return value;//dùng trong scope ở controller
            }

            mCtrl.$parsers.push(myValidation);
       }
    };
   });

   //directive validate email
   app.directive('myEmail', function() {
    return {

        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {

              // var evalidate = /^[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_])*@[a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*$/
               var evalidate = /^(?:[a-zA-Z0-9-_])+(?:\.[a-zA-Z0-9-_]+)*@(?:[a-zA-Z0-9-_]+\.){1,2}[a-zA-Z0-9-_]+$/;	
                if(value.length < 1)
                   scope.emailerror = "Địa chỉ email bắt buộc.";

                if (!evalidate.test(value))
                    scope.emailerror = "Địa chỉ email không đúng định dạng."
                else
                  scope.emailerror = ""

               return value;//dùng trong scope ở controller
            }

            mCtrl.$parsers.push(myValidation);
      }
     };
   });

    //directive validate adress
   app.directive('myAddress', function() {
      return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {

               var addvalidate = /.{6,}/
               if(!addvalidate.test(value))
               	  scope.addresserror = "Địa chỉ liên hệ không chính xác."
               else
               	  scope.addresserror = ""

               return value;//dùng trong scope ở controller
            }

            mCtrl.$parsers.push(myValidation);
        }
     };
   });

    //directive validate phone number
   app.directive('myPhonenumber', function() {
      return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {

               var phonevalidate = /(?:^(?:(?:(?:(?:\(\d{1,3}\)|d{1,3})(?:\d{1,2}(?:[.\/-])|\(\d{1,2}\)))|(?:\d{3}(?:[.\/-]))))\d{3}(?:[.\/-])\d{4}$)|(?:^\d{10,11}$)/
              /** 
                (84)(8)730-5317//true   
			    (84)8.730.5317//true
				(84)91-395-2929//true
				(84)(91)395-2929//true
				84963216364//true
				(84)96.321.6364//true
				096.321.6364//true
			  **/
               if(!phonevalidate.test(value))
               	  scope.phonenumbererror = "Số điện thoại không chính xác."
               else
               	  scope.phonenumbererror = ""

               return value;//dùng trong scope ở controller
            }

            mCtrl.$parsers.push(myValidation);
        }
     };
   });

    //directive validate password
   app.directive('myPassword', function() {
      return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {

               var strongp = /(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)(?=.*[!@#$%^&~*?^]+)(?=.{15,})/
               var mediump = /(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)(?=.*[!@#$%^&~*?^]+)(?=.{10,})/
               var weakp = /(?=.*[a-z]+)(?=.*[0-9]+)(?=.{6,})/

               if(!weakp.test(value)){
               	  scope.passworderror = "Mật khẩu có ít nhất một kí tự chữ, số và độ dài tối thiểu 6 kí tự."
               	  scope.passwordtype = ""
               }else{
               	  scope.passworderror = ""
               	  scope.passwordtype = "Mật khẩu yếu."
        
               	  if(mediump.test(value)){
               	  	   scope.passwordtype = "Mật khẩu mạnh trung bình."
               	  	   scope.passCol = "orange"
               	  }
               	  if(strongp.test(value)){
               	  	   scope.passwordtype = "Mật khẩu rất rất mạnh."
               	  	   scope.passCol = "green"
               	  }
               }

               return value;//dùng trong scope ở controller
            }

            mCtrl.$parsers.push(myValidation);
        }
     };
   });

    //directive validate password
   app.directive('myRepassword', function() {
      return {
        require: 'ngModel',
        link: function(scope, element, attr, mCtrl) {

            function myValidation(value) {
            	if(value != scope.password)
            		scope.repassworderror = "Mật khẩu xác nhận không trùng với mật khẩu đã nhập."
            	else
            		scope.repassworderror = ""
            	
            	return value;//dùng trong scope ở controller
            }

            mCtrl.$parsers.push(myValidation);
        }
     };
   });



	app.controller('signupCtrl', function($scope, $window, Data){

      $scope.Register = function(){

      	if($scope.name == undefined || $scope.name==""){
      		console.log($scope.name)
            if($scope.nameerror == undefined || $scope.nameerror == "")
               $scope.nameerror = "Tên bắt buộc.";
         }

         if($scope.password == undefined || $scope.password == ""){
            if($scope.passworderror == undefined || $scope.passworderror == "")
               $scope.passworderror = "Mật khẩu bắt buộc."
         }

         if($scope.email == undefined || $scope.email==""){
            if($scope.emailerror == undefined || $scope.emailerror == "")
               $scope.emailerror = "Địa chỉ email bắt buộc.";
         }

         if($scope.address == undefined || $scope.address == ""){
            if($scope.addresserror == undefined || $scope.addresserror == "")
               $scope.addresserror = "Địa chỉ liên hệ bắt buộc."
         }

         if($scope.phonenumber == undefined || $scope.phonenumber==""){
            if($scope.phonenumbererror == undefined || $scope.phonenumbererror == "")
               $scope.phonenumbererror = "Số điện thoại bắt buộc.";
         }


      	if($scope.name != "" && $scope.email != "" && $scope.address != "" && $scope.phonenumber != "" 
      		 && $scope.password != "" && $scope.repassword != ""
             && $scope.nameerror == "" && $scope.emailerror == "" && $scope.passworderror == "" && $scope.addresserror == "" 
             && $scope.passworderror == "" && $scope.repassworderror == ""){
 
            var user = {
                name: $scope.name, 
                email: $scope.email, 
                address: $scope.address, 
                phone: $scope.phonenumber, 
                password: $scope.password
            }
            Data.post('createUser', user).then(function (result) {
                console.log('done');
                 if(result.status == 'error'){
                   
                 }else{
                    var host = $window.location.host;
                    var landingUrl = "http://" + host + "/";
                    $window.location.href = landingUrl;
                 }
            });
         }
      }

	});