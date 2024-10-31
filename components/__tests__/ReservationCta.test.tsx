import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ReservationCta from "@/components/ReservationCta";
import { useRouter } from "expo-router";

jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("ReservationCta", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const { getByText } = render(<ReservationCta />);

    expect(
      getByText("Reserva tu viaje, haz tu Check-in y que el viaje comience")
    ).toBeTruthy();

    expect(getByText("Ver oferta de viajes")).toBeTruthy();

    expect(getByText("Beneficios AeroTest rewards")).toBeTruthy();
  });

  it("navigates to the booking page when button is pressed", () => {
    const { getByText } = render(<ReservationCta />);

    const button = getByText("Ver oferta de viajes");
    fireEvent.press(button);

    expect(mockPush).toHaveBeenCalledWith("/booking");
  });
});
