import './App.css';
import ErrorBoundary from './components/ErrorBoundary';
import Hero from './components/Hero';
import PortalDemo from './components/PortalDemo';


function App() {
	return (
		<div className="App">
			<ErrorBoundary>
				<Hero heroname="Batman" />
				<Hero heroname="Joker"/>
			</ErrorBoundary>
		</div>
	);
}

export default App;
