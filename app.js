
// variables

const tasks = []
const taskList = document.getElementById('todos')
const form = document.getElementById('form')
const modal = document.getElementById('modal')
const hms = document.getElementById("hms")
const notificationEl = document.getElementById("notification")

let timeTimer = 25*60
var countdown
var modalClosed = false

form.addEventListener('submit', (e)=>{
    time = new Date()
    e.preventDefault()
    
    const task = {
        "id": tasks.length + 1,
        "description": e.target.input.value,
        "completed": false,
        // "createdAt": `${time.getDay()}/${time.getMonth() + 1}/${time.getFullYear()}`
    }

    saveTask(task)

    e.target.input.value = ''
})

// guarda la tarea
const saveTask = (task)=>{
    tasks.push(task)
    showTasks()
}

// mostrar todas las tareas
const showTasks = ()=>{

    if (!tasks.length == 0) {
        const taskCount = document.getElementById('tasks-count')
        taskCount.textContent = `${tasks.length} tasks` 
        taskList.innerHTML = ''       
    }

    tasks.forEach(element => {
        showTasksITem(element)
    });
}

// muestra una tarea

const showTasksITem = (item)=>{
    const li = document.createElement('li')

    li.id = `li_${item.id}`

    li.innerHTML =  `
        <span id="checkbox_${item.id}" onclick="updateTodo(${item.id})" class="span">&#9898;</span>
        <input type="text" id="description_${item.id}" value="${item.description}" onchange="updatedTask(this)" disabled="true" class="input-todo">
        <span class="span" onclick="openModal(${item.id})">${item.completed ? "&#10004;" : "&#8987;"}</span>
    `

    taskList.appendChild(li)
}

// agrega un nuevo item en la lista de tareas
const addTaskItem = ()=>{
    const li = document.createElement('li')

    li.innerHTML =  `
        <input type="checkbox" name="" >
        <input type="text" placeholder="Do a very important task" id="description" >
        <span onclick="saveTask(this)"> &#10004;</span>
    `

    li.classList.add('task_item')

    taskList.appendChild(li)
}


// actualiza una tarea
const updateTodo = (id)=>{
    const li = document.getElementById(`li_${id}`)

    todo = getOneTodo(id)

    li.innerHTML = ''

    li.innerHTML = `
        <form id="form_${id}">
            <input type="text" class="input edit" id="input_${id}" placeholder="Enter your todo" autocomplete="off" value="${todo.description}">
        </form>
    `
    const form = document.getElementById('form_' + id)

    form.addEventListener('input', ()=>{
        todo.description = form.children[0].value
    })

    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        showTasks()
    })
}

// obtener una tarea
const getOneTodo = (id)=>{
    const todoOne = tasks.find(element => element.id == id)
    return todoOne
}

//seleccionar una tarea
const selectedTask = (id)=>{
    const time = new Date()
    description = document.getElementById(`description_${id}`)
    actions = document.getElementById(`actions_${id}`)

    description.disabled = false
    actions.innerHTML = '&#10004;'

    taskOne = tasks.find(element => element.id == id)

    

    actions.addEventListener('click', ()=>{
        showTasks()
    })
}

// preparar lista de tareas para ser borradas
const deleteTasks = ()=>{
    const tasksEl = document.querySelectorAll("li")

    tasksEl.forEach(element => {
        const checkbox = document.getElementById(element.children[0].id)

        checkbox.innerHTML = `<span>&#10006;</span>`
    });
}

// modal
const openModal = (id)=>{
    modal.style.display = "block"

    document.getElementById('').style.display = 'none'
    modalClosed = false
    
}

const closeModal = ()=>{
    modal.style.display = "none"
    
    // document.getElementById('timer').style.display = 'block'
    modalClosed = true
}



/*Notification */

const notification = (title, time)=>{
    notificationEl.innerHTML = ''

    notificationEl.innerHTML = `
        <span id="" class="span">&#9898;</span>
        <div class="content">
            <p>Mobile App Design</p>
            <span class="span">30 minutes</span>
        </div>
        <div class="content">
            <span>1/4</span>
            <p id="timer" class="timer"></p>
        </div>
        <span class="close" >&times;</span>
    `

    
}


showTasks()