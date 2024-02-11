"use client"

import React, { useState, useEffect } from 'react'
import { gridData } from '../data/gridData'
import styles from './CustomGrid.module.css'
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";
import Image from 'next/image'

export default function CustomGrid() {

    const renderOverlay = (item) => {
        if (item.overlay === false) {
            return (
                <div className={styles.custom_overlay}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className={styles.arrow_icon}>
                    <GoArrowRight size={32}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div className={styles.overlay}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className={styles.arrow_icon}>
                        <GoArrowRight size={32}/>
                        </div>
                    </div>
            )
        }
        }

    // const halfLength = Math.ceil(gridData.length / 2)  

    return (
        <div className={styles.image_grid}>
            <div className={`${styles.row} ${styles.row1}`}>
            {gridData.slice(0,6).map((item, index) => (
                <div key={index} className={styles.column} style={{ dataArea: item.area }}>
                    <Link href={item.link}>
                    <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    className={styles.gallery_image}
                    width={item.width}
                    height={item.height}
                    />
                {renderOverlay(item)}
                </Link>
                </div>    
            ))}
            </div>
            <div className={`${styles.row} ${styles.row2}`}>
            {gridData.slice(6).map((item, index) => (
                <div key={index + 6} className={styles.column} style={{ dataArea: item.area }}>
                    <Link href={item.link}>
                    <Image 
                    src={item.imageUrl} 
                    alt={item.title}
                    className={styles.gallery_image}
                    width={item.width}
                    height={item.height}
                    />
                {renderOverlay(item)}
                </Link>
                </div>    
            ))}
            </div>
        </div>
    )
}

