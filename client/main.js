// Buttons
const complimentBtn = document.getElementById("complimentButton")
// Fortune button
const fortuneBtn = document.getElementById("fortuneButton")

// Compliment Handle
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

// Fortune Handle
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

// Goal Handle

const goalContainer = document.querySelector('#goal-container')
const goalForm = document.querySelector('#goal-form')

const postGoal = body => {
    axios.post("http://localhost:4000/api/goals/")
        .then(res => {
            console.log(res.data)
            displaygoals(res.data)
          }).catch(err => {
            console.log(err)
            alert('Uh oh. not working....')
    });
};

function submitHandler(e) {
    e.preventDefault()

    let pin = document.querySelector('#goal-pin-input')
    let goal = document.querySelector('#goal-input')

    let bodyObj = {
        pin: pin.value,
        goal: goal.value
    }

    postGoal(bodyObj)

    pin.value = ''
    goal.value = ''
}

function createGoal(data) {
    const goalCard = document.createElement('div')
    goalCard.classList.add('goal-card')

    goalCard.innerHTML = `<p class="goal">${data}</p>`


    goalContainer.appendChild(goalCard)
}

function displayGoals(data) {
  goalContainer.innerHTML = ``
  for (let i = 0; i < data.goals.length; i++) {
      createGoal(data.goals[i])
  }
}

goalForm.addEventListener('submit', submitHandler)