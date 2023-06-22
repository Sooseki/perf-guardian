import { AuthContextProvider } from "@/context/AuthContext";
import { ThemeContextProvider } from "@/context/ThemeContext";
import '../styles/main.css';

export const metadata = {
  title: 'PerfGuardian'
}

const RootLayout = ({children}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <ThemeContextProvider>
            {children}
          </ThemeContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  )
}

export default RootLayout;