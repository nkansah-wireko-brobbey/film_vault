'use server'

export const fetchMovieData = async (page: number) =>{
    const response = await fetch(`https://shikimori.one/api/animes?${page}&limit=8`)

    console.log(response)

    const data = await response.json()

    return data;
}