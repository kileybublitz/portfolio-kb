import { Box, Typography } from "@mui/material";
import styles from '@/styles/Home.module.css'
// import styles from './styles.module.css'

export default function PageIntroduction() {
    return (
        <Box className={styles.containerTyped} m={50}>
            <h1 className={styles.typed}>Hello, I'm Kiley. I'm a frontend developer. 👋🏻</h1>
        </Box>
    )
}