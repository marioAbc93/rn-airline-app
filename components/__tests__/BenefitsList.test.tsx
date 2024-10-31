import React from "react";
import { render } from "@testing-library/react-native";
import BenefitsList from "@/components/BenefitsList";
import { benefits } from "@/constants/dummy";

jest.mock("@expo/vector-icons/Ionicons", () => "Ionicons");

describe("BenefitsList", () => {
  it("renders correctly", () => {
    const { getAllByTestId } = render(<BenefitsList />);
    const items = getAllByTestId("benefit-item");
    expect(items.length).toBe(benefits.length);
  });

  it("displays the correct icons and texts for each benefit", () => {
    const { getAllByTestId, getByText } = render(<BenefitsList />);

    benefits.forEach((benefit, index) => {
      const icon = getAllByTestId("benefit-icon")[index];
      const text = getByText(benefit.text);

      expect(icon).toBeTruthy();
      expect(text).toBeTruthy();
    });
  });

  it("renders dividers between items, but not after the last item", () => {
    const { getAllByTestId } = render(<BenefitsList />);
    const dividers = getAllByTestId("divider");

    expect(dividers.length).toBe(benefits.length - 1);
  });
});
