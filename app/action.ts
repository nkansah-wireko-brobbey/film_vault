'use server'

export const fetchMovieData = async (page: number) =>{
    const response = await fetch(`https://shikimori.one/api/animes?${page}&limit=8`)

    
    const data = await response.json()
    
    console.log(data)
    return data;
}