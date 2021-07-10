export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?limit=10&q=${ encodeURI(category) }&api_key=RW3UBtSce8LfJ61PMQ6byWamshcuTJzf`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(gif => {
    return {
      id: gif.id,
      url: gif.images.downsized_medium.url,
      title: gif.title,
    }
  })

  return gifs;
}