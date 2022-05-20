import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
	return (
		<div className="App">
			<Greet name="rafi" age="21">
				<p>Esse ullam quis.</p>
			</Greet>
			<Greet name="cahya" age="22" />
			<Greet name="Putra" age="23" />
			<Welcome name="Putra" age="23" />
			<Welcome name="mujo" age="23" />
			<Hello />
			<Message />
			<Counter />
		</div>
	);
}

export default App;
