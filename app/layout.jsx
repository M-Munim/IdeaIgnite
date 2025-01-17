// import { global } from "styled-jsx/css"
import '@styles/globals.css'

export const metadata = {
  title: "IdeaIgnite",
  description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>

        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout