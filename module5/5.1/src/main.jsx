import { createRoot } from 'react-dom/client'
import './index.css'
import AppLoader from "./components/AppLoader.jsx";


const root = createRoot(document.getElementById('root'));
root.render(<AppLoader />);
