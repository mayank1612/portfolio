import "./App.css";
import Home from "./views/Home";
import Header from "./views/Header";
import About from "./views/About";
import HireMe from "./views/HireMe";
import Experience from "./views/Experience";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { muiTheme } from "./theme/common";

function App() {
  const theme = createTheme(muiTheme);
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
        <About />
        <HireMe />
        <Experience />
      </div>
    </ThemeProvider>
  );
}

export default App;
