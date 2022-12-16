import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { DEFAULT_IMAGE, NA } from '../../lib/constantes'
import { useNavigate } from 'react-router-dom'


const Noticia = ({
    noticia,
    onChange
}) => {
    const onCardClick = () => {
        onChange && onChange(noticia);
    };

    return(
        <Card sx={{ with: 250, marginBottom: 10 }}>
          <CardActionArea onClick={onCardClick}>
            <CardMedia
                components="img"
                height="140"
                with={250}
                image={noticia.Poster === NA ? DEFAULT_IMAGE : noticia.Poster}
                alt={noticia.Title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {noticia.Title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {noticia.Plot}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {noticia.autor}
                </Typography>
            </CardContent>
          </CardActionArea>  
        </Card>
    );
}

export const ListaNoticias = ({ noticias }) => {
    const navigate = useNavigate();
    const onNoticiaClick = ({ imdbID }) => {
        navigate('/noticias/${imdbID}');
    }
    return (
    <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '20px',
      }}>
        {
          noticias.map((noticia) => {
              return <noticia noticia={noticia} onChange={onNoticiaClick} />
          })
        }
    </section>
    )
}

export default Noticia;