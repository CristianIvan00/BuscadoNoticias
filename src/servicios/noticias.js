const API_KEY = '048eba7ae357421ca2dc7ed6a9ebe6b9'
const NEWS_API = 'https://newsapi.org/v2/everything?';



export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${NEWS_API}q=${criterioBusqueda}&apiKey=${API_KEY}&page=${paginaActual}&language=es`);
    const noticias =  respuesta.json();
    console.log(respuesta.status)
    return noticias
    
}

export const getNoticia = async idNoticia => {
    const respuesta = await fetch(`${NEWS_API}?apikey=${API_KEY}&i=${idNoticia}`);
    const noticia = await respuesta.json();
    return noticia;
}
