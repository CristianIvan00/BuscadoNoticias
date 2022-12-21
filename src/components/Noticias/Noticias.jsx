import * as React from 'react';
import  Card  from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate, Link, BrowserRouter } from 'react-router-dom'
import { DateTime } from 'luxon';

const Noticia = ({
    noticia,
    onChange
}) => {
    const onCardClick = () => {
       onChange && onChange(<a href={noticia.link}></a>) 
    }
    

    return( 
        <Card sx={{marginLeft: '5px', width: '700px', marginBottom: 10 }}>
            <CardActionArea >
                <CardMedia/>
                <CardContent >
                 <a href={noticia.link}></a>
                    <Typography variant="h5" >
                        <a href={noticia.link}>
                            {noticia.title}
                        </a>  
                    </Typography>
                    <Typography  margin-left={'0px'} >
                        {noticia.DEFAULT_IMAGE}   
                    </Typography>
                    <Typography variant="h6" margin-left={'0px'} >
                        {noticia.description}   
                    </Typography>
                    <Typography variant="h7" >
                        {noticia.source_id}  
                    </Typography>
                    <Typography variant="h7" >
                        {noticia.pubDate}   
                    </Typography>
                </CardContent>
                
            </CardActionArea>

        </Card>

        
    );
    
}

export const ListaNoticias = ({ noticias }) => {
    
    return (
    <section style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        
        marginTop: '30px',
      }}>
        {
          noticias.map((noticia) => {
              return <Noticia noticia={noticia} />
          })
        }
    </section>
    )
}

export default Noticia;