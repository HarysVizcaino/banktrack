import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { useRouter } from "expo-router";
import AccountItem from "@/components/atoms/AccountItem";
import { selectAccount } from "@/store/accountSlice";
import { Account } from "@/types";

// Mock useRouter from Expo Router
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

const mockStore = configureStore([]);
const mockRouter = { push: jest.fn() };

describe("AccountItem Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({ account: { selectedAccount: null } });
    (useRouter as jest.Mock).mockReturnValue(mockRouter);
    store.dispatch = jest.fn();
  });

  const mockAccount: Account = {
    id: "1",
    type: "checking",
    accountNumber: "1234567890",
    amount: 5000,
    state: "active",
    createdAt: "2024-03-17T10:00:00Z",
  };

  it("renders the account details correctly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <AccountItem item={mockAccount} />
      </Provider>
    );

    expect(getByText("CHECKING")).toBeTruthy();
    expect(getByText("** 7890")).toBeTruthy();
    expect(getByText("$5,000")).toBeTruthy();
  });

  it("dispatches selectAccount and navigates on press", () => {
    const { getByText } = render(
      <Provider store={store}>
        <AccountItem item={mockAccount} />
      </Provider>
    );

    fireEvent.press(getByText("CHECKING"));

    expect(store.dispatch).toHaveBeenCalledWith(selectAccount(mockAccount));


    expect(mockRouter.push).toHaveBeenCalledWith({
      pathname: "/details",
      params: { account: JSON.stringify(mockAccount) },
    });
  });
});