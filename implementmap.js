
var s = [23, 65, 98, 5];
nArray.prototype.myMap = function(callback){ 
    var newArray = [];
    for (var i = 0; i < s.length; i++){
        newArray.push(s[i] * 2);
    }
    return newArray;
    };
    var new_s = s.myMap(function(item){
        return item * 2;
        
    });