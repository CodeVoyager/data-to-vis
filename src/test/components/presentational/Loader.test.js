import React from 'react';
import ReactDOM from 'react-dom';
import Loader from '../../../components/presentational/Loader';
import renderer from 'react-test-renderer';

describe('Loader component', function () {
    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(<Loader/>, div);
    });

    it('renders correctly', function () {
        const tree1 = renderer.create(<Loader />).toJSON();
        expect(tree1).toMatchSnapshot();
    });
});