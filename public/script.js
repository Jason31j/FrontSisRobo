function LoginHandler(e) {

    e.preventDefault()

    password = document.getElementById("password").value
    username = document.getElementById("username").value

    //set the data to make the request
    credentials = {
        username: username,
        password: password
    }

    url = ""
    options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)
    };

    //API request for authentication
    fetch(url, options).then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then(() => {
        window.location.href = "./dashboard.html"
    }).catch(e => {
        console.log(e);
    });
}
