import React from "react";
import { shallow } from "enzyme";
import Experiencia from "./Experiencia";

describe("Experiencia", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Experiencia />);
    expect(wrapper).toMatchSnapshot();
  });
});
