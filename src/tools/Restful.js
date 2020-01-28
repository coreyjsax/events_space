export async function FetchData(model, id){
    let url, options

    !id ? url = `https:beta.pizzaluce.com/api/${model}`
        : url = `http://localhost:5000/api/${model}/${id}`

    try {
        const res = await fetch(url, options)
        const json = await res.json()
        console.log(res)
        return json
    } catch (error) {
        console.log(error)
        return error
    }
}