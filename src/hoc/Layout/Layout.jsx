import Navigation from "../../components/Navigation/Navigation";
import style from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={style.container}>
      <Navigation />
      <main> {props.children}</main>
    </div>
  );
};

export default Layout;
