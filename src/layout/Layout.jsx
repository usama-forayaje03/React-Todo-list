
import Footer from "../sections/footer/Footer"
import Header from "../sections/Header/Header"
import TaskTable from "../sections/taskTable/TaskTable"

function Layout() {
  return (
    <div className="dark:bg-gray-800 h-screen">
    <Header />
    <TaskTable />
    <Footer />

    </div>
  )
}

export default Layout