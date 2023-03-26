import App from "../components/App/App";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="main-card">
        <h1 className="text-xl font-bold">
          Currency Exchange App
        </h1>
        <App/>
      </div>
    </div>
  )
}

export default Home
