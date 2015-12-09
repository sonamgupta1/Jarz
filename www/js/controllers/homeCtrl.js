IonicBankApp.controller('HomeCtrl',function($scope,$state){

//    payInformation = function(sendMoney,receiveMoney,purpose){
//
//        console.log("send money",sendMoney);
//
//        console.log("rec money",receiveMoney);
//
//        console.log("purpose",purpose);
//
//    }
//
//    fx.base = "USD";
//    fx.rates = {
//        "EUR" : 0.745101, // eg. 1 USD === 0.745101 EUR
//        "GBP" : 0.647710, // etc...
//        "HKD" : 7.781919,
//        "USD" : 1     // always include the base rate (1:1)
//        /* etc */
//    }
//
//    $.getJSON(
//        // NB: using Open Exchange Rates here, but you can use any source!
//        'https://openexchangerates.org/api/latest.json?app_id=33c97fa9a95344919f3f31d1005ffc41',
//        function(data) {
//            // Check money.js has finished loading:
//            if ( typeof fx !== "undefined" && fx.rates ) {
//                fx.rates = data.rates;
//                fx.base = data.base;
//            } else {
//                // If not, apply to fxSetup global:
//                var fxSetup = {
//                    rates : data.rates,
//                    base : data.base
//                }
//            }
//        }
//    );

})