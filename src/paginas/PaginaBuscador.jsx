import { Container } from "@mui/material";
import {useEffect} from "react";
import {useState } from "react" ;
import Buscador from "../components/Buscador/Buscador";
import Loading from "../components/Loading/Loading";
import Paginador from "../components/Paginador/Paginador";
import { ListaNoticias } from "../components/Noticias/Noticias";
import { getListadoNoticias } from "../servicios/noticias";
import { useSearchParams } from "react-router-dom"


const PaginaBuscador = () => {
    const [Noticias, getNoticias] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [cantidadPaginas, setCantidadPaginas] = useState(1);
    const [pagina, setPagina] = useState(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if(searchParams.get('query')) {
            buscarNoticias(pagina)
        }
    }, [searchParams, pagina]);
    
    
    const buscarNoticias = async () => {
        setIsLoading(true);
        const { Search: noticia, totalResults } = await getListadoNoticias(searchParams.get('query'), pagina);
        getNoticias(noticia);
        setCantidadPaginas(Math.ceil(parseInt(totalResults)/10))
        setIsLoading(false);
    }
    

    const onBuscar =  (criterioBusqueda) => {
        setSearchParams({ query: criterioBusqueda });
    }

    const onCambioPagina = (pagina) => {
        setPagina(pagina);
    };

    return (
        <Container maxWidth='sm'>
            <Buscador onBuscar={onBuscar}/>
            { isLoading && <Loading /> }
            { Noticias && <ListaNoticias noticias={Noticias}/> }
            { Noticias && <Paginador cantidadPaginas={cantidadPaginas} onChange={onCambioPagina} /> }
        </Container>
    )
}

export default PaginaBuscador;
