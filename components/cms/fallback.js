const Fallback = ({ page }) => (
  <div className={page.isPreview() ? 'has-edit-button' : ''}>
    component requires mapping
  </div>
);

export default Fallback;
