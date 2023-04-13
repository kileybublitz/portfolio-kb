import * as React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, Button, Grid } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image';

import { useRouter } from 'next/router';

import DownloadIcon from '@mui/icons-material/Download';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Link from 'next/link';

interface Props {
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

export function AppBarMain({ selected, setSelected }: Props) {
    const router = useRouter();
    const drawerWidth = 240;
    const navItems = [{ className: 'aboutMe', title: 'About Me' }, { className: 'portfolio', title: 'Portfolio' }, { className: 'contact', title: 'Contact' }];
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }} onClick={() => { setSelected(item.className) }}>
                            <ListItemText primary={item.title} style={{ color: 'black' }} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    return (
        <Box sx={{ display: 'flex', position: 'sticky' }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ backgroundColor: '#94618E', boxShadow: 'none' }}>
                <Toolbar>
                    <Grid container flexGrow={1} alignItems={'center'}>
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' }, color: '#F8EEE7' }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <a onClick={() => setSelected('')} style={{ cursor: 'pointer' }}>
                            <Typography>kiley bublitz</Typography>
                        </a>
                    </Grid>
                    <Grid container spacing={3} justifyContent={'flex-end'} sx={{ display: { xs: 'none', sm: 'flex' } }} wrap='nowrap'>
                        <Grid item>
                            <Link href='/Resume-Kiley-Bublitz.pdf' download target={'_blank'}>
                                <IconButton sx={{ backgroundColor: '#94618E', color: '#F8EEE7' }}>
                                    <DownloadIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href='https://www.linkedin.com/in/kiley-bublitz-0223a6b8/' target={'_blank'}>
                                <IconButton sx={{ backgroundColor: '#94618E', color: '#F8EEE7' }}>
                                    <LinkedInIcon />
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid item>
                            <IconButton sx={{ backgroundColor: '#94618E', color: '#F8EEE7' }} >
                                <a href="mailto:kiley.bublitz@gmail.com">
                                    <EmailIcon />
                                </a>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box >
    );
}
