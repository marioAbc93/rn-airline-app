import React from "react";
import { render } from "@testing-library/react-native";
import FlightCard from "@/components/FlightCard";
import { Result } from "@/constants/Types";

jest.mock("@/assets/icons/logo.svg", () => () => null);

const mockItem: Result = {
  id: "mockId",
  type: "FLIGHT_QUOTE",
  entityId: "mockEntityId",
  skyId: "mockSkyId",
  content: {
    price: "$ 3,495,599",
    rawPrice: 3495599,
    direct: true,
    outboundLeg: {
      originAirport: {
        id: "BOG",
        skyCode: "BOG",
        name: "Bogotá",
        type: "airport",
      },
      destinationAirport: {
        id: "MED",
        skyCode: "MED",
        name: "Medellín",
        type: "airport",
      },
      localDepartureDate: "2024-10-31T10:00:00",
      localDepartureDateLabel: "2024-10-31",
    },
  },
};

describe("FlightCard", () => {
  it("renders the departure date", () => {
    const { getByText } = render(<FlightCard item={mockItem} />);
    expect(getByText("2024-10-31")).toBeTruthy();
  });

  it("renders the origin and destination airports", () => {
    const { getByText } = render(<FlightCard item={mockItem} />);
    expect(getByText("Bogotá")).toBeTruthy();
    expect(getByText("Medellín")).toBeTruthy();
  });

  it("renders the direct flight information correctly", () => {
    const { getByText } = render(<FlightCard item={mockItem} />);
    expect(getByText("Sin escalas")).toBeTruthy();
  });

  it("renders the indirect flight information correctly", () => {
    const indirectItem = {
      ...mockItem,
      content: { ...mockItem.content, direct: false },
    };
    const { getByText } = render(<FlightCard item={indirectItem} />);
    expect(getByText("Tiene conexiones")).toBeTruthy();
  });

  it("renders the price", () => {
    const { getByText } = render(<FlightCard item={mockItem} />);
    expect(getByText("$ 3,495,599")).toBeTruthy();
  });

  it("shows 'Asientos disponibles' label", () => {
    const { getByText } = render(<FlightCard item={mockItem} />);
    expect(getByText("¡Asientos disponibles!")).toBeTruthy();
  });
});
