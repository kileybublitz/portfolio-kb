import { Box } from '@mui/material'
import styles from './avatar.module.css'

export function Avatar() {
    return (
        <>
            <Box className={styles.container}>
                <Box className={styles.profile}>
                    <Box className={styles.head}>
                        <Box className={styles.hair}></Box>
                        <Box className={styles.face}>
                            <Box className={styles.bangsLeft}></Box>
                            <Box className={styles.bangsRight}></Box>
                            <Box className={styles.eyes}></Box>
                            <Box className={styles.glasses}>
                                <Box className={styles.glassesLeft}></Box>
                                <Box className={styles.glassesRight}></Box>
                                <Box className={styles.nosePiece}></Box>
                            </Box>
                            <Box className={styles.nose}></Box>
                            <Box className={styles.mouth}></Box>
                        </Box>
                    </Box>
                    <Box className={styles.neck}></Box>
                    <Box className={styles.torso}></Box>
                </Box>
            </Box>
        </>
    )
}
