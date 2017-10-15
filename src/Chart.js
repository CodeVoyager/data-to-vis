import React from 'react';
import ReactFauxDOM from 'react-faux-dom'
const d3Selection = require('d3-selection');
const d3Scale = require('d3-scale');
const d3Array = require('d3-array');
const d3TimeFormat = require('d3-time-format');
const d3Axis = require('d3-axis');
const d3Shape = require('d3-shape');
const R = require('ramda');

const DEFAULT_MARGIN = {top: 0, right: 0, bottom: 0, left: 0};
const DEFAULT_WIDTH = 600;
const DEFAULT_HEIGHT = 300;


export const Chart = (props) => {
    if (!props.data) {
        return null;
    }

    if (R.isNil(props.xKey)) {
        throw new Error('xKey is required');
    }

    if (R.isNil(props.yKey)) {
        throw new Error('yKey is required');
    }

    let el = ReactFauxDOM.createElement('svg');
    let margin = props.margin || DEFAULT_MARGIN;
    let svg = d3Selection.select(el);
    let width = (props.width || DEFAULT_WIDTH) - margin.left - margin.right;
    let height = (props.height || DEFAULT_HEIGHT) - margin.top - margin.bottom;
    let g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    let parseTime = d3TimeFormat.timeParse('%Y-%m-%d');
    let x = d3Scale.scaleTime().rangeRound([0, width]);
    let y = d3Scale.scaleLinear().rangeRound([height, 0]);
    let line = d3Shape.line()
        .x(d => x(d[props.xKey]))
        .y(d => y(d[props.yKey]))
    let _data;

    svg.attr('width', props.width || DEFAULT_WIDTH);
    svg.attr('height', props.height || DEFAULT_HEIGHT);

    if (props.data[0] instanceof Array) {
        _data = props.data.map(d => [parseTime(d[props.xKey]), d[props.yKey]])
    } else if (props.data[0] instanceof Object) {
        _data = props.data.map((d) => {
            let newObject = {};
            newObject[props.xKey] = parseTime(d[props.xKey]);
            newObject[props.yKey] = Number(d[props.yKey]);

            return Object.assign({}, d, newObject);
        });
    }

    x.domain(d3Array.extent(_data, d => d[props.xKey]))
    y.domain(d3Array.extent(_data, d => d[props.yKey]))

    g.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3Axis.axisBottom(x));

    g.append('g')
        .call(d3Axis.axisLeft(y));

    g.append('path')
        .datum(_data)
        .attr('fill', 'none')
        .attr('class', 'path')
        .attr('stroke-linejoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line);

    return (
        <div className="graph graph-line">
            {el.toReact()}
        </div>
    )
}

export default Chart