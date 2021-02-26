import Navbar from "../Navbar/Navbar";

function MainLayout(props) {
  return (
    <>
      <Navbar />
      <div className="container mt-5">{props.children}</div>
    </>
  );
}

export default MainLayout;
