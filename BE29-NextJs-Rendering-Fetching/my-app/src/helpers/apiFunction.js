//* Fetching Data on the Server with fetch
//? next.js ile fetch api çekilen verileri default olarak cache'ler. bu özelliği option objesi ile değiştirebiliriz
//* const res = await fetch(URL, { cache: "force-cache" }); default
//* const res = await fetch(URL, { cache: "no-store" }); no cache
//*   const res = await fetch(URL, { next: { revalidate: 10 } }); belirlenen saniye cinsinden süre sonunda veriyi tekrar çek tekrar
const URL = `http://localhost:8080/users`;


//* force cache

export const getUsers = async() => {
    const res = await fetch(URL)

    if(!res.ok) {
        throw new Error ('Failed to fetch data')
    }
    const data = await res.json()
    return data
}