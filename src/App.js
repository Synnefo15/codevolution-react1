import './App.css';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';

function App() {
	return (
		<div className="App">
			{/* <Counter3>
				{(count, incrementCount) => (
					<ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>
				)}
			</Counter3> */}
			<UserProvider value="rafi">
				<ComponentC />
			</UserProvider>
		</div>
	);
}

export default App;
