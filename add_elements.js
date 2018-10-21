function nonMutatingPush(original, newItem) {
return original.concat(newItem);}
var first = [1, 2, 3];
second = [4, 5];
nonMutatingPush(first, second)