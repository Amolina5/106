function saveTask()
{
    console.log('saving task');
    //get values
    const title = $("#txtTitle").val();
    const descript = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title,descript,color,date,status,budget);
    //build an object
    let taskToSave = new Task(title, descript, color, date, status, budget);
    console.log(taskToSave);


//save to sever
$.ajax({
    tyoe:"POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    date: JSON.stringify(taskToSave),
    contentType: "application/json",
    success: function(response) {
    console.log(response);

    },
    error: function(error){
        console.log(error);
    }
    
});
//display task
displayTask(taskToSave)
}

function displayTask(task)
{
    console.log(task);
    let syntax = `<div class="task">
    <h5>${task.title}</h5>
        </div>
        <div><label>${task.status}</label></div>
        <div><label>${task.date}</label>
        <label>${task.budget}</label></div>`
        ;

        $(".list").append(syntax);
}

function testRequest(){
    $.ajax({
        type: "get",
        url: "http://fsdiapi.azurewebsites.net",
        success: function(response){
            console.log(response);
        },
        error: function(y)
        {
            console.log(y)
        }
        })
    }
function init(){
    console.log("task manager");
    // load data

    //hook the events
    $("#btnSave").click(saveTask);
}
window.onload = init;
