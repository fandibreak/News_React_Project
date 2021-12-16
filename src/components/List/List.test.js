import React from "react";
import { shallow } from "enzyme";
import List from "./ListNews";

describe("List", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ListNews />);
    expect(wrapper).toMatchSnapshot();
  });
});
