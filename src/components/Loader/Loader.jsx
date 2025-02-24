import css from "./Loader.module.css";
import { MoonLoader } from "react-spinners";

const Loader = () => (
  <div className={css.loader}>
    <MoonLoader color="rgb(1, 46, 245)" size={75} />
  </div>
);

export default Loader;
