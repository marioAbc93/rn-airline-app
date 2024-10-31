import React from "react";
import { render } from "@testing-library/react-native";
import ContactUsCta from "@/components/ContactUsCta";

jest.mock("@expo/vector-icons/Ionicons", () => "Ionicons");

describe("ContactUsCta", () => {
  it("renders correctly", () => {
    const { getByText } = render(<ContactUsCta />);

    expect(getByText("Contactanos en cualquier momento")).toBeTruthy();
    expect(
      getByText(
        "Comunícate en la plataforma más conveniente para recibir ayuda de un representante de AeroTest"
      )
    ).toBeTruthy();
  });

  it("displays the correct Ionicon icon", () => {
    const { getByTestId } = render(<ContactUsCta />);

    const icon = getByTestId("arrow-icon");
    expect(icon).toBeTruthy();
  });
});
