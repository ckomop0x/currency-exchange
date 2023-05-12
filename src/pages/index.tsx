import App from "../components/App/App";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-solid p-6 rounded-lg shadow-md border border-sky-500 max-w-600">
        <h1 className="text-xl font-bold">
          Currency Exchange App
        </h1>
        <App/>
      </div>
    </div>
  )
}

export default Home
