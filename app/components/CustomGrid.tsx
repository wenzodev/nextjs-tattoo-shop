'use client';

import React from 'react';
import { Item } from '../data/items'; // Importing the Item type
import items from '../data/items'; // Importing the actual data
import styles from './CustomGrid.module.css';
import Link from 'next/link';
import { GoArrowRight } from 'react-icons/go';
import Image from 'next/image';

export default function CustomGrid() {
  const renderOverlay = (item: Item) => {
    return (
      <div className={item.overlay ? styles.overlay : styles.custom_overlay}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className={styles.arrow_icon}>
          <GoArrowRight size={32} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.image_grid}>
      <div className={`${styles.row} ${styles.row1}`}>
        {items.slice(0, 6).map((item, index) => (
          <div key={index} className={styles.column}>
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
        {items.slice(6).map((item, index) => (
          <div key={index + 6} className={styles.column}>
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
  );
}