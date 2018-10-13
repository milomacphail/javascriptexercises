function telephoneCheck(str) {
    var regCheck = /^(1\\s?)?(\\(\\d{3}\\)|\\d{3})[\\s\\-]?\\d{3}[\\s\\-]?\\d{4}$/;
    return regCheck.test(str);
    return true;
    
}
    
    telephoneCheck("555-555-5555")