/* eslint-disable no-nested-ternary */

import { useState, useContext } from 'react';

import {
  BrComponentContext,
  BrManageMenuButton,
  BrPageContext,
} from '@bloomreach/react-sdk';

const Nav = ({ isResponsiveNav }) => {
  const [hovered, setIsHovered] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // bloomreach content
  const component = useContext(BrComponentContext);
  const page = useContext(BrPageContext);
  const menuRef = component?.getModels()?.menu;
  const menu = menuRef && page?.getContent(menuRef);

  const props = {
    onMouseOver: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  // useEffect(() => {
  //   window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  // });

  return (
    <>
      <nav
        id="site-navigation"
        className={
          isResponsiveNav
            ? page.isPreview()
              ? 'main-nav open has-edit-button'
              : 'main-nav open'
            : page.isPreview()
            ? 'main-nav has-edit-button'
            : 'main-nav'
        }
        style={
          {
            // top: isResponsiveNav
            //   ? windowWidth <= 640
            //     ? '-338px'
            //     : '197px'
            //   : undefined,
            // borderTopWidth: isResponsiveNav
            //   ? windowWidth <= 640 && isResponsiveNav
            //     ? '500px'
            //     : undefined
            //   : undefined,
          }
        }
      >
        <BrManageMenuButton menu={menu} />
        <div className="sh-resize">
          <div
            className={hovered ? 'menu-tier-1 js-hide' : 'menu-tier-1'}
            style={{ zIndex: hovered ? 20 : 9 }}
          >
            <ul className="mn">
              <li className="first">DEPARTMENTS</li>
              {menu.getItems().map((levelOne) => (
                <li key={levelOne.getName()} {...props}>
                  <a href="/">{levelOne.getName()}</a>

                  {levelOne.getChildren().length > 0 && (
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
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {(hovered || isResponsiveNav) && <div className="overlay" />}
    </>
  );
};

export default Nav;
