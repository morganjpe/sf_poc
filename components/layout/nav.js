import { useState } from "react";
import { useContext } from "react";
import {
  BrComponentContext,
  //   BrManageMenuButton,
  BrPageContext,
} from "@bloomreach/react-sdk";

const Nav = () => {
  const [hovered, setIsHovered] = useState(false);

  // bloomreach content
  const component = useContext(BrComponentContext);
  const page = useContext(BrPageContext);
  const menuRef = component?.getModels()?.menu;
  const menu = menuRef && page?.getContent(menuRef);

  const props = {
    onMouseOver: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return (
    <>
      <nav id="site-navigation" className="main-nav">
        <div className="sh-resize">
          <div
            className={hovered ? "menu-tier-1 js-hide" : "menu-tier-1"}
            style={{ zIndex: hovered ? 20 : 9 }}
          >
            <ul className="mn">
              {menu.getItems().map((levelOne) => {
                return (
                  <li key={levelOne.getName()} {...props}>
                    <a href="/">{levelOne.getName()}</a>
                    <div className="menu-tier-2">
                      {levelOne.getChildren().map((levelTwo) => (
                        <dl key={levelTwo.getName()}>
                          <dt>
                            <a href="/">{levelTwo.getName()}</a>
                          </dt>
                          {levelTwo.getChildren().map((levelThree) => (
                            <dd key={levelThree.getName()}>
                              <a href="/">{levelThree.getName()}</a>
                            </dd>
                          ))}
                        </dl>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
      {hovered && <div className="overlay" />}
    </>
  );
};

export default Nav;
