import React from "react";
import { render } from "@testing-library/react";

import MissionsList from './MissionsList.js';

test("MissionsList render", ()=>{
    render(<MissionsList missions={[]}/>);
});

test("render MissinosList with valid Missions", ()=>{
    const mockData = [{mission_id:'id1', mission_name:'mission one'}];
    const {queryAllByText, render} = render(<MissionsList missions={[]} />);

    const allMissions = queryAllByText(/mission/i);
    expect(allMissions).toHaveLength(0);
    expect(allMissions).toStrictEqual([]);

    rerender( <MissionsList missions={mockData} />);
    allMissions = queryAllByText(/mission/(1));
    expect(allMissions).toHaveLength(1);
})