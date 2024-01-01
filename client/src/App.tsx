import { Router, Route } from "@solidjs/router";
import SnapResume from "./components/SnapResume.component";
const App = () => {

  return (
    <Router>
      <Route path="/" component={SnapResume} />
    </Router>
  )
}

export default App
