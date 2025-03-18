import React from "react";
import { render } from "@testing-library/react-native";
import BrandLogoList from "@/components/molecules/BrandLogoList";

describe("BrandLogoList Component", () => {
  const mockLogos = [
    { id: 1, uri: "https://via.placeholder.com/40", color: "#FF5733" },
    { id: 2, uri: "https://via.placeholder.com/40", color: "#33FF57" },
    { id: 3, uri: "https://via.placeholder.com/40", color: "#3357FF" },
  ];

  it("renders correctly", () => {
    const { getByTestId } = render(<BrandLogoList logos={mockLogos} />);
    expect(getByTestId("brand-logo-list")).toBeTruthy();
  });

  it("renders the correct number of logos", () => {
    const { getAllByTestId } = render(<BrandLogoList logos={mockLogos} />);
    expect(getAllByTestId("brand-logo-item")).toHaveLength(mockLogos.length);
  });

  it("applies the correct background color", () => {
    const { getAllByTestId } = render(<BrandLogoList logos={mockLogos} />);
    const logoItems = getAllByTestId("brand-logo-item");

    logoItems.forEach((item, index) => {
      expect(item.props.style).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ backgroundColor: mockLogos[index].color }),
        ])
      );
    });
  });
});