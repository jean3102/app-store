import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';
import './styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<HashRouter>
		<App />
	</HashRouter>
);
