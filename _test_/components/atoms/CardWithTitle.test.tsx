import React from "react";
import { render } from "@testing-library/react-native";
import CardWithTitle from "@/components/atoms/CardWithTitle";
import { Text, View } from "react-native";

describe("CardWithTitle Component", () => {
  it("renders title correctly", () => {
    const { getByText } = render(<CardWithTitle title="Main Title" />);
    expect(getByText("Main Title")).toBeTruthy();
  });

  it("renders subtitle correctly", () => {
    const { getByText } = render(<CardWithTitle title="Main Title" subTitle="Secondary Title" />);
    expect(getByText("Secondary Title")).toBeTruthy();
  });

  it("renders children inside the card", () => {
    const { getByText } = render(
      <CardWithTitle title="Main Title">
        <Text>Test Child</Text>
      </CardWithTitle>
    );
    expect(getByText("Test Child")).toBeTruthy(); // ✅ Checks if child component is rendered
  });

  it("has correct default styles", () => {
    const { getByTestId } = render(
      <CardWithTitle title="Styled Card">
        <View testID="card-content" />
      </CardWithTitle>
    );

    const card = getByTestId("card-container");

    const styles = Array.isArray(card.props.style) ? card.props.style : [card.props.style];


    expect(styles[0]).toMatchObject({
        backgroundColor: "#1C1C1E",
        borderRadius: 16,
        width: "48%",
        height: 110,
      });
      
  });
});