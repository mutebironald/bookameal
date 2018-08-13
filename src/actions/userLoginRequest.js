export const userLoginRequest = data => dispatch => {
    console.log("Test Action")
    console.log(data)
    let payload = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",

        }
    }
    fetch(`https://bookameal-.herokuapp.com/auth/login`, payload)
    .then(response => response.json())
    .then(data => dispatch(
        {
            type: "LOGIN_USER",
            payload: data
        }
    ))
    .catch(error=>error)

}
