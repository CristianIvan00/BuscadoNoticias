const API_KEY = 'pub_14716623e1863bd5d1b7ae3208821c0f5dc1e';

const NEWS_API = 'https://newsdata.io/api/1/news?';



export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${NEWS_API}q=${criterioBusqueda}&apiKey=${API_KEY}&page=${paginaActual}&language=es`);
    const noticias =  respuesta.json();
    console.log(noticias.status)
    return noticias;
    
}

export const getNoticia = async idNoticia => {
    const respuesta = await fetch(`${NEWS_API}?apikey=${API_KEY}&i=${idNoticia}`);
    const noticia = await respuesta.json();
    return noticia;
}
