import { Divider, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import styles from './styles.module.css'
import Image from 'next/image';

export function ProjectGrid() {
    return (
        <Grid container className={'portfolio'} xs={12} mt={10} mb={3} justifyContent={'center'}>
            <Grid item xs={12} mb={2}><Typography variant="h4" style={{ color: '#F8EEE7', textAlign: 'center', fontFamily: 'Montserrat Alternates' }} gutterBottom>CSS Art & Projects</Typography></Grid>
            {itemData.map((item) => (
                <Grid item key={item.id} pt={3}>
                    <Link href={item.link}>
                        <figure className={styles.hoverImg}>
                            <figcaption className={styles.figCaption}>
                                <h3 style={{ fontFamily: "'Montserrat Alternates" }}>View Code</h3>
                            </figcaption>
                            <Image
                                style={{ border: '5px solid #49274A', borderRadius: '10%' }}
                                src={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                                width={375}
                                height={200}
                            />
                        </figure>
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
}

const itemData = [
    {
        id: 1,
        img: '/phone.png',
        title: 'Phone',
        link: 'https://codepen.io/kileybublitz/pen/mdwzJRb'
    },
    {
        id: 2,
        img: '/house.png',
        title: 'House',
        link: 'https://codepen.io/kileybublitz/pen/GRydyMG'
    },
    {
        id: 3,
        img: '/avatar.png',
        title: 'Avatar',
        link: 'https://codepen.io/kileybublitz/pen/qBPgWWd'
    },
    {
        id: 4,
        img: '/tree.png',
        title: 'Tree',
        link: 'https://codepen.io/kileybublitz/pen/JjyzJyP'
    },
];