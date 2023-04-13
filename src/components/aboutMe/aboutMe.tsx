import { Box, Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import styles from '@/styles/Home.module.css'

export default function AboutMe() {
    const theme = useTheme();
    const screenSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container id='aboutMe' px={screenSmall ? '1rem' : '6rem'} mb={'8rem'} mt={screenSmall ? '5rem' : '8rem'}>
            <Grid item ml={'5%'} mr={'5%'} mt={screenSmall ? 0 : '5%'}>
                <Typography variant="h4" fontFamily={'Montserrat Alternates'} style={{ textAlign: 'center' }} gutterBottom>About Me</Typography>
                <Typography variant="h6" fontFamily={'Montserrat Alternates'}>I am passionate about building beautiful and functional user interfaces. I have 4 1/2+ years of experience building skills and proficiency in TypeScript, React, CSS, Jest, Material UI, and Cypress; I take pride in my ability to work closely with my teams to develop well designed and responsive UI components, leveraging my understanding of modern web development practices to create effective and visually appealing interfaces. I believe that building great products is a team effort and highly value collaboration and communication as important tools for achieving shared goals. I’m always looking for ways to improve my skills and broaden my knowledge base.</Typography>
            </Grid>
        </Grid>
    )
}