function shuffle(a) {
    let counter = a.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = a[counter];
        a[counter] = a[index];
        a[index] = temp;
    }

    return a;
}