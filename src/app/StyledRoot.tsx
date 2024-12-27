import { ThemeProvider } from "@emotion/react";
import theme from "./theme";

function StyledRoot({children,}: Readonly<{children : React.ReactNode}>) {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}

export default StyledRoot