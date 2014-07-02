function outer() {
    var used = "Olli";
    var unused = "Weg";
    return (function() {
        return "Text: " + used;
    });
}

var inner = outer();
console.log(inner());