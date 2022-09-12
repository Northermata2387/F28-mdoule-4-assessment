//base URL

const baseURL = "http://localhost:4000"

// Step 1: Select HTML element

// Buttons
const complimentBtn = document.getElementById("complimentButton")
// Fortune button
const fortuneBtn = document.getElementById("fortuneButton")
// Step 1: (goal)select HTML element
const getGoalsBtn = document.getElementById('getGoals')

const goalList = document.getElementById('displayGoals')

const goalForm = document.getElementById('goalForm')
const goalInput = document.getElementById('goalInput')

const deleteForm = document.getElementById('deleteForm')
const deleteInput = document.getElementById('deleteInput')

const editForm = document.getElementById('editForm')
const editIndex = document.getElementById('editIndex')
const editInput = document.getElementById('editInput')







// Compliment Handle
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

// Fortune Handle
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

// 2. (goal) write our function
const getGoals = () => {
    axios.get(`${baseURL}/api/goals`)
        .then((res) => {
            console.log(res.data)
            const goals = res.data
            goalList.innerHTML = ''

            for(let i = 0; i < goals.length; i++) {
                let newGoal = document.createElement('li')
                newGoal.textContent = goals[i]
                goalList.appendChild(newGoal)
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

const addGoal = (event) => {
    event.preventDefault()

    let bodyObj = {
        item: addGoal.value
    }

    axios.post(`${baseURL}/api/addGoals`, bodyObj)
    .then((res) => {
        console.log(res.data)
        const goals = res.data
        goalList.innerHTML = ''

        for(let i = 0; i < goals.length; i++) {
            let newGoal = document.createElement('li')
            newGoal.textContent = goals[i]
            goalList.appendChild(newGoal)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const deleteGoal = (event) => {
    event.preventDefault()

    axios.delete(`${baseURL}/api/deleteGoal/${deleteForm.value}`)
    .then((res) => {
        console.log(res.data)
        const goals = res.data
        goalList.innerHTML = ''

        for(let i = 0; i < goals.length; i++) {
            let newGoal = document.createElement('li')
            newGoal.textContent = goals[i]
            goalList.appendChild(newGoal)
        }

        deleteInput.value = ''
    })
    .catch((err) => {
        console.log(err)
    })
}

const editItem = (e) => {
    e.preventDefault()

    let bodyObj = { 
        item: editInput.value
    }

    axios.put(`${baseURL}/api/editGoal/${editIndex.value} bodyObj`)
    .then((res) => {
        console.log(res.data)
        const goals = res.data
        goalList.innerHTML = ''

        for(let i = 0; i < goals.length; i++) {
            let newGoal = document.createElement('li')
            newGoal.textContent = goals[i]
            goalList.appendChild(newGoal)
        }

        editIndex.value = ''
        editInput.value = ''
    })
    .catch((err) => {
        console.log(err)
    })
}



// Step 3: Combine with event listener
getGoalsBtn.addEventListener('click', getGoals);
goalForm.addEventListener('submit', addGoal)
addGoal.addEventListener('submit', addNewGoal)
deleteForm.addEventListener('submit', deleteGoal)
editForm.addEventListener('submit', editItem)
