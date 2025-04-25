function write_answer(answer)
{
    let antwort = document.querySelector("#antwort");
    antwort.innerText = answer ;
}

function greet(event)
{
    let name = document.querySelector("#name").value;
    write_answer("Hello, " + name);
    event.preventDefault();
}

function keyecho(field)
{
    let name = document.querySelector(field);
    name.addEventListener('keyup', function(event)
    {
        if (name.value)
        {
            write_answer(`Hello, ${name.value}`);
        }
        else
        {
            write_answer("Hello, whoever you are");
        }
    })
}

document.addEventListener('DOMContentLoaded',
    function() 
    {
        let form = document.querySelector("form");
        form.addEventListener("submit", greet);
        keyecho("#name");
    }
)

