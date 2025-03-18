import React from "react";
import { render } from "@testing-library/react-native";
import Message from "@/components/atoms/Message";

describe("Message Component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Message type="success" message="Operation successful" />);
    expect(getByText("Operation successful")).toBeTruthy();
  });

  it("applies the correct background color for success", () => {
    const { getByTestId } = render(<Message type="success" message="Success message" />);
    expect(getByTestId("message-container").props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: "#4CAF50" }])
    );
  });

  it("applies the correct background color for warning", () => {
    const { getByTestId } = render(<Message type="warning" message="Warning message" />);
    expect(getByTestId("message-container").props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: "#FFC107" }])
    );
  });

  it("applies the correct background color for error", () => {
    const { getByTestId } = render(<Message type="error" message="Error occurred" />);
    expect(getByTestId("message-container").props.style).toEqual(
      expect.arrayContaining([{ backgroundColor: "#F44336" }])
    );
  });
});