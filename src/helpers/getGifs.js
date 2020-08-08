export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI( category ) }&limit=5&api_key=YZbBl8tS3nUlB6hKDE2zRv4fUWZADs8q`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => 
        ({
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        })
    )
   // console.log(gifs);
    return gifs;
}