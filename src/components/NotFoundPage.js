import React from 'react';
import '../styles/index.scss';
import notFoundPageStyles from './notFoundPage.module.scss';

const NotFoundPage = (props) => (
    <div className={notFoundPageStyles.content}>
    <div className={notFoundPageStyles.listHeader}>
        <h1>{props.title}</h1>
        </div>
        <div className={notFoundPageStyles.button}>
            <a href="/">
                Go Home</a>
        </div>
    </div>
);
NotFoundPage.defaultProps = { // using default props
    title: 'Not Found 404',
};

export default NotFoundPage;
