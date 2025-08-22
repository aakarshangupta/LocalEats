import { useState, useEffect } from 'react';

import Navbar from '../../Navbars/NavigationBar/NavigationBar';
import MobileNavbar from '../../Navbars/MobileNavbar/MobileNavbar';
import SearchBar from '../../../utils/SearchBar/SearchBar';

import css from './HomePageBanner.module.css';

import banner from '/banners/banner1.jpg';

let HomePageBanner = () => {
    let [toogleMenu, setToggleMenu] = useState(true);
    let [typedTitle, setTypedTitle] = useState('');
    const fullTitle = 'LocalEats';

    useEffect(() => {
        let currentString = '';
        let index = 0;
        const typingInterval = setInterval(() => {
            if (index < fullTitle.length) {
                currentString += fullTitle[index];
                setTypedTitle(currentString);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 150);
        
        return () => clearInterval(typingInterval);
    }, []);

    let toggleBanner = toogleMenu ? (
        <div className={css.banner}>
            <Navbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />
            <div className={css.bannerInner}>
                <img src={banner} alt="banner" className={css.bannerImg} />
                <div className={css.bannerTxt}>
                    <div className={css.title}>{typedTitle}</div>
                    <div className={css.tag}>Discover the best food & drinks in <span className={css.bld}>Prayagraj</span></div>
                    <div className={css.searchbar}>
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>
    ) : <MobileNavbar setToggleMenu={setToggleMenu} toogleMenu={toogleMenu} />;

    return toggleBanner;
};

export default HomePageBanner;