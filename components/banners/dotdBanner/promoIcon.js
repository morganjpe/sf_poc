const PromoIcon = ({ promoIcon, priceSaving, percentSaving }) => {
  const icon = promoIcon.selectionValues[0].key.trim();

  console.log(icon === 'Save £');

  if (icon === 'Save %') {
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

  if (icon === 'Save up to %') {
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

  if (icon === 'Save £') {
    return (
      <span className="banner__save-flag">
        <span className="banner__save-flag-text">Save</span>
        <span className="banner__save-flag-price">
          {priceSaving}
          <sup>£</sup>
        </span>
      </span>
    );
  }

  if (icon === 'Save up to £') {
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
