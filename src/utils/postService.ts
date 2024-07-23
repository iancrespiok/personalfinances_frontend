export const postService = (body: any) => {
    fetch("http://localhost:8080/createCategory", {method: "POST", body})  
        .then(response => response.json())
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
}