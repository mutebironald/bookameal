import axios from "axios";

export const updateMealRequest = (id, data) => dispatch => {
    // console.log("Test Action")
    // console.log(data)
    let payload = {
        method: "PUT",
        body: data,
        headers: {
            "Content-Type": "application/json",

        }
    }

    axios.put("http://127.0.0.1:5000/api/v1/meals/" + id,payload['body'])
    .then((response)=>{
        console.log(response)
        console.log(payload['body'])
        
        // {
        //     type: "UPDATE_MEAL",
        //     payload: response.data
        // }
    })
    .catch((error)=>{
        console.log(error.response.data)
        
    })

    



    // fetch(`https://bookameal-.herokuapp.com/api/v1/meals/1`, payload)
    // .then(response => response.json())
    // .then(data => dispatch(
    //     {
    //         type: "UPDATE_MEAL",
    //         payload: data
    //     }
    // ))
    // .catch(error=>error)
}
