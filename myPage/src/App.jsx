import './App.css'
import { Perfil } from './components/perfil/Perfil'
//import { Experience } from './components/experience/Experience'
import { Project } from './components/projects/Project'
import { SecondaryProject } from './components/secondary-projects/SecondaryProject'
import { MyStory } from './components/story/MyStory'

function App() {
  return (
    <div className="App">
      <Perfil />
      {/* <Experience /> */}
      <Project/>
      <SecondaryProject/>
      <MyStory/>
    </div>
  )
}

export default App
