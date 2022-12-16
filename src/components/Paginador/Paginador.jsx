import { Pagination } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onchange
}) => {
    const cambiarPagina = (_evento, pagina) =>{
        onchange(pagina);
    };

    return (
        <Pagination
            count={cantidadPaginas}
            color="secondary"
            onchange={cambiarPagina}
        />
    );
}

export default Paginador;