export default Page

import PageLayout from "../../layouts/PageLayout"
import "./code.css"

function Page() {
  return (
    <PageLayout>
      <>
        <h1>About</h1>
        <p>
          Demo using <code>vite-plugin-ssr</code>.
        </p>
      </>
    </PageLayout>
  )
}
