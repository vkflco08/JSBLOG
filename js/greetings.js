const greetings = [
    "Record your to-do list for today.",
    "Organize your to-do list for today.",
    "What needs to be done today?",
    "Jot down your tasks for the day.",
    "Record your schedule for today.",
    "What are the tasks that need to be completed today?",
    "Which tasks should be prioritized?",
    "Organize your daily tasks.",
    "Create a list of tasks to complete.",
    "Write down your tasks for today to manage your schedule."
]

const greet = document.getElementById("greet");

const todaysGreet = greetings[Math.floor(Math.random() * greetings.length)];

greet.innerText = todaysGreet;