import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import BeneficiarySelectionModal from "@/components/molecules/BeneficiaryModal";

describe("BeneficiarySelectionModal Component", () => {
  const mockBeneficiaries = [
    { id: 1, fullName: "John Doe", accountNumber: "12345678", accountType: "checking" },
    { id: 2, fullName: "Jane Smith", accountNumber: "87654321", accountType: "savings" },
  ];

  const mockOnSelect = jest.fn();
  const mockOnClose = jest.fn();

  it("renders correctly when visible", () => {
    const { getByText } = render(
      <BeneficiarySelectionModal
        visible={true}
        beneficiaries={mockBeneficiaries}
        onSelect={mockOnSelect}
        onClose={mockOnClose}
      />
    );

    expect(getByText("SELECT ANYTHING")).toBeTruthy();
    expect(getByText(mockBeneficiaries[0].fullName)).toBeTruthy();
    expect(getByText(mockBeneficiaries[1].fullName)).toBeTruthy();
  });

  it("calls onSelect when a beneficiary is selected", () => {
    const { getByText } = render(
      <BeneficiarySelectionModal
        visible={true}
        beneficiaries={mockBeneficiaries}
        onSelect={mockOnSelect}
        onClose={mockOnClose}
      />
    );

    fireEvent.press(getByText(mockBeneficiaries[0].fullName));

    expect(mockOnSelect).toHaveBeenCalledTimes(1);
    expect(mockOnSelect).toHaveBeenCalledWith(mockBeneficiaries[0]);
  });

  it("calls onClose when the close button is pressed", () => {
    const { getByTestId } = render(
      <BeneficiarySelectionModal
        visible={true}
        beneficiaries={mockBeneficiaries}
        onSelect={mockOnSelect}
        onClose={mockOnClose}
      />
    );

    fireEvent.press(getByTestId("close-button")); // Using testID now

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
});