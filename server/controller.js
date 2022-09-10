module.exports = {

    // EndPoints and Database

    getCompliment: (req, res) => {
        const compliments = ["You deserve everyones best hug!", "In this moment... you are a complete person!", "You are making a difference!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}