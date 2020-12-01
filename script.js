for (let i = 1; i <= 100; i++){
    i % 3 === 0 && i % 5 === 0 ? document.getElementById("text").innerHTML += "fizzbuzz<br>" :
        i % 3 === 0 ? document.getElementById("text").innerHTML += "fizz<br>" :
            i % 5 === 0 ? document.getElementById("text").innerHTML += "buzz<br>" :
                document.getElementById("text").innerHTML += i+"<br>"
}