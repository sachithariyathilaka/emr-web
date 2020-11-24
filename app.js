var app=angular.module('app',['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider
        .when('/', {
          templateUrl: './components/templates/login.html',
          controller: 'homecntl'
        })
        .when('/staff', {
          templateUrl: './components/templates/staffLogin.html',
          controller: 'staffcntl'
        })
        .when('/staffLogOut', {
          resolve:{
            deadResolve: function ($location, user) {
                user.clearData();
                $location.path('/');
            }
          }
        })
        .when('/doctor', {
          templateUrl: './components/templates/doctorLogin.html',
          controller: 'doctorcntl'
        })
        .when('/admin', {
          templateUrl: './components/templates/adminLogin.html',
          controller: 'admincntl'
        })
        .when('/management', {
          templateUrl: './components/templates/managementLogin.html',
          controller: 'managementcntl'
        })
        .when('/staffDashboard', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: './components/templates/staff/staffDashboard.html',
          controller: 'staffDashboardcntl'
        })
        .when('/staffChangePassword', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: './components/templates/staff/staffChangePassword.html',
          controller: 'staffChangePasswordcntl'
        })
        .when('/registerDoctor', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: './components/templates/staff/registerDoctor.html',
          controller: 'registerDoctor'
        })
        .when('/searchDoctor', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: './components/templates/staff/searchDoctor.html',
          controller: 'searchDoctorCntl'
        })
        .when('/registerPatient', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: './components/templates/staff/registerPatient.html',
          controller: 'registerPatientCntl'
        })
        .when('/patientSearch', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: './components/templates/staff/patientSearch.html',
          controller: 'patientSearchCntl'
        })
        .when('/IDSearch', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/staff/IDSearch.html',
          controller: 'IDSearchCntl'
        })
        .when('/eyeScanSearch', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/staff/eyeScanSearch.html',
          controller: 'eyeScanSearchCntl'
        })
        .when('/faceIDSearch', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/staff/faceIDSearch.html',
          controller: 'faceIDSearchCntl'
        })
        .when('/doctorDashboard', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Doctor/doctorDashboard.html',
          controller: 'doctorDasboardCntl'
        })
        .when('/doctorChangePassword', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Doctor/doctorChangePassword.html',
          controller: 'doctorChangePassword'
        })
        .when('/IDSearchAndEdit', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Doctor/IDSearchAndEdit.html',
          controller: 'IDSearchAndEditCntl'
        })
        .when('/prescription', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Doctor/addPrescription.html',
          controller: 'prescriptionCntl'
        })
        .when('/eyeScanSearchAndEdit', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Doctor/eyeScanSearchAndEdit.html',
          controller: 'eyeScanSearchAndEditCntl'
        })
        .when('/faceIDSearchAndEdit', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Doctor/faceIDSearchAndEdit.html',
          controller: 'faceIDSearchAndEditCntl'
        })
        .when('/registerLab', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Staff/registerLab.html',
          controller: 'registerLabCntl'
        })
        .when('/registerPharmacy', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl:'components/templates/Staff/registerPharmacy.html',
          controller: 'registerPharmacyCntl'
        })
        .when('/searchLab', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Staff/searchLab.html',
          controller: 'searchLabCntl'
        })
        .when('/searchPharmacy', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Staff/searchPharmacy.html',
          controller: 'searchPharmacyCntl'
        })
        .when('/pharmacyLogin', {
          templateUrl: 'components/templates/pharmacyLogin.html',
          controller: 'pharmacyLoginCntl'
        })
        .when('/labLogin', {
          templateUrl: 'components/templates/labLogin.html',
          controller: 'labLoginCntl'
        })
        .when('/labDashboard', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/lab/labDashboard.html',
          controller: 'labDashboardCntl'
        })
        .when('/pharmacyDashboard', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/pharmacy/pharmacyDashboard.html',
          controller: 'pharmacyDashboardCntl'
        })
        .when('/fingerprint', {
          resolve: {
            check: function($location, user) {
              if(!user.IsUserLoggedIn()){
                $location.path('/');
              }
            },
          },
          templateUrl: 'components/templates/Staff/fingerprint.html',
          controller: 'fingerprintCntl'
        })
        .when('/qrcode', {
          templateUrl: 'components/templates/pharmacy/qrcode.html',
          controller: 'qrCntl'
        })
        .when('/updatePrescription', {
          templateUrl: 'components/templates/Doctor/updatePrescription.html',
          controller: 'updatePrescriptionCntl'
        })
        .when('/adminDashboard', {
          templateUrl: 'components/templates/admin/adminDashboard.html',
          controller: 'adminDashboardCntl'
        })
        .when('/managementDashboard', {
          templateUrl: 'components/templates/management/managementDashboard.html',
          controller: 'managementDashboardCntl'
        })
        .when('/eyeRegister', {
          templateUrl: 'components/templates/Staff/eyeRegister.html',
          controller: 'eyeRegisterCntl'
        })
        .otherwise({
          template: '404'
        });
      });

app.controller('homecntl' , function($scope, $location) {
        $scope.staffLogin= function () {
          $location.path('/staff');
        };
        $scope.doctorLogin=function () {
          $location.path('/doctor');
        };
        $scope.adminLogin=function () {
          $location.path('/admin');
        };
        $scope.managementLogin=function () {
          $location.path('/management');
        };
        $scope.labLogin=function(){
          $location.path('/labLogin');
        };
        $scope.pharmacyLogin=function()
        {
          $location.path('/pharmacyLogin');
        };

});

app.service('user', function() {
    var username;
    var loggedin= false;
    var id;

    this.getName= function () {
        return username;
    };
    this.setId= function(userid) {
      id=userid;
    };
    this.getId= function () {
        return id;
    };
    this.IsUserLoggedIn= function() {
      if(!!localStorage.getItem('staff')){
        loggedin=true;
        var data=JSON.parse(localStorage.getItem('staff'));
        id=data.id;
        username=data.username;
      }
        return loggedin;
    };
    this.saveData=function (data) {
        username=data.user;
        id=data.userid;
        loggedin=true;
        localStorage.setItem('staff', JSON.stringify({
          username: username,
          id:id
        }));
    };
    this.clearData=function() {
        localStorage.removeItem('staff');
        loggedin=false;
        username="";
        id="";
    };
});

app.service('patient', function() {
  var patientid;
  var loggedin= false;
  var prescriptionId;
  var Report;
  var Date;

  this.getpatientid= function () {
      return patientid;
  };
  this.setReport= function (Report)
  {
    Report=Report;
  };
  this.getReport= function()
  {
    return Report;
  };

  this.setDate= function (Date)
  {
    Date=Date;
  };
  this.getDate= function()
  {
    return Date;
  };
  this.setprescriptionId= function(prescriptionId) {
    prescriptionId=prescriptionId;
  };
  this.getprescriptionId= function () {
      return prescriptionId;
  };
  this.IsUserLoggedIn= function() {
    if(!!localStorage.getItem('patient')){
      loggedin=true;
      var data=JSON.parse(localStorage.getItem('patient'));
      patientid=data.patientid;
      prescriptionId=data.prescriptionId;
      Report=data.Report;
      Date=data.Date;
    }
      return loggedin;
  };
  this.saveData=function (data) {
    prescriptionId=data.ID;
    patientid=data.patientid;
    Report=data.Report;
    Date=data.Date;

      loggedin=true;
      localStorage.setItem('patient', JSON.stringify({
        prescriptionId: prescriptionId,
        patientid:patientid,
        Report:Report,
        Date:Date
      }));
  };
  this.clearData=function() {
      localStorage.removeItem('patient');
      loggedin=false;
      prescriptionId="";
      patientid="";
      Report="";
      Date="";
  };
});

app.controller('staffcntl', function($scope, $http, $location, user) {
        $scope.stafflogin=function () {
          var Username=$scope.Username;
          var Password=$scope.Password;

          $http({
            url: 'http://18.216.245.34/EMR/php/staffLogin.php',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'Username='+Username+'&Password='+Password
          }).then(function (response) {
              if(response.data.status == 'loggedin')
              {
                user.saveData(response.data);
                $location.path('/staffDashboard');
              }
              else
                {
                  alert('Invalid Username & Password Combination!');
                }
          });
        };
});

app.controller('staffDashboardcntl', function($scope, $location, user) {
    $scope.user=user.getName();

    $scope.staffOut=function () {
        $location.path('/staffLogOut');
    };

    $scope.staffChangePass=function() {
        $location.path('/staffChangePassword');
    };

    $scope.registerDoctor=function() {
        $location.path('/registerDoctor');
    };
    $scope.searchDoctor=function() {
        $location.path('/searchDoctor');
    };

    $scope.registerPatient=function() {
        $location.path('/registerPatient')
    };
    $scope.patientSearch=function() {
        $location.path('/patientSearch')
    };
    $scope.registerLab=function()
    {
      $location.path('/registerLab');
    };
    $scope.registerPharmacy=function()
    {
      $location.path('/registerPharmacy');
    };
    $scope.searchLab=function()
    {
      $location.path('/searchLab');
    };
    $scope.searchPharmacy=function()
    {
      $location.path('/searchPharmacy');
    };
    $scope.fingerprint=function()
    {
      $location.path('/fingerprint');
    };

});

app.controller('staffChangePasswordcntl', function($scope, $http, user, $location) {
      $scope.user=user.getName();
      $scope.staffChangePass=function() {
          var newPassword=$scope.newPassword;

          $http({
            url: 'http://18.216.245.34/EMR/php/staffPasswordUpdate.php',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'newPassword='+newPassword+'&id='+user.getId()+'&user='+user.getName()
          }).then(function (response) {
              if(response.data.status == 'done')
              {
                $scope.newPassword=null;
                alert('Password Updated Succusfully');
              }
              else
                {
                  $scope.newPassword=null;
                  alert('Error Occured!');

                }
          });
      };

      $scope.home=function() {
        $location.path('/staffDashboard');
      };

      $scope.staffOut=function () {
          $location.path('/staffLogOut');
      };

      $scope.registerDoctor=function() {
          $location.path('/registerDoctor');
      };
      $scope.searchDoctor=function() {
          $location.path('/searchDoctor');
      };

      $scope.registerPatient=function() {
          $location.path('/registerPatient')
      };
      $scope.patientSearch=function() {
          $location.path('/patientSearch')
      };
      $scope.registerLab=function()
      {
        $location.path('/registerLab');
      };
      $scope.registerPharmacy=function()
      {
        $location.path('/registerPharmacy');
      };
      $scope.searchLab=function()
      {
        $location.path('/searchLab');
      };
      $scope.searchPharmacy=function()
      {
        $location.path('/searchPharmacy');
      };
      $scope.fingerprint=function()
      {
        $location.path('/fingerprint');
      };

});

app.controller('registerDoctor', function($scope, $location, $http) {

  $scope.home=function() {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function() {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };

  $scope.searchDoctor=function() {
      $location.path('/searchDoctor');
  };

  $scope.registerPatient=function() {
      $location.path('/registerPatient')
  };

  $scope.patientSearch=function() {
      $location.path('/patientSearch')
  };

  $scope.registerLab=function(){
    $location.path('/registerLab');
  };

  $scope.registerPharmacy=function(){
    $location.path('/registerPharmacy');
  };

  $scope.searchLab=function(){
    $location.path('/searchLab');
  };

  $scope.searchPharmacy=function(){
    $location.path('/searchPharmacy');
  };

  $scope.fingerprint=function(){
    $location.path('/fingerprint');
  };

  $scope.form = [];
  $scope.files = [];


  	      $scope.submit = function() {
  	      	$scope.form.image = $scope.files[0];
            var name=$scope.name;
            var regNo=$scope.regNo;
            var doctorUsername=$scope.doctorUsername;
            var doctorPassword=$scope.doctorPassword;

  	      	$http({
  			  method  : 'POST',
  			  url     : 'http://18.216.245.34/EMR/php/registerDoctor.php',
  			  processData: false,
  			  transformRequest: function (data) {
  			      var formData = new FormData();
  			      formData.append("image", $scope.form.image);
              formData.append("name", name);
              formData.append("regNo", regNo);
              formData.append("doctorUsername", doctorUsername);
              formData.append("doctorPassword", doctorPassword);

  			      return formData;
  			  },
  			  data : $scope.form,
  			  headers: {
  			         'Content-Type': undefined
  			  }
        }).then(function(response){
          if(response.data.status == 'done')
          {
            $scope.name=null;
            $scope.regNo=null;
            $scope.doctorUsername=null;
            $scope.doctorPassword=null;
            alert('Doctor Registered Succusfully');
          }
          else
            {
              $scope.name=null;
              $scope.regNo=null;
              $scope.doctorUsername=null;
              $scope.doctorPassword=null;
              alert('Error Occured!');

            }
  		   });
  	      };
  	      $scope.uploadedFile = function(element) {
  		    $scope.currentFile = element.files[0];
  		    var reader = new FileReader();


  		    reader.onload = function(event) {
  		      $scope.image_source = event.target.result
  		      $scope.$apply(function($scope) {
  		        $scope.files = element.files;
  		      });
  		    }
                      reader.readAsDataURL(element.files[0]);
  		  }
});

app.controller('searchDoctorCntl', function ($scope, $location, $http) {

  $scope.home=function() {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function() {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };

  $scope.registerDoctor=function() {
      $location.path('/registerDoctor');
  };

  $scope.registerPatient=function() {
      $location.path('/registerPatient')
  };

  $scope.patientSearch=function() {
      $location.path('/patientSearch')
  };

  $scope.registerLab=function(){
    $location.path('/registerLab');
  };

  $scope.registerPharmacy=function(){
    $location.path('/registerPharmacy');
  };

  $scope.searchLab=function(){
    $location.path('/searchLab');
  };

  $scope.searchPharmacy=function(){
    $location.path('/searchPharmacy');
  };

  $scope.fingerprint=function(){
    $location.path('/fingerprint');
  };

  $scope.searchDoctor=function() {
      var docid=$scope.docid;

      $http({
        method: 'GET',
        url: 'http://18.216.245.34/EMR/php/searchDoctor.php?docid='+docid
      }).then(function(response2) {
        $scope.users = response2.data;

      });
    };
});

app.controller('registerPatientCntl', function($scope, $location, $http) {
  $scope.home=function() {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function() {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };
  $scope.registerDoctor=function() {
      $location.path('/registerDoctor');
  };
  $scope.searchDoctor=function() {
      $location.path('/searchDoctor');
  };
  $scope.patientSearch=function() {
      $location.path('/patientSearch')
  };
  $scope.registerLab=function()
  {
    $location.path('/registerLab');
  };
  $scope.registerPharmacy=function()
  {
    $location.path('/registerPharmacy');
  };
  $scope.searchLab=function()
  {
    $location.path('/searchLab');
  };
  $scope.searchPharmacy=function()
  {
    $location.path('/searchPharmacy');
  };
  $scope.fingerprint=function()
  {
    $location.path('/fingerprint');
  };

    $scope.form = [];
	  $scope.files = [];
	  $scope.submit = function() {
	      	$scope.form.image = $scope.files[0];
          var name=$scope.name;
          var age=$scope.age;
          var PatientUsername=$scope.PatientUsername;
          var PatientPassword=$scope.PatientPassword;
          var eyeScan=123;
          var bloodGroup=$scope.blodd;
          var gender=$scope.sex;
          var address=$scope.address;
          var mobile=$scope.mobile;
          var familyName1=$scope.FamilyName1;
          var familyID1=$scope.FamilyID1;
          var familyName2=$scope.FamilyName2;
          var familyID2=$scope.FamilyID2;
          var emergancyName=$scope.emergancyName;
          var emergancyNumber=$scope.emergancyNumber;


	      $http({
			    method  : 'POST',
			    url     : 'http://18.216.245.34/EMR/php/registerPatient.php',
			    processData: false,
			    transformRequest: function (data) {
			      var formData = new FormData();
			      formData.append("image", $scope.form.image);
            formData.append("name", name);
            formData.append("age", age);
            formData.append("PatientUsername", PatientUsername);
            formData.append("PatientPassword", PatientPassword);
            formData.append("eyeScan", eyeScan);
            formData.append("bloodGroup", bloodGroup);
            formData.append("gender", gender);
            formData.append("address", address);
            formData.append("mobile", mobile);
            formData.append("familyName1", familyName1);
            formData.append("familyID1", familyID1);
            formData.append("familyName2", familyName2);
            formData.append("familyID2", familyID2);
            formData.append("emergancyName", emergancyName);
            formData.append("emergancyNumber", emergancyNumber);
			      return formData;
			  },
			  data : $scope.form,
			  headers: {
			         'Content-Type': undefined
			  }
      }).then(function(response){
        if(response.data.status == 'done')
        {
          $scope.name=null;
          $scope.age=null;
          $scope.PatientUsername=null;
          $scope.PatientPassword=null;
          $scope.blood=null;
          $scope.sex=null;
          $scope.address=null;
          $scope.mobile=null;
          $scope.FamilyName1=null;
          $scope.FamilyID1=null;
          $scope.FamilyName2=null;
          $scope.FamilyID2=null;
          $scope.emergancyName=null;
          $scope.emergancyNumber=null;
          alert('Patient Registered Succusfully');
          alert(response.data.id);
          $location.path('/eyeRegister');
        }
        else
          {
            $scope.name=null;
            $scope.age=null;
            $scope.PatientUsername=null;
            $scope.PatientPassword=null;
            $scope.blood=null;
            $scope.sex=null;
            $scope.address=null;
            $scope.mobile=null;
            $scope.FamilyName1=null;
            $scope.FamilyID1=null;
            $scope.FamilyName2=null;
            $scope.FamilyID2=null;
            $scope.emergancyName=null;
            $scope.emergancyNumber=null;
            alert('Error Occured!');

          }
		   });
	      };
	      $scope.uploadedFile = function(element) {
		    $scope.currentFile = element.files[0];
		    var reader = new FileReader();


		    reader.onload = function(event) {
		      $scope.image_source = event.target.result
		      $scope.$apply(function($scope) {
		        $scope.files = element.files;
		      });
		    }
                    reader.readAsDataURL(element.files[0]);
		  }

});

app.controller('patientSearchCntl', function($scope, $location) {
  $scope.home=function() {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function() {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };
  $scope.registerDoctor=function() {
      $location.path('/registerDoctor');
  };
  $scope.searchDoctor=function() {
      $location.path('/searchDoctor');
  };
  $scope.registerPatient=function() {
      $location.path('/registerPatient')
  };
  $scope.IDSearch=function() {
      $location.path('/IDSearch');
  };
  $scope.eyeScanSearch=function() {
      $location.path('/eyeScanSearch');
  };
  $scope.faceIDSearch=function() {
      $location.path('/faceIDSearch');
  };
  $scope.registerLab=function()
  {
    $location.path('/registerLab');
  };
  $scope.registerPharmacy=function()
  {
    $location.path('/registerPharmacy');
  };
  $scope.searchLab=function()
  {
    $location.path('/searchLab');
  };
  $scope.searchPharmacy=function()
  {
    $location.path('/searchPharmacy');
  };
  $scope.fingerprint=function()
  {
    $location.path('/fingerprint');
  };


});

app.controller('IDSearchCntl', function($scope, $location, $http) {
      $scope.searchPatientID=function() {
        var patientID=$scope.patientID;

        $http({
          method: 'GET',
          url: 'http://18.216.245.34/EMR/php/searchPatientID.php?patientID='+patientID
        }).then(function(response2) {
          $scope.users = response2.data;

        });
      };
});

app.controller('eyeScanSearchCntl', function($http, $scope) {

$scope.send = function(){
    getPrediction();

};

function getPrediction(){
  $http({
    url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/962fe2bf-4df5-4906-b15b-74c93095c688/classify/iterations/Iteration9/url',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Prediction-Key': '2b7a35233f0642a488def603e60ba46c'
    },
    data: {"Url": "http://18.216.245.34/EMR/php/upload/upload.png"}
  }).then(function (response) {
    var ID = response.data.predictions[0].tagName;
    getPatientId(ID);
  });
}
function getPatientId(ID){
  $http({
    method: 'GET',
    url: 'http://18.216.245.34/EMR/php/searchPatientID.php?patientID='+ID
  }).then(function (response2){
    $scope.users = response2.data[0];
  });
}

});

app.controller('faceIDSearchCntl', function($http, $scope) {
  $scope.form = [];
  $scope.files = [];

  $scope.submit = function() {
    $scope.form.image = $scope.files[0];
    //var ID=$scope.patientID;

    $http({
  method  : 'POST',
  url     : 'http://18.216.245.34/EMR/faceUpload.php',
  processData: false,
  transformRequest: function (data) {
      var formData = new FormData();
      formData.append("image", $scope.form.image);
      return formData;
  },
  data : $scope.form,
  headers: {
         'Content-Type': undefined
  }
}).then(function(response){

  $scope.users = response.data;

 });

  };
  $scope.uploadedFile = function(element) {
  $scope.currentFile = element.files[0];
  var reader = new FileReader();


  reader.onload = function(event) {
    $scope.image_source = event.target.result
    $scope.$apply(function($scope) {
      $scope.files = element.files;
    });
  }
              reader.readAsDataURL(element.files[0]);
}

});

app.controller('doctorcntl', function($scope, $http, $location, user) {
        $scope.doctorlogin=function () {
          var Username=$scope.Username;
          var Password=$scope.Password;

          $http({
            url: 'http://18.216.245.34/EMR/php/doctorlogin.php',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'Username='+Username+'&Password='+Password
          }).then(function (response) {
              if(response.data.status == 'loggedin')
              {
                user.saveData(response.data);
                $location.path('/doctorDashboard');
              }
              else
                {
                  alert('Invalid Username & Password Combination!');
                }
          });
        };
});

app.controller('doctorDasboardCntl', function($scope, $location, user) {
  $scope.user=user.getName();

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };

  $scope.ChangePass=function() {
      $location.path('/doctorChangePassword');
  };

  $scope.IDsearch=function() {
      $location.path('/IDSearchAndEdit');
  };

  $scope.FaceIDSearch=function() {
      $location.path('/faceIDSearchAndEdit')
  };
  $scope.EyeScanSearch=function() {
      $location.path('/eyeScanSearchAndEdit')
  };

});

app.controller('doctorChangePassword', function($scope, $http, user, $location) {
  $scope.user=user.getName();
  $scope.ChangePass=function() {
      var newPassword=$scope.newPassword;

      $http({
        url: 'http://18.216.245.34/EMR/php/doctorPasswordUpdate.php',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'newPassword='+newPassword+'&id='+user.getId()+'&user='+user.getName()
      }).then(function (response) {
          if(response.data.status == 'done')
          {
            $scope.newPassword=null;
            alert('Password Updated Succusfully');
          }
          else
            {
              $scope.newPassword=null;
              alert('Error Occured!');

            }
      });
  };

  $scope.home=function() {
    $location.path('/doctorDashboard');
  };

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };

  $scope.IDsearch=function() {
    $location.path('/IDSearchAndEdit');
  };

  $scope.FaceIDSearch=function() {
    $location.path('/faceIDSearchAndEdit')
  };
  $scope.EyeScanSearch=function() {
    $location.path('/eyeScanSearchAndEdit')
  };
});

app.controller('IDSearchAndEditCntl', function($scope, $location, $http) {

  $scope.searchPatientID=function() {
    var patientID=$scope.patientID;

    $http({
      method: 'GET',
      url: 'http://18.216.245.34/EMR/php/searchPatientId.php?patientID='+patientID
    }).then(function(response) {
      $scope.users = response.data;
    });

    $http({
      method: 'GET',
      url: 'http://18.216.245.34/EMR/php/searchMedicalHistory.php?patientID='+patientID
    }).then(function(response2) {
      $scope.medical = response2.data;
    });

  };

  $scope.addPrescription=function()
  {
    $location.path('/prescription');
  };
  $scope.updatePrescription = function () {
    $location.path('/updatePrescription');
  };
});

app.controller('prescriptionCntl', function($http, $location, $scope)
{
   $scope.submit=function()  {
    var desease=$scope.desease;
    var drug1=$scope.drug1;
    var drug2=$scope.drug2;
    var drug3=$scope.drug3;
    var drug4=$scope.drug4;
    var drug5=$scope.drug5;
    var quantity1=$scope.quantity1;
    var quantity2=$scope.quantity2;
    var quantity3=$scope.quantity3;
    var quantity4=$scope.quantity4;
    var quantity5=$scope.quantity5;
    var report=$scope.report;
    var id=$scope.id;

    $http({
      method  : 'POST',
      url     : 'http://18.216.245.34/EMR/php/addPrescription.php',
      processData: false,
      transformRequest: function (data) {
        var formData = new FormData();
        formData.append("PatientId", id);
        formData.append("desease", desease);
        formData.append("report", report);
        formData.append("drug1", drug1);
        formData.append("drug2", drug2);
        formData.append("drug3", drug3);
        formData.append("drug4", drug4);
        formData.append("drug5", drug5);
        formData.append("quantity1", quantity1);
        formData.append("quantity2", quantity2);
        formData.append("quantity3", quantity3);
        formData.append("quantity4", quantity4);
        formData.append("quantity5", quantity5);
        return formData;
    },
    data : $scope.form,
    headers: {
           'Content-Type': undefined
    }
  }).then(function(response){
    if(response.data.status == 'done')
    {
      $scope.drug1=null;
      $scope.drug2=null;
      $scope.drug3=null;
      $scope.drug4=null;
      $scope.drug5=null;
      $scope.quantity1=null;
      $scope.quantity2=null;
      $scope.quantity3=null;
      $scope.quantity4=null;
      $scope.quantity5=null;
      $scope.report=null;
      $scope.desease=null;
      $scope.id=null;
      alert('Prescription Added Succusfully!!');
    }
    else
      {
        $scope.drug1=null;
        $scope.drug2=null;
        $scope.drug3=null;
        $scope.drug4=null;
        $scope.drug5=null;
        $scope.quantity1=null;
        $scope.quantity2=null;
        $scope.quantity3=null;
        $scope.quantity4=null;
        $scope.quantity5=null;
        $scope.report=null;
        $scope.desease=null;
        $scope.id=null;
        alert('Error Occured!');

      }
   });
  };
  $scope.exit=function()
  {
    $location.path('/doctorDashboard')
  }
});

app.controller('updatePrescriptionCntl', function($http, $location, $scope)
{
  $scope.exit=function(){
    $location.path('/doctorDashboard')
  };
  $scope.submit=function()  {
   var desease=$scope.desease;
   var drug1=$scope.drug1;
   var drug2=$scope.drug2;
   var drug3=$scope.drug3;
   var drug4=$scope.drug4;
   var drug5=$scope.drug5;
   var quantity1=$scope.quantity1;
   var quantity2=$scope.quantity2;
   var quantity3=$scope.quantity3;
   var quantity4=$scope.quantity4;
   var quantity5=$scope.quantity5;
   var report=$scope.report;
   var id=$scope.id;

   $http({
     method  : 'POST',
     url     : 'http://18.216.245.34/EMR/php/updatePrescription.php',
     processData: false,
     transformRequest: function (data) {
       var formData = new FormData();
       formData.append("prescriptionId", id);
       formData.append("desease", desease);
       formData.append("report", report);
       formData.append("drug1", drug1);
       formData.append("drug2", drug2);
       formData.append("drug3", drug3);
       formData.append("drug4", drug4);
       formData.append("drug5", drug5);
       formData.append("quantity1", quantity1);
       formData.append("quantity2", quantity2);
       formData.append("quantity3", quantity3);
       formData.append("quantity4", quantity4);
       formData.append("quantity5", quantity5);
       return formData;
   },
   data : $scope.form,
   headers: {
          'Content-Type': undefined
   }
 }).then(function(response){
   if(response.data.status == 'done')
   {
     $scope.drug1=null;
     $scope.drug2=null;
     $scope.drug3=null;
     $scope.drug4=null;
     $scope.drug5=null;
     $scope.quantity1=null;
     $scope.quantity2=null;
     $scope.quantity3=null;
     $scope.quantity4=null;
     $scope.quantity5=null;
     $scope.report=null;
     $scope.desease=null;
     $scope.id=null;
     alert('Prescription Update Request Succusfully!!');
   }
   else
     {
       $scope.drug1=null;
       $scope.drug2=null;
       $scope.drug3=null;
       $scope.drug4=null;
       $scope.drug5=null;
       $scope.quantity1=null;
       $scope.quantity2=null;
       $scope.quantity3=null;
       $scope.quantity4=null;
       $scope.quantity5=null;
       $scope.report=null;
       $scope.desease=null;
       $scope.id=null;
       alert('Error Occured!');

     }
  });
 };


});

app.controller('eyeScanSearchAndEditCntl', function($scope, $location, $http) {
    $scope.send = function(){
        getPrediction();
    };

    function getPrediction(){
      $http({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/962fe2bf-4df5-4906-b15b-74c93095c688/classify/iterations/Iteration11/url',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Prediction-Key': '2b7a35233f0642a488def603e60ba46c'
        },
        data: {"Url": "http://18.216.245.34/EMR/php/upload/upload.png"}
      }).then(function (response) {
        var ID = response.data.predictions[0].tagName;
        alert(ID)
        getPatientId(ID);
      });
    }
    function getPatientId(ID){
      $http({
        method: 'GET',
        url: 'http://18.216.245.34/EMR/php/searchPatientId.php?patientID='+ID
      }).then(function (response2){
        $scope.users = response2.data[0];
        getMedicalRecords(ID);
      });
    }
    function getMedicalRecords(){
      $http({
        method: 'GET',
        url: 'http://18.216.245.34/EMR/php/searchMedicalHistoryEye.php?patientID='+ID
      }).then(function(response4) {
        $scope.medical = response4.data[0];
      });
    }
  $scope.addPrescription=function(){
    $location.path('/prescription');
  };
  $scope.updatePrescription = function () {
    $location.path('/updatePrescription');
  };
});

app.controller('faceIDSearchAndEditCntl', function($scope, $location, $http) {
  $scope.form = [];
  $scope.files = [];


  $scope.submit = function() {
  $scope.form.image = $scope.files[0];
  var patientID="";

  $http({
  method  : 'POST',
  url     : 'http://18.216.245.34/EMR/faceUpload.php',
  processData: false,
  transformRequest: function (data) {
      var formData = new FormData();
      formData.append("image", $scope.form.image);
      return formData;
  },
  data : $scope.form,
  headers: {
         'Content-Type': undefined
  }
}).then(function(response){

  $scope.users = response.data;
  patientID=response.data.Id;
  $http({
    method: 'GET',
    url: 'http://18.216.245.34/EMR/php/searchMedicalHistory.php?patientID='+patientID
  }).then(function(response) {
    $scope.medical = response.data;
  });
 });
  };
  $scope.uploadedFile = function(element) {
  $scope.currentFile = element.files[0];
  var reader = new FileReader();


  reader.onload = function(event) {
    $scope.image_source = event.target.result
    $scope.$apply(function($scope) {
      $scope.files = element.files;
    });
  }
    reader.readAsDataURL(element.files[0]);
}

$scope.addPrescription=function(){
  $location.path('/prescription');
};
$scope.updatePrescription = function () {
  $location.path('/updatePrescription');
};
});

app.controller('registerLabCntl', function($scope, $location, $http)
{
  $scope.home=function()
  {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function()
  {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function ()
  {
    $location.path('/staffLogOut');
  };
  $scope.searchDoctor=function()
  {
    $location.path('/searchDoctor');
  };

  $scope.registerPatient=function()
  {
    $location.path('/registerPatient');
  };
  $scope.patientSearch=function()
  {
    $location.path('/patientSearch');
  };
  $scope.registerDoctor=function()
  {
    $location.path('/registerDoctor');
  };
  $scope.searchLab=function()
  {
    $location.path('/searchLab');
  };
  $scope.searchPharmacy=function()
  {
    $location.path('/searchPharmacy');
  };

  $scope.form = [];

  $scope.submit = function()
  {
    var name=$scope.name;
    var regNo=$scope.regNo;
    var labUsername=$scope.labUsername;
    var labPassword=$scope.labPassword;

  	$http({
  		method  : 'POST',
  		url     : 'http://18.216.245.34/EMR/php/registerLab.php',
  		processData: false,
      transformRequest: function (data)
      {
  		  var formData = new FormData();
        formData.append("name", name);
        formData.append("regNo", regNo);
        formData.append("labUsername", labUsername);
        formData.append("labPassword", labPassword);

  			return formData;
  		},
  		data : $scope.form,
      headers:
      {
  			'Content-Type': undefined
  		}
      }).then(function(response){
        if(response.data.status == 'done')
        {
          $scope.name=null;
          $scope.regNo=null;
          $scope.labUsername=null;
          $scope.labPassword=null;
          alert('Laboratary Registered Succusfully');
        }
        else
          {
            $scope.name=null;
            $scope.regNo=null;
            $scope.labUsername=null;
            $scope.labPassword=null;
            alert('Error Occured!');

          }
  		  });
    };
});

app.controller('registerPharmacyCntl', function($scope, $location, $http)
{
  $scope.home=function()
  {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function()
  {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function ()
  {
    $location.path('/staffLogOut');
  };
  $scope.searchDoctor=function()
  {
    $location.path('/searchDoctor');
  };

  $scope.registerPatient=function()
  {
    $location.path('/registerPatient');
  };
  $scope.patientSearch=function()
  {
    $location.path('/patientSearch');
  };
  $scope.registerLab=function()
  {
    $location.path('/registerLab');
  };

  $scope.registerDoctor=function()
  {
    $location.path('/registerDoctor');
  };
  $scope.searchLab=function()
  {
    $location.path('/searchLab');
  };
  $scope.searchPharmacy=function()
    {
      $location.path('/searchPharmacy');
    };
  $scope.form = [];

  $scope.submit = function()
  {
    var name=$scope.name;
    var regNo=$scope.regNo;
    var pharmacyUsername=$scope.pharmacyUsername;
    var pharmacyPassword=$scope.pharmacyPassword;

  	$http({
  		method  : 'POST',
  		url     : 'http://18.216.245.34/EMR/php/registerPharmacy.php',
  		processData: false,
      transformRequest: function (data)
      {
  		  var formData = new FormData();
        formData.append("name", name);
        formData.append("regNo", regNo);
        formData.append("pharmacyUsername", pharmacyUsername);
        formData.append("pharmacyPassword", pharmacyPassword);

  			return formData;
  		},
  		data : $scope.form,
      headers:
      {
  			'Content-Type': undefined
  		}
      }).then(function(response){
        if(response.data.status == 'done')
        {
          $scope.name=null;
          $scope.regNo=null;
          $scope.pharmacyUsername=null;
          $scope.pharmacyPassword=null;
          alert('Pharmacy Registered Succusfully');
        }
        else
          {
            $scope.name=null;
            $scope.regNo=null;
            $scope.pharmacyUsername=null;
            $scope.pharmacyPassword=null;
            alert('Error Occured!');

          }
  		  });
    };
});

app.controller('searchLabCntl', function ($scope, $location, $http) {
  $scope.home=function() {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function() {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };
  $scope.registerDoctor=function() {
      $location.path('/registerDoctor');
  };

  $scope.registerPatient=function() {
      $location.path('/registerPatient')
  };
  $scope.patientSearch=function() {
      $location.path('/patientSearch')
  };
  $scope.registerLab=function()
  {
    $location.path('/registerLab');
  };
  $scope.registerPharmacy=function()
  {
    $location.path('/registerPharmacy');
  };
  $scope.searchDoctor=function()
  {
    $location.path('/searchDoctor');
  };
  $scope.searchPharmacy=function()
  {
    $location.path('/searchPharmacy');
  };

  $scope.searchLab=function() {
      var labid=$scope.labid;

      $http({
        method: 'GET',
        url: 'http://18.216.245.34/EMR/php/searchLab.php?labid='+labid
      }).then(function(response2) {
        $scope.users = response2.data;

      });
    };
});

app.controller('searchPharmacyCntl', function ($scope, $location, $http) {
  $scope.home=function() {
    $location.path('/staffDashboard');
  };

  $scope.staffChangePass=function() {
    $location.path('/staffChangePassword');
  };

  $scope.staffOut=function () {
      $location.path('/staffLogOut');
  };
  $scope.registerDoctor=function() {
      $location.path('/registerDoctor');
  };

  $scope.registerPatient=function() {
      $location.path('/registerPatient')
  };
  $scope.patientSearch=function() {
      $location.path('/patientSearch')
  };
  $scope.registerLab=function()
  {
    $location.path('/registerLab');
  };
  $scope.registerPharmacy=function()
  {
    $location.path('/registerPharmacy');
  };
  $scope.searchDoctor=function()
  {
    $location.path('/searchDoctor');
  };
  $scope.searchLab=function()
  {
    $location.path('/searchLab');
  };

  $scope.searchPharmacy=function() {
      var pharmacyid=$scope.pharmacyid;

      $http({
        method: 'GET',
        url: 'http://18.216.245.34/EMR/php/searchPharmacy.php?pharmacyid='+pharmacyid
      }).then(function(response2) {
        $scope.users = response2.data;

      });
    };
});

app.controller('labLoginCntl', function($scope, $http, $location, user) {
  $scope.login=function () {
    var Username=$scope.Username;
    var Password=$scope.Password;

    $http({
      url: 'http://18.216.245.34/EMR/php/labLogin.php',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'Username='+Username+'&Password='+Password
    }).then(function (response) {
        if(response.data.status == 'loggedin')
        {
          user.saveData(response.data);
          $location.path('/labDashboard');
        }
        else
          {
            alert('Invalid Username & Password Combination!');
          }
    });
  };
});

app.controller('pharmacyLoginCntl', function($scope, $http, $location, user) {
  $scope.login=function () {
    var Username=$scope.Username;
    var Password=$scope.Password;

    $http({
      url: 'http://18.216.245.34/EMR/php/pharmacyLogin.php',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'Username='+Username+'&Password='+Password
    }).then(function (response) {
        if(response.data.status == 'loggedin')
        {
          user.saveData(response.data);
          $location.path('/pharmacyDashboard');
        }
        else
          {
            alert('Invalid Username & Password Combination!');
          }
    });
  };
});

app.controller('labDashboardCntl', function($scope, $location,$http, user, patient) {
  $scope.user=user.getName();

  $scope.submit = function() {
    var patientID=$scope.patientID;

  $http({
  method  : 'POST',
  url     : 'http://18.216.245.34/EMR/php/searchReport.php',
  processData: false,
  transformRequest: function (data) {
      var formData = new FormData();
      formData.append("patientID", patientID);
      return formData;
  },
  data : $scope.form,
  headers: {
         'Content-Type': undefined
  }
  }).then(function(response){
    $scope.report=response.data;
    if(response.data.status == 'loggedin')
    {
      patient.saveData(response.data);
    }
    else
    {
      alert('Error Occured!');
    }
  });
  };

    $scope.form = [];
	  $scope.files = [];
	  $scope.upload = function() {
    $scope.form.image = $scope.files[0];
    var prescriptionId=patient.getprescriptionId();
    var patientID=patient.getpatientid();

	  $http({
			method  : 'POST',
			url     : 'http://18.216.245.34/EMR/php/uploadReport.php',
			processData: false,
			transformRequest: function (data) {
			var formData = new FormData();
      formData.append("image", $scope.form.image);
      formData.append("prescriptionId", prescriptionId);
      formData.append("patientID", patientID);
			return formData;
		},
		data : $scope.form,
		headers: {
			    'Content-Type': undefined
		}
    }).then(function(response){
      if(response.data.status == 'done')
      {
        alert('Report Uploaded Succusfully');
      }
      else
        {
          alert('Error Occured!');

        }
		  });
	  };
	  $scope.uploadedFile = function(element) {
		  $scope.currentFile = element.files[0];
		  var reader = new FileReader();

		reader.onload = function(event) {
		  $scope.image_source = event.target.result
		  $scope.$apply(function($scope) {
		  $scope.files = element.files;
		});
	}
      reader.readAsDataURL(element.files[0]);
}
  $scope.logOut=function()
  {
    $location.path('/staffLogOut');
  };
});

app.controller('pharmacyDashboardCntl', function($scope, $location,$http, user, patient) {
  $scope.user=user.getName();

  $scope.submit = function() {
    var patientID=$scope.patientID;

    $http({
      method: 'GET',
      url: 'http://18.216.245.34/EMR/php/searchPrescription.php?patientID='+patientID
    }).then(function(response) {
      $scope.prescription = response.data;
    });
    };
    $scope.logOut=function()
  {
    $location.path('/staffLogOut');
  };
  $scope.qrcode=function()
  {
    $location.path('/qrcode');
  };
});

app.controller('qrCntl', function($scope,$http)
{
  $scope.submit = function() {
    var ID=$scope.ID;

    $http({
      method: 'GET',
      url: 'http://18.216.245.34/EMR/qrcode.php?ID='+ID
    }).then(function(response) {
      $scope.qrcode=response.data;

    });
    };
});

app.controller('fingerprintCntl', function($scope,$http)
{
  $scope.regFinger=function()
  {
    var patientID=$scope.patientID;
    var port=$scope.port;

    $http({
      method  : 'POST',
      url     : 'http://18.216.245.34/EMR/fingerprint.php',
      processData: false,
      transformRequest: function (data) {
      var formData = new FormData();
      formData.append("patientID", patientID);
      formData.append("port", port);
      return formData;
    },
    data : $scope.form,
    headers: {
         'Content-Type': undefined
       }
     }).then(function(response) {
       alert(response.data);
       $scope.output = response.data;


    });
  };
});

app.controller('admincntl', function($scope, $http, $location, user) {
        $scope.login=function () {
          var Username=$scope.Username;
          var Password=$scope.Password;

          $http({
            url: 'http://18.216.245.34/EMR/php/adminlogin.php',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'Username='+Username+'&Password='+Password
          }).then(function (response) {
              if(response.data.status == 'loggedin')
              {
                user.saveData(response.data);
                $location.path('/adminDashboard');
              }
              else
                {
                  alert('Invalid Username & Password Combination!');
                }
          });
        };
});

app.controller('adminDashboardCntl', function($scope, $location,$http, user) {
  $scope.user=user.getName();
    $scope.logOut=function(){
    $location.path('/staffLogOut');
  };

  $http({
    method: 'GET',
    url: 'http://18.216.245.34/EMR/php/getAdminRecords.php'}).then(function(response) {
    $scope.medical = response.data;
    $scope.id = response.data.ID;
  });

  $scope.accept = function(){
    $http({
      method: 'GET',
      url: 'http://18.216.245.34/EMR/php/acceptAdmin.php?ID='+$scope.id
    }).then(function(response) {
      if(response.data.status=='done'){
        alert('Approve Succusfully!!');
        window.location.reload();
      }else{
        alert('Error Occured!!');
      }

    });
  };
  $scope.ignore = function(){
    $http({
      method: 'GET',
      url: 'http://18.216.245.34/EMR/php/ignoreAdmin.php?ID='+$scope.id
    }).then(function(response) {
      if(response.data.status=='done'){
        alert('Approve Declined!!');
        window.locationreload();
      }else{
        alert('Error Occured!!');
      }

    });
  };

});

app.controller('managementcntl', function($scope, $http, $location, user) {
        $scope.login=function () {
          var Username=$scope.Username;
          var Password=$scope.Password;

          $http({
            url: 'http://18.216.245.34/EMR/php/managementlogin.php',
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: 'Username='+Username+'&Password='+Password
          }).then(function (response) {
              if(response.data.status == 'loggedin')
              {
                user.saveData(response.data);
                $location.path('/managementDashboard');
              }
              else
                {
                  alert('Invalid Username & Password Combination!');
                }
          });
        };
});

app.controller('managementDashboardCntl', function($scope, $location,$http, user) {
  $scope.user=user.getName();
    $scope.logOut=function(){
    $location.path('/staffLogOut');
  };

  $http({
    method: 'GET',
    url: 'http://18.219.8.85/EMR/php/getManagementRecords.php'}).then(function(response) {
    $scope.medical = response.data;
    $scope.id = response.data.ID;
  });

  $scope.accept = function(){
    $http({
      method: 'GET',
      url: 'http://18.219.8.85/EMR/php/acceptManagement.php?ID='+$scope.id
    }).then(function(response) {
      if(response.data.status=='done'){
        alert('Approve Succusfully!!');
        window.location.reload();
      }else{
        alert('Error Occured!!');
      }

    });
  };
  $scope.ignore = function(){
    $http({
      method: 'GET',
      url: 'http://18.219.8.85/EMR/php/ignoreManagement.php?ID='+$scope.id
    }).then(function(response) {
      if(response.data.status=='done'){
        alert('Approve Declined!!');
        window.locationreload();
      }else{
        alert('Error Occured!!');
      }

    });
  };

});

app.controller('eyeRegisterCntl', function($scope, $location){
  $scope.exit = function () {
    $location.path('/staffDashboard');
  };
});
