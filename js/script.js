/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.
*/

//class34 students array
var class34 = [
    {
        firstName : "Marco",
        lastName : "Canopoli",
        age : 29
    },
    {
        firstName : "Mario",
        lastName : "Rossi",
        age : 24
    },
    {
        firstName : "Margherita",
        lastName : "Verdi",
        age : 29
    },
    {
        firstName : "Giovanni",
        lastName : "Bianchi",
        age : 29
    },
    {
        firstName : "Alessia",
        lastName : "Ferrari",
        age : 29
    }
];

//new student prompt with choice switch
var addStudentPrompt = "";
while (addStudentPrompt == "") {
    addStudentPrompt = prompt("Vuoi aggiungere uno studente alla classe? S/N").toLowerCase().trim();
    if (addStudentPrompt == "") {
        alert("Non hai immesso alcun valore, reinserisci")
    } 
}

switch (addStudentPrompt) {
    case "s" :
    case "si":
        do {
            newStudentPush(class34);
            var anotherStudent = anotherPrompt();
        } while (anotherStudent);
        if (!anotherStudent) {
            alert("Arrivederci!");
        }
        break;
    case "n" :
    case "no":
        alert("Hai scelto di non inserire alcuno studente, arrivederci!");
        break;
    default:
        alert("Comando non valido, arrivederci!");
}

//print properties for every class34 student object
for (var i = 0; i < class34.length; i++) {
    var student = class34[i];
    //student number h3
    var studentList = document.getElementById("studenti");
    studentList.innerHTML += "<h3>Studente #" + (i + 1) + "</h3>";
    //student data in li
    for (var key in student) {
        studentList.innerHTML += "<li>" + key + ": " + student[key] + "</li>";
    }
}

//Prompts for student first name, last name and age, creates an object, pushes it in array
function newStudentPush(array){    
    var newStudent = {};
    //validate first name
    do {
        newStudent.firstName = prompt("Inserisci il nome dello studente:").trim();
    } while (!ITLettersOnly(newStudent.firstName));

    //validate last name
    do {
        newStudent.lastName = prompt("Inserisci il cognome dello studente:").trim();
    } while (!ITLettersOnly(newStudent.lastName));    

    //validate age
    do {
        newStudent.age = parseInt(prompt("Inserisci l'eta' dello studente:"));
    } while (!validAge(newStudent.age));

    array.push(newStudent);
}

//asks for another student, returns true if  "s" or "si"
function anotherPrompt() {
    var continuePrompt = "";
    while (continuePrompt == "") {  
        continuePrompt = prompt("Aggiungere un altro? S/N").toLowerCase().trim();
    }

    return (continuePrompt == "s" || continuePrompt == "si");
}

//string validation ,returs true if string contains only italian alphabet letters
function ITLettersOnly(word) {
    var valid;
    if (!/[^a-zA-Zàèéìòóù' ]/.test(word) && word != "") {
        valid = true;
    }else {
        alert("Hai inserito caratteri non validi! Reinserire");
        valid = false;
    }
    return valid;
}

//age validation
function validAge (number) {
    var valid;
    if (isNaN(number) || number < 18 || number > 60) {
        alert("Eta' non valida! Reinserire");
        valid = false;
    } else {
        valid = true;
    }
    return valid;
}