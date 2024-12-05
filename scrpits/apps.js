function saveTask()
{
    console.log(`saving task`);
}

function init() {
    console.log("task manger");
    //load data

    //hook the events
    $("#btnSave").click(saveTask);

}

window.onload = init;
