// utils
import { getSavings } from '../../utils';

const BannerTitle = ({
  type,
  freeTypePound,
  freeTypePercent,
  skuPrice,
  skuWasPrice,
}: {
  type: 'mainPrice' | 'savePercent' | 'savePound';
  freeTypePound: string;
  skuPrice: number | undefined;
  skuWasPrice: number | undefined;
  freeTypePercent: string;
}): JSX.Element => {
  if (type === 'savePercent') {
    const savePercentage =
      skuPrice && skuWasPrice ? getSavings(skuPrice, skuWasPrice) : undefined;

    return (
      <span className="banner__deal-value">
        {savePercentage ? savePercentage.percent : freeTypePercent}
        <sup>%</sup>
      </span>
    );
  }

  if (type === 'savePound') {
    const savePound =
      skuPrice && skuWasPrice ? getSavings(skuPrice, skuWasPrice) : undefined;

    if (savePound) {
      const [pound, pence] = savePound.difference.split('.');
      return (
        <span className="banner__deal-value">
          <sup>£</sup>
          {pound}
          <sup>.{pence}</sup>
        </span>
      );
    }

    return <div />;
  }

  if (type === 'mainPrice') {
    const [pound, pence] = skuPrice
      ? skuPrice.toString().split('.')
      : freeTypePound.split('.');
    return (
      <span className="banner__deal-value">
        <sup>£</sup>
        {pound}
        <sup>.{pence}</sup>
      </span>
    );
  }

  return <div />;
};

export default BannerTitle;
