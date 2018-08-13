export const userSignupRequest = data => dispatch => {
    console.log("Test Action")
    console.log(data)
    let payload = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",

        }
    }
    fetch(`https://bookameal-.herokuapp.com/auth/register`, payload)
    .then(response => response.json())
    .then(data => dispatch(
        {
            type: "SIGNUP_USER",
            payload: data
        }
    ))
    .catch(error=>error)

}
