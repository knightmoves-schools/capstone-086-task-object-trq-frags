let tasks = ['pack spikes for track meet', 'make my bed', 'walk the dog'];
            
function drawCard(index, description){
    return `<div id="task-${index}" class="card">
        <div class="task-menu">
            <div class="menu-bar todo">...</div>
            <ul class="task-menu-items">
                <li><a href="/edit/${index}">Edit</a></li>
                <li><a href="/delete/${index}">Delete</a></li>
            </ul>
        </div>
        ${description}
    </div>`
}

function drawCards(){
    let output = '';
    
    tasks.forEach((task, index) => output += drawCard(index, task));
    
    return output;
}

document.getElementById('todo-cards').innerHTML = drawCards();
