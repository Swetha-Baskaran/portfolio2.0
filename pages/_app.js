import {createContext, useState} from "react";
import "../styles/globals.css";

export const ThemeContext = createContext();
function MyApp({Component, pageProps}) {
  const [lightMode, setLightMode] = useState(true);
	return (
		<ThemeContext.Provider value={[lightMode, setLightMode]}>
			<Component {...pageProps} />
		</ThemeContext.Provider>
	);
}

export default MyApp;
