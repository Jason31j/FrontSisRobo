function LoginHandler(e) {

    e.preventDefault()

    console.log("Entro al boton")

    password = document.getElementById("password").value
    username = document.getElementById("username").value

    //set the data to make the request
    credentials = {
        username: username,
        password: password
    }

    url = "http://127.0.0.1:8000/api/validate/"
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
    }).then((data) => {

            if (data.length === 0) {
                console.log("primer if")
                return alert("Usuario o contraseña incorrectos")
            }

            if (data[0]["username"] == username && data[0]["password"] == password) {
                console.log("segundo if")

                return window.location.href = "./dashboard.html"
            }

        }).catch(e => {
            console.log(e);
        });

    console.log("final")
}
