export async function FetchData(model, id){
    let url, options

    !id ? url = `https:beta.pizzaluce.com/api/${model}`
        : model != 'menu' ? url = `https://beta.pizzaluce.com/api/${model}/${id}`
            : url = `https://beta.pizzaluce.com/api/${model}/${id}/full`

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