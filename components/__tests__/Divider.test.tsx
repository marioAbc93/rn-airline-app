import React from "react";
import { render } from "@testing-library/react-native";
import Divider from "@/components/Divider";

describe("Divider", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Divider />);
    const divider = getByTestId("divider");
    expect(divider).toBeTruthy();
  });
});
