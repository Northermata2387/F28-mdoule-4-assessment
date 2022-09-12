//Goal array
const goals = ["goal1", 'goal2', 'goal3']


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

    //Goal array
    getGoals: (req, res) => {
        res.status(200).send(goals)
    },

    addGoal: (req, res) => {
        let {item} = req.body
        goals.push(item)

        res.status(200).send(goals)
    },

    deleteGoal: (req, res) => {
        let index = req.params.id

        goals.splice(index, 1)

        res.status(200).send(goals)
    },

    editGoal: (req, res) => {
        let index = req.params.id
        let {item} = req.body

        goals.splice(index, 1, item)

        res.status(200).send(goals)
        
    },


}