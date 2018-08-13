// export const addMealRequest = data => dispatch => {
//     console.log("Adding my meals");
//     console.log(data);
//     let payload = {
//         method: 'POST',
//         body: data,
//         headers: {
//             "Content-Type": "application/json",
//             // "Authorization": this.props.loginData.access_token
            
//             // "Authorization": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MzM2NDYzMTMsInN1YiI6MSwiaXNfYWRtaW4iOiJGYWxzZSJ9.9Y6jZwyhiKPDCO8cAFFA948TFKaGYKQrm0ZF0pFyXE8"

//         }
//     }
    

//     fetch(`http://127.0.0.1:5000/api/v1/meals`, payload)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error=>console.log(error))
//     // console.log(fetch(`https://bookameal-.herokuapp.com/auth/signup`, payload)

// }
export const deleteMealRequest = data => dispatch => {
    console.log("you are deleting");
    console.log(data);
    let payload = {
        method: 'DELETE',

    }

    fetch(`http://127.0.0.1:5000/api/v1/meals/${meal.id}`, payload)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

}


// class deleteMealRequest{
//     static deleteMeal(meal){
//         const request = new Request(`http://127.0.0.1:5000/api/v1/meals/${meal.id}`, {
//             method: 'DELETE'
//         });

//         return fetch(request).then(response => {
//             return response.json();
//         })
//         .catch(error => {
//             return error;
//         });
//     }
// }

// export default deleteMealRequest;
