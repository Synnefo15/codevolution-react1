import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyle.module.css'

function App() {
	return (
		<div className="App">
			<h1 className='error'>error</h1>
			<h1 className={styles.sucess}>Sukses</h1>
			{/* <Inline /> */}
			{/* <Stylesheet /> */}
			{/* <NameList /> */}
			{/* <UserGreeting /> */}
			{/* <ParentComponent /> */}
			{/* <EventBind /> */}
			{/* <FunctionClick />
			<ClassClick /> */}
			{/* <Greet name="rafi" age="21">
				<p>Esse ullam quis.</p>
			</Greet>
			<Greet name="cahya" age="22" />
			<Greet name="Putra" age="23" />
			<Welcome name="Putra" age="23" />
			<Welcome name="mujo" age="23" />
			<Hello />
			<Message />
			<Counter /> */}
		</div>
	);
}

export default App;
