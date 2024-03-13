let pwd
let attempts = 0
let maxAttemps = 4
do {
    pwd = +prompt('[password]')
    
    if(pwd === 7777) {
        alert("Success")
        break;
    } else {
        attempts++
        alert(`You have ${maxAttemps - attempts} attempts left`)
    }
} while (attempts < maxAttemps);

if(attempts === maxAttemps) {
    alert("Try again later")
}