// Goal Options
const bcrypt = require('bcryptjs')
const chats = []


module.exports = {

    // Endpoints and Database

    // Get Compliment
    getCompliment: (req, res) => {
        const compliments = ["You deserve everyones best hug!", "In this moment... you are a complete person!", "You are making a difference!"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    
    //Get Fortune
    getFortune: (req, res) => {
        const fortunes = ["Your companion will want to share your meal ~D", "You'll be able to complete a task... an easy one ;D", "You'll find time to sit in peace, even for a second", "You'll find fullfillment in walking forward", "You'll find something healthy as a reward or gift tog your future self" ];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomfortune = fortunes[randomIndex];
      
        res.status(200).send(randomfortune);
    },

    //POST Goal
    createGoal: (req, res) => {
        console.log(req.body)
          const { pin, goal } = req.body
          for (let i = 0; i < chats.length; i++) {
            const existing = bcrypt.compareSync(pin, chats[i].pinHash)
            if (existing) {
              chats[i].goals.push(Goal)
              let goalsToReturn = {...chats[i]}
              delete goalsToReturn.pinHash
              res.status(200).send(goalsToReturn)
              return
            }
          }
  
          const salt = bcrypt.genSaltSync(5)
          const pinHash = bcrypt.hashSync(pin, salt)
  
          let msgObj = {
            pinHash,
            goals: [goal]
          }
          chats.push(msgObj)
          let goalsToReturn = {...msgObj}
          delete goalsToReturn.pinHash
          res.status(200).send(goalsToReturn)
      }

}