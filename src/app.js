import './app.css';
import Link from './components/Link';
import PaginaNoticias from './paginas/PaginaNoticias';
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    createBrowserRouter,
    RouterProvider,
    Route
} from 'react-router-dom';
import Error404 from './components/Error/error';
import PaginaBuscador from './paginas/PaginaBuscador';
import Buscador from './components/Buscador/Buscador';
const router = createBrowserRouter([
    {
        path: "/",
        element: <PaginaBuscador />,
        errorElement: <Error404 />,
    },
    {
        path: "/noticias",
        element: <PaginaNoticias />,
    },
    {
        path: "/buscar",
        element: <PaginaBuscador />,
    },
   
]);


function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
