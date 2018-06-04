'use strict';
var officialityCheckerCtrl = function ($scope) {

    $scope.input = {
        link: "",
        show: false,
        res: "checking...",
        color: "#000000",
    }

    function link_normalization(link) {
        var res = link.toLowerCase();
        if (!res.endsWith("/"))
            res=res.concat("/");
        return res;
    }    

    $scope.hide = function () {
        $scope.input.show = false;
    }

    $scope.handleSubmit = function () {
        $scope.input.show = true;
        $scope.input.res = "checking...";
        $scope.input.color = "#000000";

        var address = "0xf6f29e5ba51171c4ef4997bd0208c7e9bc5d5eda";
        var func = "is_official(string)";
        var value =  link_normalization($scope.input.link);
        var tx = ethFuncs.sanitizeHex(ethFuncs.getFunctionSignature(func) + ethUtil.solidityCoder.encodeParam("string", value));

        ajaxReq.getEthCall({to: address, data: tx}, function (data) {
            if (!data.error) {
                var decoded = ethUtil.solidityCoder.decodeParam('bool', data.data.replace('0x', ''));
                if (decoded) {
                    $scope.input.res = "Is official.";
                    $scope.input.color = "#00cc00";
                }
                else {
                    $scope.input.res = "Is not official!";
                    $scope.input.color = "#ff0000";
                }
            } else  $scope.notifier.danger(data.msg);
        });
    }


};
module.exports = officialityCheckerCtrl;
