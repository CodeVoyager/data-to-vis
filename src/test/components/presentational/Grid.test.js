import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '../../../components/presentational/Grid';
import renderer from 'react-test-renderer';
import {
    MemoryRouter as Router
} from 'react-router-dom';

describe('Grid component', function () {
    const ENTRIES = [ '/', '/bpi'];

    it('renders without crashing', function () {
        const div = document.createElement('div');
        ReactDOM.render(
            <Router>
                <Grid/>
            </Router>
        , div);
    });

    it('renders correctly', function () {
        const tree1 = renderer.create(
            <Router>
                <Grid/>
            </Router>
        ).toJSON();
        expect(tree1).toMatchSnapshot();

        const tree2 = renderer.create(
            <Router initialEntries={ENTRIES} initialIndex={0}>
                <Grid/>
            </Router>
        ).toJSON();
        expect(tree2).toMatchSnapshot();

        const tree3 = renderer.create(
            <Router initialEntries={ENTRIES} initialIndex={1}>
                <Grid/>
            </Router>
        ).toJSON();
        expect(tree3).toMatchSnapshot();
    });
});