var dog = {
    bark: function() {
      console.log('bark');
    } 
};
var myZo = Object.create(dog);
var myDog = Object.create(myZo);
var empty = Object.create(null);

var testNull = null;
var testUndefinded;

tests({
    'It should return true if argument 1 is the prototype of paramter 2.': function() {
        eq(isPrototypeOf(myZo, myDog), true);
    },
    'It should return false if an object is not the prototype of another object.': function() {
        eq(isPrototypeOf(myZo, empty), false);
    },
    'It should work if argument 1 is Object.prototype.': function() {
        eq(isPrototypeOf(Object.prototype, myDog), true);
    },
    'It should work on any number of prototype links.': function() {
        eq(isPrototypeOf(dog, myDog), true);
    },
    'It should throw TypeError if argument 1 is null or undefinded.': function() {
        try {
            isPrototypeOf(testNull, {});
          } catch (e) {
            eq(e instanceof TypeError, true);
        };
        try {
            isPrototypeOf(testUndefinded, {});
          } catch (e) {
            eq(e instanceof TypeError, true);
        };
    },
    'It should throw TypeError if argument 2 is null or undefined.': function() {
        try {
            isPrototypeOf({}, testNull);
          } catch (e) {
            eq(e instanceof TypeError, true);
        };
        try {
            isPrototypeOf({}, testUndefinded);
          } catch (e) {
            eq(e instanceof TypeError, true);
        };
    }
});
