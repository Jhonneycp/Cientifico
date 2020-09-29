const API = 'https://rickandmortyapi.com/api/character/'
const APIPG = 'https://rickandmortyapi.com/api/character/?page='

const getData =  async (id, PG) => {
    const apiURL = id ? `${API}${id}` : `${APIPG}${PG}`

    try{
        const response = await fetch(apiURL)
        const data = await response.json()
        return data
    } catch(error){
        console.log('Fetch error', error)
    }
}

export default getData