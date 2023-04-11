import { Grid } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import styles from './styles.module.css'

export function ProjectGrid() {
    return (
        <Grid container spacing={3} justifyContent={'space-evenly'} className={'portfolio'}>
            {itemData.map((item) => (
                <Grid item key={item.id} className={styles.item}>
                    <Link href={item.link}>
                        <figure className={styles.hoverImg}>
                            <figcaption className={styles.figCaption}>
                                <h3 style={{ fontFamily: 'Courier New' }}>View Code</h3>
                            </figcaption>
                            <img
                                src={`${item.img}`}
                                srcSet={`${item.img}`}
                                alt={item.title}
                                loading="lazy"
                                width={450}
                                height={250}
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