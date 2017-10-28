import LineChart from './LineChart';
import React from 'react';

const Chart = (props) => {
    switch (props.type) {
    case 'line':
        return <LineChart {...props}/>;
    default:
        return <LineChart {...props}/>;
    }
}

export {
    LineChart,
}

export default Chart;