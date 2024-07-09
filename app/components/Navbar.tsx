'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiMenuBurger } from 'react-icons/ci';
import styles from './Navbar.module.css';

interface LinkItem {
  name: string;
  href: string;
}

const links: LinkItem[] = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT', href: '/about' },
  { name: 'SERVICES', href: '/services' },
  { name: 'GALLERY', href: '/gallery' },
  { name: 'CONTACT', href: '/contact' }
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavOpen(prevState => !prevState);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.nav_wrapper}>
        <div className={styles.logo_main}>LOGO</div>
        <div className={styles.mobile_nav_toggle} onClick={handleMobileNavToggle}>
          <CiMenuBurger size={32} color="white" />
        </div>
        <ul className={`${styles.hide_on_med_and_down} ${isMobileNavOpen ? styles.hide : ''}`}>
          {links.map((link, idx) => (
            <li key={idx}>
              {pathname === link.href ? (
                <Link className={styles.navigation_link_active} href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link className={styles.navigation_link} href={link.href}>
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileNavOpen && (
          <motion.ul
            className={`${styles.mobile_nav} ${isMobileNavOpen ? styles.open : ''}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {links.map((link, idx) => (
              <li key={idx}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
