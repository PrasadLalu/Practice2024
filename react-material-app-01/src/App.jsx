import { ThemeProvider } from "@mui/material/styles";
import Header from "./components/ui/Header";
import theme from "./components/ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <p>Hello React</p>
    </ThemeProvider>
  );
}

export default App;
