import React,{ useEffect } from "react";
import { useState } from "react";
import { getNoticia } from "../servicios/noticias";
import './PaginaNoticias.css'

const PaginaNoticias = () => {
    const [Noticias, setNoticias] = useState();
    const [loading, setloading] = useState(false);
    const getNoticiaServicio = async () => {
        const res = await getNoticia();
        setNoticias(res);
        setloading(false)
    }
    return <section>
        noticia
    </section>
}

export default PaginaNoticias;