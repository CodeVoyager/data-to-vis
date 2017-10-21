import React from 'react';
import {
    Link
} from 'react-router-dom';

const Grid = () => {
    return (
        <div className="grid">
            <Link className="item" component="div" to="/bpi">
                BPI
            </Link>
        </div>
    );
};

export default Grid;