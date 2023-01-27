import React, { createContext, useContext , useState} from "react";


const StateContext = createContext();

const initialState ={
    chat: false,
    cart: false,
    userProfile: false,
    notificaton: false,
}
export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState (true);
    const [isClicked , setIsClicked] =useState(initialState)
    const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });
    
    const [screenSize, setScreenSize] = useState(undefined);
    const [themeSettings, setThemeSettings] = useState(false)
    const [currentMode, setCurrentMode] = useState('Light');
    const [currentColor, setCurrentColor] = useState('#03C9D7');

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
      };
    
      const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
      };
    return(
        <StateContext.Provider 
            value = {{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                themeSettings, 
                setThemeSettings,
                setMode,
                currentMode,
                setCurrentMode,
                setColor,
                currentColor,
                setCurrentColor,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);