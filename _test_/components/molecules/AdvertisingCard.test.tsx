import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AdvertisingCard from "@/components/molecules/AdvertisingCard";

describe("AdvertisingCard Component", () => {
  const mockProps = {
    title: "Special Offer!",
    description: "Get 20% off on all services this week.",
    buttonText: "Claim Now",
    imageSource: "https://via.placeholder.com/80",
    onPress: jest.fn(),
  };

  it("renders correctly with given props", () => {
    const { getByText, getByTestId } = render(<AdvertisingCard {...mockProps} />);

    expect(getByText(mockProps.title)).toBeTruthy();
    expect(getByText(mockProps.description)).toBeTruthy();
    expect(getByText(mockProps.buttonText)).toBeTruthy();
    expect(getByTestId("advertising-card-image")).toBeTruthy();
  });

  it("calls onPress function when button is pressed", () => {
    const { getByText } = render(<AdvertisingCard {...mockProps} />);

    fireEvent.press(getByText(mockProps.buttonText));

    expect(mockProps.onPress).toHaveBeenCalledTimes(1);
  });
});