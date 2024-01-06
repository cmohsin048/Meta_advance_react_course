
import './App.css';
import { Userprovider, useUser } from './UserContext';

const Loggedin = () => {
  const {user}=useUser()
  return (
    <p>
      Hello <span className="username">{user.name}</span>
    </p>
  )
}

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <Loggedin />
    </header>
  )
}
const Page = () => {
  const {user}=useUser()
  return (
    <div>
       
      <h2>what is Lorem ipson</h2>
      <p>Technology has transformed society, enabling instant communication, vast information access, and automation. Social media reshapes interactions while AI advances healthcare, transportation, and industry. Environmental concerns drive sustainable practices. Space exploration expands with private ventures. Education evolves through online platforms. Cultural diversity enriches global perspectives. Challenges include cybersecurity threats, ethical AI use, and climate change. Innovations like 5G, renewable energy, and CRISPR promise further advancements. It's crucial to balance progress with ethical considerations, fostering collaboration, empathy, and responsible innovation to shape a better future.</p>
      <p>written by : {user.name}</p>
    </div>
  )
}
function Root() {
  return (
    <div className="App">
      <Userprovider>
        <Header />
        <Page />
      </Userprovider>
    </div>
  );
}
function App(){
  return (
    <Userprovider><Root/></Userprovider>
  )
}

export default App;
