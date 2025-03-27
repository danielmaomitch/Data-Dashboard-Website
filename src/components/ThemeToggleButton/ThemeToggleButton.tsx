import { IconButton, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import Brightness7Icon from '@mui/icons-material/Brightness4'
import Brightness4Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/system'

export type ThemeToggleButton = {
    ColorModeContext: React.Context<{ toggleColorMode: () => void }>,
}

const ThemeToggleButton = (props: ThemeToggleButton) => {
    const mobileCheck = useMediaQuery('(min-width: 500px)')
    const { ColorModeContext = React.createContext({ toggleColorMode: () => {} })} = props
    const theme = useTheme()
    const colorMode = React.useContext(ColorModeContext)

    return (
       
        <>
            {mobileCheck && (
                <Typography>{theme.palette.mode}</Typography>
            )}
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
        </>   
    )
}

export default ThemeToggleButton