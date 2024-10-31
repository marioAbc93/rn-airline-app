import { ReactNode } from "react";

export interface AppLayoutProps {
  children: ReactNode;
}

type AirportData = {
  id: string;
  skyCode: string;
  name: string;
  type: string;
};
type Content = {
  price: string;
  rawPrice: number;
  direct: boolean;
  outboundLeg: {
    originAirport: AirportData;
    destinationAirport: AirportData;
    localDepartureDate: string;
    localDepartureDateLabel: string;
  };
};
export type Result = {
  id: string;
  type: string;
  content: Content;
  entityId: string;
  skyId: string;
};
