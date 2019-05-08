import React from 'react';
import {Link} from 'react-router-dom';

import headerStyles from './header.module.scss';

const Header = (props) => (
    <header className={headerStyles.header}>
        <div className={headerStyles.contentContainer}>
            <h1>
                <Link to="/" className={headerStyles.title}>
                    {props.title}
                </Link>
            </h1>
        </div>
    </header>
);

Header.defaultProps = { // using default props
    title: 'Assemble Store'
};

export default Header;
