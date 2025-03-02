let todo=[];

let req = prompt("Please enter your request");

while(true)
{
    if(req=="quit")
    {
        console.log("Quitting the app");
        break;
    }
    
    if(req=="list")
    {
        for(i=0;i<todo.length;i++)
        {
            console.log(` ${i+1}, ${todo[i]}`);
        }
    }

    if(req=="delete"){
        todo.pop();
    }

    if(req=="add"){
        let task=prompt("please enter the task");
        todo.push(task);
        console.log("task added");
    }

    req = prompt("Please enter your request");
}

