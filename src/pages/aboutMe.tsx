import { Box } from "@mui/material";
import styles from '@/styles/Home.module.css'
// import styles from './styles.module.css'

export default function AboutMePage() {
    return (
        <main>
            <Box className={styles.main}>
                <Box ml={'5%'} mr={'5%'} mt={'20%'}>
                    <h2 style={{ color: 'black', fontFamily: 'Courier New' }}>I am passionate about building beautiful and functional user interfaces. I have 4 1/2+ years of experience building skills and proficiency in TypeScript, React, CSS, Jest, Material UI, and Cypress; I take pride in my ability to work closely with my teams to develop well designed and responsive UI components, leveraging my understanding of modern web development practices to create effective and visually appealing interfaces. I believe that building great products is a team effort and highly value collaboration and communication as important tools for achieving shared goals. I’m always looking for ways to improve my skills and broaden my knowledge base.</h2>
                </Box>
            </Box>
        </main>
    )
}