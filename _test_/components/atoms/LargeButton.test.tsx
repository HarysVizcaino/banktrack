import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LargeButton from "@/components/atoms/LargeButton";

describe("LargeButton Component", () => {
  it("renders correctly and handles clicks", () => {
    const mockPress = jest.fn();
    const { getByText } = render(<LargeButton label="Click me" onPress={mockPress} />);

    fireEvent.press(getByText("Click me"));
    expect(mockPress).toHaveBeenCalledTimes(1);
  });
});