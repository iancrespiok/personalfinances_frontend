export const getService = () => {
    fetch("http://localhost:8080/getCategories", {method: "GET"})  
        .then(response => response.json())
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
}