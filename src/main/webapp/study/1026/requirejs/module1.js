define(function (require, module, exports) {

    return {
        A: 'a',
        calc: function () {
            setTimeout(function () {
                console.log(1);
                var module2 = require('module2');

            }, 1000);
        }
    }
});
