interface AccordionPanelProps {
  title: string;
  content: string;
  setIsToggled: () => void;
  isToggled: boolean;
}

const AccordionPanel = ({
  title,
  content,
  setIsToggled,
  isToggled,
}: AccordionPanelProps): JSX.Element => (
  <li className={`${isToggled ? 'ac__item' : 'ac__item ac__item--open'}`}>
    <div
      onClick={() => setIsToggled()}
      onKeyDown={(e) => e.key === 'Enter' && setIsToggled()}
      className="ac__title next-working border-0"
      id="ac__title-1"
      aria-controls="ac__content-1"
      aria-expanded="false"
      aria-selected="false"
      role="tab"
      tabIndex={-1}
    >
      <h3 style={{ margin: 0 }}>{title}</h3>
      <span className="icon-minus" />
      <span className="icon-plus" />
    </div>

    <div
      className="ac__body"
      id="ac__content-1"
      aria-labelledby="ac__title-1"
      aria-hidden="true"
      role="tabpanel"
      tabIndex={-1}
      style={{
        display: isToggled ? 'block' : 'none',
        borderTop: 'dashed 1px #d1d1d1',
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </li>
);

export default AccordionPanel;
