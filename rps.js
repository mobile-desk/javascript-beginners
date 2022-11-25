// rock, paper and scissors

let p1 = readLine("What is your play player 1: ")
let p2 = readLine("What is your play player 2: ")

if (p1 == 'rock'){
    if (p2 == 'rock'){
        console.log("Tie")
    } else if (p2 == 'paper') {
        console.log("Player 2 wins")
    } else {
        console.log("Player 1 wins")
    }
    
} else if (p1 == 'paper') {
    if (p2 == 'rock'){
        console.log("Player 1 wins")
    } else if (p2 == 'paper') {
        console.log("Tie")
    } else {
        console.log("Player 2 wins")
    }
    
} else {
    if (p2 == 'rock'){
        console.log("Player 2 wins")
    } else if (p2 == 'paper') {
        console.log("Player 1 wins")
    } else {
        console.log("Tie")
    }
    
}

