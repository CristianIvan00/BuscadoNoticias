import { Pagination, Paper } from "@mui/material"

const Paginador = ({
    cantidadPaginas,
    onChange
}) => {
    const cambiarPagina = (_evento, pagina) =>{
        onChange(pagina);
    };

    return (
        <Paper sx={{paddingLeft:'300px', maxWidth: '750px',marginTop: '1px', textAlign: 'center'}}>
            <Pagination 
                count={cantidadPaginas}
                color="secondary"
                onChange={cambiarPagina}
            />
        </Paper>
       
    );
}

export default Paginador;