const addInput = document.querySelector('#add-task')

const addBtn =  document.querySelector('#add-btn')
const delTaskBtn  =  document.querySelector('#del-btn')


const delBtn = document.querySelector('.del-task')

const newTasks = document.querySelector('.new-tasks')

delTaskBtn.addEventListener('click', () => {
    addInput.value = ''
})


addBtn.addEventListener('click', (e)=> {
    let todo = addInput.value
    todo = todo.trim()
    if (todo==''){
        alert('No task is added ')
    }else{
        console.log(todo)
        addTodo(todo)
        addInput.value = ''
        updateTodo()
    }
})



function addTodo(todo){
    let todoTask  = ` 
                <div class="task">
					<input type="text" id="added-task" name='todo' disabled value="${todo}">
                    <div>
                        
                        <input type="button" value="Delete" name='delete' title='delete task' class="del-task">
                    </div>
                </div>
                ` 
    newTasks.innerHTML += todoTask

}


function updateTodo(){
    

    let task  = document.querySelectorAll('.task')

    task.forEach((t) => {
        // console.log(t.children)
        t.addEventListener('click', e =>{

             if(e.target.classList.contains('del-task')) {
                t.remove()
            }
            
           
        })

    })
    
}