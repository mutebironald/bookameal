class deleteMealRequest{
    static deleteMeal(meal){
        const request = new Request(`http://127.0.0.1:5000/api/v1/meals/${meal.id}`, {
            method: 'DELETE'
        });

        return fetch(request).then(response => {
            return response.json();
        })
        .catch(error => {
            return error;
        });
    }
}

export default deleteMealRequest;
