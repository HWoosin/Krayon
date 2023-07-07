import React from 'react';
import '../resource/scss/Tab.scss';
import { Link } from 'react-router-dom';
const Tab = () => {
    return (
        <>
            <div className="title">Krayon</div>
            <div className="tab">
                <Link to="/" className="d tab-main">
                    메인
                </Link>
                <Link to="/user" className="d tab-info">
                    내정보
                </Link>
                <Link to="/shop" className="d tab-shop">
                    상점
                </Link>
            </div>
        </>
    );
};

export default Tab;