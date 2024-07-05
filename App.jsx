import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Feed from "./components/Feed";

function App() {
  // const [count, setCount] = useState({});

  // console.log(count);
  // useEffect(() => {
  //   setCount(Api);
  // }, []);
  return (
    <>
      <div className="container">
        <Sidebar />
        {/* {count.videos &&
          count.videos.map((c) => {
            return <div>{c.title}</div>;
          })} */}
        <div className="home">
          <Topbar />
          <Feed />
        </div>{" "}
      </div>
    </>
  );
}

export default App;
