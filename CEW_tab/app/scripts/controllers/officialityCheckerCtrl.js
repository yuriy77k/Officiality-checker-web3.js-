'use strict';
var officialityCheckerCtrl = function ($scope) {

    $scope.input = {
        link: "",
        show: 0,
        step: 0,
    }

    $scope.hide = function () {
        $scope.input.show = 0;
    }
    
    $scope.callback = function (data) {
            $scope.input.step++;
            if (!data.error) {
                var res = ethUtil.solidityCoder.decodeParam('bool', data.data.replace('0x', ''));
                if (!res && $scope.input.step < 2) 
                    $scope.readContract();
                else {
                    if (res) 
                        $scope.input.show = 2;
                    else 
                        $scope.input.show = 3;
                }
            }
            else  
                $scope.notifier.danger(data.msg);
    }

    $scope.readContract = function () {
        var address = "0xf6f29e5ba51171c4ef4997bd0208c7e9bc5d5eda";
        var func = "is_official(string)";
        var link = $scope.input.link;
        if ($scope.input.step == 1)
        {
            if (!link.endsWith("/"))
                link = link.concat("/");
            else
                link = link.slice(0, -1);
        }
        var tx = ethFuncs.sanitizeHex(ethFuncs.getFunctionSignature(func) + ethUtil.solidityCoder.encodeParam("string", link));
        ajaxReq.getEthCall({to: address, data: tx}, $scope.callback);
    }

  
    $scope.handleSubmit = function () {
        $scope.input.show = 1;
        $scope.input.step = 0;

        $scope.readContract();
    }


};
module.exports = officialityCheckerCtrl;
