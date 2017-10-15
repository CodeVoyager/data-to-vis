import React from 'react';
import ReactDOM from 'react-dom';
import Chart from '../../Chart';



describe('Chart component', function () {
    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<Chart/>, div);
    });
});