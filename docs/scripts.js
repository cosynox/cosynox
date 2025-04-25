function greet(event)
{
    let name = document.querySelector("#name").value;
    let antwort = document.querySelector("#antwort");
    antwort.innerText = 'Hello, ' + name ;
    event.preventDefault();
}

document.addEventListener('DOMContentLoaded',
    function() 
    {
        let form = document.querySelector("form");
        form.addEventListener("submit", greet);
    }
)
