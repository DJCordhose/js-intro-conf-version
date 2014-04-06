(function() {
"use strict";

var personen = [
    {
        name: "Olli",
        alter: 42,
        geschlecht: "M"
    },
    {
        name: "Oma",
        alter: 100,
        geschlecht: "W"
    },
    {
        name: "Gertrude",
        alter: 55,
        geschlecht: "W"
    }
];

/**
 * Gibt die Person auf der Console aus
 *
 * @param person Eine Person vom Typ Person
 * @returns Keine Rückgabe
 */
function logPerson(person) {
    var info = "Alter von " + person.name + ": " + person.alter;
    console.log(info);
}

personen.forEach(function(person) {
    logPerson(person);
});

// oder

personen.forEach(logPerson);

personen.push({name: "Methusalem", alter: 969, geschlecht: "M"});

function check(person) {
    if (person.alter > 140) {
        throw new Error("Alter über 140 kann doch nicht sein!");
    }
}
personen.forEach(function(person) {
    try {
        check(person);
    } catch (error) {
        console.log("Fehler gefunden: " + error.message);
    } finally {
        console.log("Fertig");
    }
});

//throw "Mich fängt keiner!";
//console.log("Hier kommt das Programm nicht an");

var alterArray = personen.map(function (person) {
    return person.alter;
});
console.log(alterArray);

var durchschnitt = alterArray.reduce(function (gesamtAlter, alter) {
        return gesamtAlter + alter;
    }, 0) / personen.length;

console.log("Durchschnittsalter=" + durchschnitt);
}());
