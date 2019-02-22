tests({
    'It should return 0.62.': function () {
        debugger;
        eq(rewriteAccountingJS(0.615, 2), '0.62');
    },
    'It should return 10.24.': function() {
        eq(rewriteAccountingJS(10.235, 2), '10.24');
    },
    'It should return 1.01.': function() {
        eq(rewriteAccountingJS(1.005, 2), '1.01');
    },
    'It should return 1.005.': function() {
        eq(rewriteAccountingJS(1.005, 3), '1.005');
    }
});



