import {ThemeProvider} from "styled-components";
import theme from "./src/theme";
import Router from "./src/Router";
import { LogBox } from "react-native"

LogBox.ignoreAllLogs(true);

const App = () => {

    return <ThemeProvider theme={theme}>
        <Router style={{fontFamily: "Poppins_400Regular"}}/>
    </ThemeProvider>
}

export default App;
