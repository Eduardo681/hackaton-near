import {ThemeProvider} from "styled-components";
import theme from "./src/theme";
import Router from "./src/Router";

const App = () => {
    return <ThemeProvider theme={theme}>
        <Router/>
    </ThemeProvider>
}

export default App;
