'use client';

import classes from './navbar.module.css';
import { IconMenu2, IconSearch, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const NavBar = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth > 480);
        };

        handleResize();

        // Listen for window resize updates
        window.addEventListener('resize', handleResize);

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={classes.navBarWrapper}>
            <div className={classes.navTabs}>
                <div className={classes.logoWrapper}>
                    <a className={classes.logo} href='/'>AEON</a>
                    <IconSearch className={classes.searchIcon} size={30} />
                    {!isVisible && <IconMenu2 className={classes.hamburgerMenu} size={30} onClick={toggleVisibility} />}
                    {isVisible && <IconX className={classes.hamburgerMenu} size={30} onClick={toggleVisibility} />}
                </div>
                {isVisible && (
                    <div className={classes.links}>
                        <a className={classes.navLink} href='/'>Showcase</a>
                        <a className={classes.navLink} href='/'>Docs</a>
                        <a className={classes.navLink} href='/'>Blog</a>
                        <a className={classes.navLink} href='/'>Analytics</a>
                        <a className={classes.navLink} href='/'>Templates</a>
                        <a className={classes.navLink} href='/'>Enterprise</a>
                    </div>
                )}
                <div className={classes.searchBar}>
                    <input type="text" placeholder="Search documentation..." />
                </div>
            </div>
        </div>
    );
};

export default NavBar;