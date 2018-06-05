# ClassicEtherWallet tab version.

To add new tab into ClassicEtherWallet, you need to copy files from the git and add the strings in these files:

## Below this string in the [app/scripts/translations/en.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/translations/en.js#L12)

```
    /* Officiality Checker tab */
    NAV_OfficialityChecker      : 'Callisto Officiality Checker',
    OC_Check                    : 'Check',
    OC_Label_1                  : 'Allows you to check whether a certain media resource is considered "official" at Callisto or not.',
    OC_Label_2                  : 'Enter link to the media resource:',
  
```

## Below this string in the [app/scripts/services/globalService.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/services/globalService.js#L113)

```
        officialityChecker: {
            id: 15,
            name: "NAV_OfficialityChecker",
            url: "officiality-checker",
            mew: true,
            cx: true
        },
```

## Below this string in the [app/scripts/main.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/main.js#L88)

`var officialityCheckerCtrl = require('./controllers/officialityCheckerCtrl');`

## Below this string in the [app/scripts/main.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/main.js#L170)

`app.controller('officialityCheckerCtrl', ['$scope', officialityCheckerCtrl]);`

## Below this string in the [app/scripts/controllers/tabsCtrl.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/controllers/tabsCtrl.js#L175)

```
        if ($scope.curNode.type === "CLO") $scope.tabNames.officialityChecker.cx = $scope.tabNames.officialityChecker.mew = true;
        else $scope.tabNames.officialityChecker.cx = $scope.tabNames.officialityChecker.mew = false;

```

## Below this string in the [app/layouts/index.html](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/layouts/index.html#L27)

`@@include( '../includes/officialityChecker.tpl', { "site": "cew" } )`
  


