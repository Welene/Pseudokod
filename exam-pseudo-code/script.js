// LÄNK TILL FIGJAM: https://www.figma.com/board/kWuoWkmOCRvpO4bQruo0PN/Untitled?node-id=0-1&p=f&t=nfowPgW9SSu3a1sJ-0


// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock

/*
START

    INPUT totalSum = "Write in total sum of bill"
        IF totalSum is >1 =  valid, continue to next INPUT
        ELSE DISPLAY "Invalid: bill cannot be less than 1 SEK"

    INPUT amountOfPeople = "Write how many that share the bill"
        IF amountOfPeople is >1 = valid, continue to next INPUT
        ELSE DISPLAY "Invalid: must be more than 1 person"

    INPUT valueOfTips = "Write how much you want to tip in decimals 0.01-0.99 (1%-99%)"
        IF valueOfTips is >0.01 and <0.99 = valid, continue to CALCULATE
        ELSE DISPLAY "Invalid: number must be between 0.01 - 0.99. Example: 0.10 = 10%"

    CALCULATE sharedSum = totalSum + valueOfTips / amountOfPeople
        RETURN sharedSum
    DISPLAY "Each person will pay: " + sharedSum

END
*/

// Smallest bill possible to share is 1 SEK.
// Biggest tip possible to give is 99% of totalSum.

// Översatt kod jag använde för att testa om pseudokoden fungerar:

let totalSum;
while (true) {
    totalSum = parseFloat(prompt("Write in total sum of bill:"));
    if (totalSum > 1) {
        break;
    } else {
        alert("Invalid: bill cannot be less than 1 SEK.");
    }
}

let amountOfPeople;
while (true) {
    amountOfPeople = parseInt(prompt("Write how many that share the bill:"), 10);
    if (amountOfPeople > 1) {
        break;
    } else {
        alert("Invalid: must be more than 1 person.");
    }
}

let valueOfTips;
while (true) {
    valueOfTips = parseFloat(prompt("Write how much you want to tip in decimals (0.01 - 0.99, e.g., 0.10 for 10%):"));
    if (valueOfTips >= 0.01 && valueOfTips <= 0.99) {
        break;
    } else {
        alert("Invalid: number must be between 0.01 - 0.99. Example: 0.10 = 10%.");
    }
}

const sharedSum = (totalSum + (totalSum * valueOfTips)) / amountOfPeople;
alert(`Each person will pay: ${sharedSum.toFixed(2)} SEK`);




// livet lät mig inte hinna VG uppgiften, men jag hann åtminstone kolla lite på den.

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

FUNCTION play()
    SET variabel ordbok = [EYE, DYE, DIE, LIE, LID];
    SET variabel startOrd till "EYE";
    SET variabel slutordOrd till "LID";


END FUNCTION

FUNCTION isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    // Här behöver du skriva koden för din funktion

    RETURN diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
END FUNCTION

*/
