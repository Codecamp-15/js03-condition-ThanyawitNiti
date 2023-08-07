let point =prompt("Grade")
message =
    point >= 80 && point <= 100
    ? "A"
    : point >= 70 && point<= 79
    ? "B"
    : point >= 60 && point<= 69
    ? "C"
    : point >= 50 && point<= 59
    ? "D"
    : point <50
    ? "F" 
    : 'F';
alert(message)
