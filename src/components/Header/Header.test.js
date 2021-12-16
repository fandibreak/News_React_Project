import React from "react";
import { shallow } from "enzyme";
import Head from "./Header";

describe("Header", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Head />);
    expect(wrapper).toMatchSnapshot();
  });
});
