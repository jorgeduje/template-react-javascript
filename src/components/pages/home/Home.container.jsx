import { Home } from "./Home";

const HomeContainer = () => {

  const data = {
    nombre: "Jorge Duje",
    rol: "Frontend Developer"
  }

  const childProps = {
    data,
  };

  return <Home {...childProps} />;
};

export default HomeContainer;
