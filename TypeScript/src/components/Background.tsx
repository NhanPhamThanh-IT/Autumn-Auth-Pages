import leaf_01 from "../assets/leaf_01.png";
import leaf_02 from "../assets/leaf_02.png";
import leaf_03 from "../assets/leaf_03.png";
import leaf_04 from "../assets/leaf_04.png";
import background from "../assets/background.jpg";
import trees from "../assets/trees.png";
import girl from "../assets/girl.png";
import "../styles/background.css";
import type { WithChildren } from "../types/common";

const BackgroundComponent = (props: WithChildren) => {
  const { children } = props;

  return (
    <section>
      <div className="leaves">
        <div className="set">
          <div>
            <img src={leaf_01} />
          </div>
          <div>
            <img src={leaf_02} />
          </div>
          <div>
            <img src={leaf_03} />
          </div>
          <div>
            <img src={leaf_04} />
          </div>
          <div>
            <img src={leaf_01} />
          </div>
          <div>
            <img src={leaf_02} />
          </div>
          <div>
            <img src={leaf_03} />
          </div>
          <div>
            <img src={leaf_04} />
          </div>
        </div>
      </div>

      <img src={background} alt="Background" className="bg" />
      <img src={trees} alt="Trees" className="trees" />
      <img src={girl} alt="Girl" className="girl" />

      {children}
    </section>
  );
};

export default BackgroundComponent;
