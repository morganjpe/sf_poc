const Preview = ({ preview, children }) => (
  <div className={preview ? 'has-edit-button' : ''}>{children}</div>
);

export default Preview;
