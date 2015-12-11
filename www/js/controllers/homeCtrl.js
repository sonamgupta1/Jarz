IonicBankApp.controller('HomeCtrl', function ($scope, $filter, $ionicLoading, $http, $ionicPopup) {


    $scope.Data = {};
    $scope.Data = {"toCurrency": null};
    $scope.Data.amount = "";
    $scope.Data.currentDate = $filter("date")(Date.now(), 'yyyy-MM-dd');
    $scope.Data.date = $scope.Data.currentDate;

    $scope.getValue = function () {
        var data = {};
        data = $scope.Data;
        console.log("Data is ", data)
    }

    var apiKey = "33c97fa9a95344919f3f31d1005ffc41";
    var baseUrl = "http://openexchangerates.org/api/";

    $scope.url = baseUrl + "latest.json?app_id=" + apiKey;

//    $ionicLoading.show();
    $http.get($scope.url)
        .success(function (response) {
            $scope.result = response;
        })
        .error(function (response, status) {
            $scope.showAlert('Error!!!', response.message);
        })
        .finally(function () {
//            $ionicLoading.hide();
        });

    $scope.getExchangeRate = function () {
        if ($scope.Data.date != $scope.Data.currentDate) {
//            $ionicLoading.show();
            $scope.url = baseUrl + "historical/" + $scope.Data.date + ".json?app_id=" + apiKey;

            $http.get($scope.url)
                .success(function (response) {
                    $scope.historicalresult = response;
                    fx.rates = response.rates;
                    fx.base = response.base;
                    $scope.exchangeRate = fx($scope.Data.amount).from('GBP').to($scope.Data.toCurrency).toFixed(2);
                })
                .error(function (response, status) {
                    $scope.showAlert('Error!!!', response.message);
                })
                .finally(function () {
//                    $ionicLoading.hide();
                });
        }
        else {
            fx.rates = $scope.result.rates;
            fx.base = $scope.result.base;
            $scope.exchangeRate = fx($scope.Data.amount).from('GBP').to($scope.Data.toCurrency).toFixed(2);
        }
    };

    $scope.showAlert = function (alertTitle, alertTemplate) {
        var alertPopup = $ionicPopup.alert({
            title: alertTitle,
            template: alertTemplate
        });
        alertPopup.then(function (res) {
            console.log('Log Error');
        });
    };

    $scope.popupDemo = function () {
        var alertPopup = $ionicPopup.alert({
            template: 'The estimated exchange rate may change by the time Jeff creates an account and receives your payment. We will tell you the final rate and total cost when the transfer is complete!'
        });
        alertPopup.then(function (res) {
            console.log('Thanks');
        });
    };

    $scope.popupDemoNext = function () {
        var alertPopup = $ionicPopup.alert({
            template: 'Every time a friend signs up with your code, they get their first transfer free (up to 5.00 USD). When they make their first transfer, you will also receive a free transfer (up to 5.00 USD), which will be applied to your account automatically. '
        });
        alertPopup.then(function (res) {
            console.log('Thanks');
        });
    };


})