
// variables

const tasks = []
const taskList = document.getElementById('task')

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

    li.innerHTML =  `
        <input type="checkbox" name="" id="checkbox_${item.id}">
        <input type="text" id="description_${item.id}" value="${item.description}" onchange="updatedTask(this)">
        <span>${item.createdAt}</span>
    `

    li.classList.add('task_item')

    taskList.appendChild(li)
}

// agrega un nuevo item en la lista de tareas

const addTaskItem = ()=>{
    const li = document.createElement('li')

    li.innerHTML =  `
        <input type="checkbox" name="" id="">
        <input type="text" placeholder="Do a very important task" id="description" >
        <span onclick="saveTask(this)">save</span>
    `

    li.classList.add('task_item')

    taskList.appendChild(li)
}

// guarda la tarea
const saveTask = ()=>{
    const time = new Date()
    const idTask = tasks.length + 1
    const description = document.getElementById('description')
    
    let newTask = {
        "id":idTask,
        "description": description.value,
        "done": false,
        "createdAt": `${time.getDay()}/${time.getMonth() + 1}/${time.getFullYear()}`
    }

    tasks.push(newTask)

    showTasks()
}

// actualiza una tarea

const updatedTask = (event)=>{
    
    alert(event.value)
    console.log(event.value)
    // saveTask()
}

showTasks()