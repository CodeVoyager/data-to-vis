import App from './'
import renderer from 'react-test-renderer';
import React from 'react';
import {
    MemoryRouter
} from 'react-router';
import { createRouter } from "enzyme";

describe('App', () => {
    const ENTRIES = [ '/', '/bpi'];

    it('should exist', () => {
        expect(App).not.toBeUndefined();
    });


    it('should render properly', () => {
        const tree = renderer.create(<App />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render properly on "/" route', () => {
        const tree = renderer.create(
            <MemoryRouter initialEntries={ENTRIES} initialIndex={0}>
                <App />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('should render properly on "/bpi" route', () => {
        const tree = renderer.create(
            <MemoryRouter initialEntries={ENTRIES} initialIndex={1}>
                <App />
            </MemoryRouter>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });


});
