import React from "react";
import { render } from "@testing-library/react-native";
import GradientCard from "@/components/atoms/GradientCard";
import { useTranslation } from "react-i18next";
import { maskNumber, getAccountIcon } from "@/utils";

// Mocking the translation function
jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Returns the key directly
  }),
}));

// Mocking utils functions
jest.mock("@/utils", () => ({
  maskNumber: jest.fn((num) => `**${num.slice(-4)}`),
  getAccountIcon: jest.fn(() => "card-outline"),
}));

jest.mock("@expo/vector-icons", () => ({
    Ionicons: "",
  }));

describe("GradientCard Component", () => {
  const mockProps = {
    title: "Savings Account",
    type: "savings",
    amount: 2500,
    accountNumber: "1234567890",
    maskAccount: true,
  };

  it("renders title correctly", () => {
    const { getByText } = render(<GradientCard {...mockProps} />);
    expect(getByText("Savings Account")).toBeTruthy();
  });

  it("renders masked account number", () => {
    const { getByText } = render(<GradientCard {...mockProps} />);
    expect(getByText("account **7890")).toBeTruthy();
  });

  it("renders amount formatted in USD", () => {
    const { getByText } = render(<GradientCard {...mockProps} />);
    expect(getByText("$2,500.00")).toBeTruthy();
  });

  it("calls getAccountIcon function with the correct type", () => {
    render(<GradientCard {...mockProps} />);
    expect(getAccountIcon).toHaveBeenCalledWith("savings");
  });
});