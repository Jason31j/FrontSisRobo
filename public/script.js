function LoginHandler(e) {

    e.preventDefault()
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
            return alert("Usuario o contraseña incorrectos")
        }

        if (data[0]["username"] == username && data[0]["password"] == password) {
            return window.location.href = "./dashboard.html"
        }

    }).catch(e => {
        console.log(e);
    });
}

function LogoutHandler() {
    return window.location.href = "./index.html"
}

function LoadData() {
    url = "http://127.0.0.1:8000/api/dataAC/"

    fetch(url).then(data => {
        if (!data.ok) {
            throw Error(data.status);
        }
        return data.json();
    }).then((data) => {

        //selecting the elements
        tittle1 = document.getElementById("tittle1");
        tittle2 = document.getElementById("tittle2");

        mode1 = document.getElementById("mode1");
        mode2 = document.getElementById("mode2");

        status1 = document.getElementById("status1");
        status2 = document.getElementById("status2");

        try {
            //editing the elements
            tittle1.innerHTML = data[0]["name"];
            tittle2.innerText = data[1]["name"];

            mode1.innerHTML = data[0]["mode"];
            mode2.innerHTML = data[1]["mode"];

            status1.innerHTML = data[0]["status"];
            status2.innerHTML = data[1]["status"];
        } catch {
            alert("Error cargando los datos");
        }
    }).catch(e => {
        console.log(e);
    });
}
