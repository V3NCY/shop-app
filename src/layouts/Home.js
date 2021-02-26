import Navbar from "../Navbar/Navbar";

function HomeLayout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default HomeLayout;
