import { Page, TYPE_CONTAINER_ITEM_UNDEFINED } from '@bloomreach/spa-sdk';
import { BrComponent } from '@bloomreach/react-sdk';

const cmsPage = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <div id="container-main" className="wrp">
    <div className="inner">
      <BrComponent path="main" />
      <BrComponent path="right" />
      {children}
    </div>
  </div>
);

export default cmsPage;
