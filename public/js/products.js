


let onSubmitHandler = (event) => {
    event.preventDefault()
    // document.getElementById("product").value
    let productName = event.target.productName.value
    let obj = {
    "productName": productName
    }
    axios.post("http://localhost:5000/products", obj, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => console.log("Response from axios:", response.data.message))
        .catch((err) =>  console.log(err) )
    console.log(obj)
    console.log(productName)
}