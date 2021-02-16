let pageNumber = document.getElementById('page-number')
let taskText = document.getElementById('task-text')
let taskId = document.getElementById('task-id')
let getTasksButton = document.querySelector('.get-tasks-btn')
let requestButton = document.querySelector('.request-btn')
let setTaskButton = document.querySelector('.set-task-btn')
let deleteTaskButton = document.querySelector('.delete-task-btn')

function onGetData(data) {
    data.forEach(element => {
        let container = document.createElement('img')
        container.src = element.thumbnail
        document.querySelector('.content').appendChild(container)
    });
}

function onGetTasks(array) {
    let content = document.querySelector('.task-content')
    content.innerHTML = ''
    array.forEach(element =>{
        let li = document.createElement('li')
        li.innerHTML = element.title
        li.appendChild(document.createElement('p')).append(element.id)
        content.appendChild(li)
    })
}

requestButton.addEventListener('click', function(){
    const promise = getData(pageNumber.value)
    promise
        .then(onGetData)
})

getTasksButton.addEventListener('click', function() {
    const promise = getTasks()
    promise.then(onGetTasks)
})

setTaskButton.addEventListener('click', function(){
    const promise = createTask(taskText.value)
    promise.then((data)=>{
        console.log(data)
    })
})

deleteTaskButton.addEventListener('click', function(){
    const promise = deleteTask(taskId.value)
    promise.then(()=>{
        console.log('deleted')
    })
})