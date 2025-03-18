import React from "react";
import { render } from "@testing-library/react-native";
import Card from "@/components/atoms/Card";
import { Text } from "react-native";

describe("Card Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <Card>
        <Text>Test Content</Text>
      </Card>
    );

    expect(getByTestId("card-container")).toBeTruthy();
  });

  it("renders children correctly", () => {
    const { getByText } = render(
      <Card>
        <Text>Test Content</Text>
      </Card>
    );

    expect(getByText("Test Content")).toBeTruthy();
  });

  it("applies correct size styles", () => {
    const { getByTestId, rerender } = render(<Card size="small" />);
    expect(getByTestId("card-container").props.style).toEqual(
      expect.arrayContaining([{ width: "60%", height: 100 }]) 
    );

    rerender(<Card size="medium" />);
    expect(getByTestId("card-container").props.style).toEqual(
      expect.arrayContaining([{ width: "80%", height: 150 }])
    );

    rerender(<Card size="large" />);
    expect(getByTestId("card-container").props.style).toEqual(
      expect.arrayContaining([{ width: "100%", height: 200 }]) 
    );
  });
});