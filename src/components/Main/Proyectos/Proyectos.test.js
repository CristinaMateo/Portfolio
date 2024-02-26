import React from "react";
import { shallow } from "enzyme";
import Proyectos from "./Proyectos";

describe("Proyectos", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Proyectos />);
    expect(wrapper).toMatchSnapshot();
  });
});
