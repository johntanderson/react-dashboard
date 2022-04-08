import { Typography } from '@mui/material';

export default function Logo(props) {
    return (
        <Typography 
            variant="h6" 
            component="div"
            color="darkblue"
            fontSize="30px"
            fontWeight="bold"
            sx={{
                cursor: "pointer"
            }}
        >
            {props.children}
        </Typography>
    )
}