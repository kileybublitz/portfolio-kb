import { Box } from "@mui/material";
import styles from './styles.module.css'

export function AboutMeBlurb() {
    return (
        <Box className={styles.container}>
            <Box className={'aboutMe'} id={'aboutMe'}>
                <h3 style={{ color: 'black' }}>I am passionate about building beautiful and functional user interfaces. I have 4 1/2+ years of experience building skills and proficiency in TypeScript, React, CSS, Jest, Material UI, and Cypress; I take pride in my ability to work closely with my teams to develop well designed and responsive UI components, leveraging my understanding of modern web development practices to create effective and visually appealing interfaces. I believe that building great products is a team effort and highly value collaboration and communication as important tools for achieving shared goals. I’m always looking for ways to improve my skills and broaden my knowledge base.</h3>
            </Box>
        </Box>
    )
}