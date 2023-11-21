"use client";

import * as React from "react";
import { ClerkProvider } from '@clerk/nextjs'
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { dark } from '@clerk/themes'
import { Provider } from "react-redux";
import { store } from '../redux/store'

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark,
      signIn: { baseTheme: dark },
    }}>
      <Provider store={store}>
        <NextUIProvider>
          <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
        </NextUIProvider>
      </Provider>
    </ClerkProvider>
  );
}
