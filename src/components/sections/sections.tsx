import { Grid, Icon, Typography } from "@mui/material";
import Link from "next/link";
import AppsIcon from '@mui/icons-material/Apps';
import Face2Icon from '@mui/icons-material/Face2';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import styles from './styles.module.css'


interface Props {
    setSelected: (pageName: string) => void;
}

export function Sections({ setSelected }: Props) {
    return (
        <>
            <Grid container flexDirection={'row'} xs={12} px={0} gridTemplateColumns={'1fr 1fr 1fr'}>
                <Grid item xs={4} style={{ background: '#F8EEE7', color: '#49274A' }} textAlign={'center'} minHeight={400} pt={'8%'} className={styles.section} id={'portfolio'}>
                    <Link href='' onClick={() => setSelected('portfolio')}>
                        <Icon style={{ height: 100, width: 100 }}>
                            <AppsIcon style={{ color: '#49274A', height: 100, width: 100 }} />
                        </Icon>
                        <Typography variant="h3" fontFamily={'Montserrat Alternates'}>projects</Typography>
                    </Link>
                </Grid>
                <Grid item xs={4} style={{ background: '#F4DECB', color: '#49274A' }} textAlign={'center'} minHeight={400} pt={'8%'} className={styles.section} id={'aboutMe'}>
                    <Link href='' onClick={() => setSelected('aboutMe')}>
                        <Icon style={{ height: 100, width: 100 }}>
                            <Face2Icon style={{ color: '#49274A', height: 100, width: 100 }} />
                        </Icon>
                        <Typography variant="h3" fontFamily={'Montserrat Alternates'}>about</Typography>
                    </Link>
                </Grid>
                <Grid item xs={4} style={{ background: '#E6D7CE', color: '#49274A' }} textAlign={'center'} minHeight={400} pt={'8%'} className={styles.section} id={'contact'}>
                    <Link href='' onClick={() => setSelected('contact')}>

                        <Icon style={{ height: 100, width: 100 }}>
                            <ContactPageIcon style={{ color: '#49274A', height: 100, width: 100 }} />
                        </Icon>
                        <Typography variant="h3" fontFamily={'Montserrat Alternates'}>contact</Typography>
                    </Link>
                </Grid>
            </Grid >
        </>
    )
}

