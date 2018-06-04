# ClassicEtherWallet tab version.

To add new tab into ClassicEtherWallet, you need to copy files from the git and add the strings in these files:

## [app/scripts/translations/en.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/translations/en.js#L12)

```
    /* Officiality Checker tab */
    NAV_OfficialityChecker      : 'Officiality Checker',
    OC_Check                    : 'Check',
    OC_Label_1                  : 'Enter link to the media resource:',
```

## [app/scripts/services/globalService.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/services/globalService.js#L113)

```
        officialityChecker: {
            id: 15,
            name: "NAV_OfficialityChecker",
            url: "officiality-checker",
            mew: true,
            cx: true
        },
```

## [app/scripts/main.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/main.js#L88)

`var officialityCheckerCtrl = require('./controllers/officialityCheckerCtrl');`

## [app/scripts/main.js](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/scripts/main.js#L170)
`app.controller('officialityCheckerCtrl', ['$scope', officialityCheckerCtrl]);`

## [app/layouts/index.html](https://github.com/EthereumCommonwealth/etherwallet/blob/ae9f7359a39a6a46f33c56772bdcd85b0d58ed6a/app/layouts/index.html#L27)

`@@include( '../includes/officialityChecker.tpl', { "site": "cew" } )`
  


