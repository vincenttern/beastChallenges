(function() {
    
    var getIndexOfDecimal;

    function rewriteAccountingJS(value, precision) {
        var valueToString = value.toString(); 
        var exponentialForm = getExponentialForm(valueToString, precision);
        var rounded = Math.round(exponentialForm);
        var addTheDecimalBack = addDecimalBack(rounded, precision);

        // If the decimal is at index[0] then add 0 to the beginning. 
        // eg. >>> '.62' >>> '0.62'.
        if (addTheDecimalBack.indexOf('.') === 0) {
            addTheDecimalBack = 0 + addTheDecimalBack;
        }

        return addTheDecimalBack;
    }

    function getExponentialForm(value, precision) {
        // Return value without decimal.    
        // (eg. '1.005' >>> '1005'). 
        var valueWithoutDecimal = value.replace(/\./g, ''); 
        var newValue;
        var count = 0;    

        // Set the index of the decimal.    
        // (eg. '1.005' >>> 1)
        getIndexOfDecimal = value.indexOf('.');   

        // Loop through valueWithoutDecimal ('1005').
        for (var i = getIndexOfDecimal; i < valueWithoutDecimal.length + 1; i++) {

            // Increment count if not equal to value of precision.
            if (count !== precision) {
                count++;
            } else {
                // Set newValue by concatentating the slice valueWithoutDecimal with decimal.
                //              ('1005' >>> '100')    +     '.'     +   ('1005' >>> '5')    =   ('100.5')
                newValue = valueWithoutDecimal.slice(0, i) + '.' + valueWithoutDecimal.slice(i);

                // If the decimal in newValue is at the last index then just return value of valueWithoutDecimal. 
                // (Only true if precision is greater than 2. eg '1005.' >>> '1005')
                if (newValue.lastIndexOf('.') === newValue.length - 1) {
                    return valueWithoutDecimal; 
                }

                return newValue;
            }
        }
    }

    function addDecimalBack(value, precision) {
        // Convert back to a string since Math.round changed it to a integer. 
        var valueToString = value.toString();
        var count = 0;
        var valueWithDecimal;

        // Loop through valueToString backwards.
        for (var i = valueToString.length; i >= 0; i--) {

            // Keep track of loop going backwards and until count equal to value of precision.
            if (count !== precision) {
                count++;
            } else {
                // Set valueWithDecimal by concatentating the slice valueToString with decimal since Math.round turned it to a whole number.
                //              ('101' >>> '1')    +     '.'     +   ('101' >>> '01')    =   ('1.01')
                valueWithDecimal = valueToString.slice(0, i) + '.' + valueToString.slice(i);
                return valueWithDecimal;
            }
        }
    }

    window.rewriteAccountingJS = rewriteAccountingJS;

})();
