

import MuiButton, { ButtonProps } from '@mui/material/Button';


interface ButtonTypes extends ButtonProps {
    testProp?: string
}

export const Button = (props: ButtonTypes) => {
    return <MuiButton {...props} />
}