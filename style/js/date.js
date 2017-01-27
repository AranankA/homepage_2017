/**
 * Created by AranankA on 18.01.2017 0018.
 */

function ZeitLM() {

    var jetzt = new Date();
    var then = new Date(document.lastModified);
    var dayNames = ["Sonntag",
        "Montag", "Dienstag",
        "Mittwoch", "Donnerstag",
        "Freitag", "Samstag"];
    var monthNames = ["Januar",
        "Februar", "März",
        "April", "Mai", "Juni",
        "Juli", "August", "September",
        "Oktober", "November", "Dezember"];
    var diffdays = Math.floor((jetzt.getTime() - then.getTime()) / (24 * 60 * 60 * 1000));
    var Stunden = then.getHours();
    var Minuten = then.getMinutes();
    var NachVoll = ((Minuten < 10) ? ":0" : ":");
    var Jahr = then.getFullYear();

    document.write("Letzte Aktualisierung dieser Seite: "
                    + dayNames[then.getDay()]
                    + ", "
                    + then.getDate()
                    + ". "
                    + monthNames[then.getMonth()]
                    + " "
                    + Jahr
                    + ", "
                    + Stunden
                    + NachVoll
                    + Minuten
                    + " Uhr,");

    if (diffdays == 1) {
        document.writeln (" vor " + diffdays + " Tag");
    }
    else {
        document.writeln (" vor " + diffdays + " Tagen");
    }
} /* EOF function ZeitLM() */
