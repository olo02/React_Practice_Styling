import styles from "./CSSModule.module.scss";
import classNames from "classnames/bind";

const CSSModule = () => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("wrapper", "inverted")}>
      안녕하세요, 저는 <span className="something">CSSModule !</span>
    </div>
  );
};

export default CSSModule;
