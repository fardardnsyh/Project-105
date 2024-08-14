import { createContext, useContext, useState } from "react";

export enum COLOR_PALETTE {
  ZINC = "Zinc",
  SLATE = "Slate",
  STONE = "Stone",
  GRAY = "Gray",
  NEUTRAL = "Neutral",
  RED = "Red",
  ROSE = "Rose",
  ORANGE = "Orange",
  GREEN = "Green",
  BLUE = "Blue",
  YELLOW = "Yellow",
  VIOLET = "Violet",
}

export enum STYLE {
  DEFAULT = "Default",
  NEW_YORK = "New York",
}

type ColorPaletteProps = {
  children: React.ReactNode;
  defaultPalette?: COLOR_PALETTE;
};

export type ColorPaletteProviderState = {
  colorPalette: COLOR_PALETTE;
  setColorPalette: (palette: COLOR_PALETTE) => void;
  style: STYLE;
  setStyle: (style: STYLE) => void;
};

const initialState: ColorPaletteProviderState = {
  colorPalette: COLOR_PALETTE.BLUE,
  setColorPalette: () => null,
  style: STYLE.DEFAULT,
  setStyle: () => null,
};

const ColorPaletteProviderContext =
  createContext<ColorPaletteProviderState>(initialState);

export function ColorPaletteProvider({
  children,
  defaultPalette = COLOR_PALETTE.BLUE,
  ...props
}: ColorPaletteProps) {
  const [colorPalette, setColorPalette] =
    useState<COLOR_PALETTE>(defaultPalette);
  const [style, setStyle] = useState<STYLE>(STYLE.DEFAULT);

  const value = {
    colorPalette,
    setColorPalette,
    style,
    setStyle,
  };

  return (
    <ColorPaletteProviderContext.Provider {...props} value={value}>
      {children}
    </ColorPaletteProviderContext.Provider>
  );
}

export const useColorPalette = () => {
  const context = useContext(ColorPaletteProviderContext);

  if (context === undefined)
    throw new Error(
      "useColorPalette must be used within a ColorPaletteProvider"
    );

  return context;
};
