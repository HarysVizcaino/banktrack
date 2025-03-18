import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import AccountSelectionModal from "@/components/molecules/AccountSelectionModal";
import { Account } from "@/types";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockAccounts: Account[] = [
  { id: "1", type: "checking", amount: 1000, state: "active", accountNumber: "12345678", createdAt: "2024-03-17T00:00:00Z" },
  { id: "2", type: "savings", amount: 5000, state: "active", accountNumber: "87654321", createdAt: "2024-03-17T00:00:00Z" },
];

describe("AccountSelectionModal Component", () => {
  it("renders correctly when visible", () => {
    const { getByText } = render(
      <AccountSelectionModal visible={true} accounts={mockAccounts} onSelect={jest.fn()} onClose={jest.fn()} />
    );

    expect(getByText("selectAnAccount")).toBeTruthy();
    expect(getByText("checking")).toBeTruthy();
    expect(getByText("savings")).toBeTruthy();
  });

  it("calls onSelect when an account is tapped", () => {
    const handleSelect = jest.fn();
    const { getByText } = render(
      <AccountSelectionModal visible={true} accounts={mockAccounts} onSelect={handleSelect} onClose={jest.fn()} />
    );

    fireEvent.press(getByText("checking"));

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(mockAccounts[0]);
  });

  it("calls onClose when close button is tapped", () => {
    const handleClose = jest.fn();
    const { getByText } = render(
      <AccountSelectionModal visible={true} accounts={mockAccounts} onSelect={jest.fn()} onClose={handleClose} />
    );

    fireEvent.press(getByText("close"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not render when not visible", () => {
    const { queryByText } = render(
      <AccountSelectionModal visible={false} accounts={mockAccounts} onSelect={jest.fn()} onClose={jest.fn()} />
    );

    expect(queryByText("selectAnAccount")).toBeNull();
  });
});