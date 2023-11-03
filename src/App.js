import GithubSearchApp from "./Components/GithubSearchApp/GithubSearchApp";

//context
import { ThemeContextProvider } from "./Context/ThemeContext";
import { GithubProvider } from "./Context/GıthubContext";

function App() {
  return (
    <GithubProvider>
      <ThemeContextProvider>
        <GithubSearchApp />
      </ThemeContextProvider>
    </GithubProvider>
  );
}

export default App;
