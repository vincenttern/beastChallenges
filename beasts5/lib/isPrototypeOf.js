(function () {
    
    function isPrototypeOf(prototypeObj, checkObj) {

        if (prototypeObj === null || typeof prototypeObj === 'undefined') {
            throw new TypeError('prototypeObj is either null or undefined.');
        }

        if (checkObj === null || typeof checkObj === 'undefined') {
            throw new TypeError('checkObj is either null or undefined.');
        }

        var checkObj = Object.getPrototypeOf(checkObj);
        if (checkObj !== null) {
            // Base case.
            if (prototypeObj === checkObj) {
                return true;
            } else {
                // Recursive case.
                return isPrototypeOf(prototypeObj, checkObj);
            }
        }
        return false;

    }

    window.isPrototypeOf = isPrototypeOf;
})();