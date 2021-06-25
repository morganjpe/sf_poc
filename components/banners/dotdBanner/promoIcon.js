const PromoIcon = ({ promoIcon, priceSaving, percentSaving }) => {
  if (promoIcon === 'Save %') {
    return (
      <span className="banner__save-flag">
        <span className="banner__save-flag-text">Save</span>
        <span className="banner__save-flag-price">
          {percentSaving}
          <sup>%</sup>
        </span>
      </span>
    );
  }

  if (promoIcon === 'Save up to %') {
    return (
      <span className="banner__save-flag">
        <span className="banner__save-flag-text">Save</span>
        <span className="banner__save-flag-price">
          {percentSaving}
          <sup>%</sup>
        </span>
      </span>
    );
  }

  if (promoIcon === 'Save £') {
    <span className="banner__save-flag">
      <span className="banner__save-flag-text">Save</span>
      <span className="banner__save-flag-price">
        {priceSaving}
        <sup>£</sup>
      </span>
    </span>;
  }

  if (promoIcon === 'Save up to £') {
    <span className="banner__save-flag">
      <span className="banner__save-flag-text">Save up to</span>
      <span className="banner__save-flag-price">
        {priceSaving}
        <sup>£</sup>
      </span>
    </span>;
  }

  return <div />;
};

export default PromoIcon;
