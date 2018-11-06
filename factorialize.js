function factorialize(num) {
    if (num === 1 || num === 0)
        return 1;

 for (var i = num - 1; i >= 1; i--) {
     num = num * i
 }
  return num;

}

factorialize(5);