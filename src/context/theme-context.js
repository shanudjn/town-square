import { createContext, useState, useContext } from "react";



export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const lightThemeData = {
        primaryBg: "#fff",
        primaryText: "#000",

    }
    const darkThemeData = {
        primaryBg: "#101010",
        primaryText: "#fff",
        border: `1px solid red`

    }
    const [theme, setTheme] = useState("light");
    const [themeData, setThemeData] = useState(lightThemeData)


    function toggleTheme() {
        if (theme === "light") {
            setThemeData(darkThemeData);
            setTheme("dark");
        }
        if (theme === "dark") {
            setThemeData(lightThemeData);
            setTheme("light");
        }
    };

    return (
        <ThemeContext.Provider value={{ themeData, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}
export function useTheme() {
    return useContext(ThemeContext);
}
