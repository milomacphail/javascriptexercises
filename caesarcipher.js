function rot13(str) {LBH QVQ VG!
str = str.split('').map(cipher).join('');
return str;
function cipher(char){ 
    var regEx = /[^a-zA-Z]/g;
    if (regEx.test(char)){
    return char;  }
    var ascii = char.charCodeAt(0);
    if(ascii > 77){
        ascii = ascii -=13;
        } else { ascii = ascii += 13; }
        return String.fromCharCode(ascii);}
        console.log(cipher('A'));