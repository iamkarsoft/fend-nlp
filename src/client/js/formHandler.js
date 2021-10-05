function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('/text',{
        method: "POST",
        credentials: "same-origin",
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(function(res){

        const result = res.json();
        console.log(result);
        return result;

    })
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}


export { handleSubmit }
