function convertHTML(str) {
    var literal = {
        "&" : "&amp;",
        "<" : "&lt;",
        ">" : "&gt;",
        '""': "&quot;",
        "'": "&apos;"
        };
        return str.split('').map(function(char){
            return literal[char] || char;
            
        }).join('');
        return str;
        }
    convertHTML("Dolce & Gabbana");