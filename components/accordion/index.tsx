import { BrManageContentButton } from '@bloomreach/react-sdk';
import { Page } from '@bloomreach/spa-sdk';
import { useState } from 'react';

// component
import AccordionPanel from './accordionPanel';

interface AccordionProps {
  page: Page;
  pageRef: string;
}

const Accordion = ({ pageRef, page }: AccordionProps): JSX.Element => {
  const [toggled, setToggled] = useState(0);

  const data = page.getContent(pageRef);

  if (page.isPreview() && !data) {
    return (
      <div className="has-edit-button">
        <BrManageContentButton content={page.getContent(pageRef)} />
      </div>
    );
  }

  if (!data) {
    return <div />;
  }

  const { mirror } = data.getData();

  return (
    <section className="main-col main-col--nopadding">
      <div
        style={{ padding: '38px 38px 38px 25px' }}
        className="row row-wrp--mod "
      >
        <div>
          <ul
            className="n accordion"
            role="tablist"
            aria-multiselectable="false"
          >
            {mirror.map(({ $ref }: { [n: string]: string }, index: number) => {
              const panelData = page.getContent($ref);

              if (panelData) {
                const { title, content, id } = panelData.getData();
                return (
                  <div style={{ position: 'relative' }} key={id}>
                    <BrManageContentButton content={panelData} />
                    <AccordionPanel
                      isToggled={toggled === index}
                      setIsToggled={() => setToggled(index)}
                      title={title}
                      content={content}
                    />
                  </div>
                );
              }

              return <div />;
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Accordion;

// {
/* ; */
// }
