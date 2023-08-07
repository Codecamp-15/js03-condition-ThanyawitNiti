let user = prompt('What is your name?');

if (user == "codecamp") {
    let pass = prompt('What is your paasword');
    if (pass== "123456") { 
        let user = "codecamp";
    } else {
        alert("wrong password");
    }

} else if (user === null || user.trim()==="" ) {
    let user = "guest"
    alert("welcome" + ' ' + user );
} else {
    alert("welcome" + ' ' + user );

}
