for (let i = 1; i <= 100; i++){
    if ((i % 3 === 0) && (i % 5 !== 0)) {
        document.getElementById("text").innerHTML += "fizz<br>";
    }
    else if ((i % 5 === 0) && (i % 3 !== 0)) {
        document.getElementById("text").innerHTML += "buzz<br>";
    }

    else if ((i % 3 === 0) && (i % 5 === 0)) {
        document.getElementById("text").innerHTML += "fizzbuzz<br>";
    }

    else {
        document.getElementById("text").innerHTML += i+"<br>";
    }
}