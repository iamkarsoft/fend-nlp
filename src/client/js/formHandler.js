function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputText = document.getElementById('name').value

    let payload = {inputText};


    fetch('http://localhost:8080/text',{
             method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(payload),
        })
    .then(response => response.json())
    .then(function(response) {
        document.getElementById('tense').innerHTML = inputText
        document.getElementById('model').innerHTML = response.model
        document.getElementById('confidence').innerHTML = response.confidence
    })
    }
export { handleSubmit }