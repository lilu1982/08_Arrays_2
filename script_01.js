/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion satzbau([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
ausgabe(getSentence(["Ich","bin","Peter"],"S"));
ausgabe(getSentence(["Bist","du","Peter"],"Q"));
ausgabe(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));
ausgabe(getSentence(["Ich","bin"],"E"));
ausgabe(getSentence(["Ich","bin"],"#"));
function getSentence(arr,flag) {
    
    const gap     = " ";
    const punct   = getPunct(flag); //.
    let str     = "";

    for (let i = 0; i < arr.length; i++) 
    {
        if (i != (arr.length - 1)) { 
            str +=  arr[i] + gap;
        } else {
            str +=  arr[i] + punct;
        }
    }                

    return str ; 
}

/*** Service-Funktion / Punktuation */
// ausgabe(getPunct("S"));
// ausgabe(getPunct("Q"));
// ausgabe(getPunct("E"));
// ausgabe(getPunct("#"));
function getPunct(checkStr) {
    switch (checkStr) {
        case "S":
            return ".";
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return "."; // TBA
    }
}

/*** Ausgabe */
// ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}