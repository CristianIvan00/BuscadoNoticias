const API_KEY = 'pub_147160b95db4a37732651bbb8f2fa6f17e6bf';

const NEWS_API = 'https://newsdata.io/api/1/news?';



export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${NEWS_API}&q=${criterioBusqueda}&apiKey=${API_KEY}&page=${paginaActual}&language=es`);
    const noticias = await respuesta.json();
    console.log(respuesta)
    return noticias;
    
}

export const getNoticia = async idNoticia => {
    const respuesta = await fetch(`${NEWS_API}?apikey=${API_KEY}&i=${idNoticia}`);
    const noticia = await respuesta.json();
    return noticia;
}
