import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";


export default function Introduction() {
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            <Grid container flexDirection={'row'} mt={10} xs={12} pt={smallScreen ? 0 : '8rem'} px={smallScreen ? 0 : '6rem'} mb={'8rem'} style={smallScreen ? { textAlign: 'center' } : {}}>
                <Grid item md={6} xs={12} justifyContent='center' display={'flex'}>
                    <Image src={'/avatar3.png'} alt={'KileysAvatar'} width={300} height={300} style={{ borderRadius: '50%', border: 'solid 1px white' }} />
                </Grid>
                <Grid item md={6} xs={12} style={{ verticalAlign: 'center' }}>
                    <Typography variant="h3" fontFamily={'Montserrat Alternates'}>front-end developer. interested in creating intuitive and functional user experiences. lover of css art. continuously learning. </Typography>
                </Grid>
            </Grid >
        </>
    )
}