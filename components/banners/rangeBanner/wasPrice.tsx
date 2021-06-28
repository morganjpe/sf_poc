// utils
import { getSavings } from '../../utils';

import { ProductAttributes } from '../../useProductApi';

interface WasPriceProps {
  product: ProductAttributes | null;
  turnOffSavingWasPrice: 'true' | 'false';
  incVat: boolean;
}

const WasPrice = ({
  product,
  turnOffSavingWasPrice,
  incVat,
}: WasPriceProps): JSX.Element => {
  if (!product || turnOffSavingWasPrice === 'true') {
    return <div />;
  }

  const { price, exVatPrice, priceWas, priceWasExVat } = product;

  const { percent, difference } = incVat
    ? getSavings(price, priceWas)
    : getSavings(exVatPrice, priceWasExVat);

  return (
    <div className="ct__price-before">
      <span className="ct__price-was">
        Was &pound;
        {incVat ? product?.priceWas : product?.priceWasExVat}
      </span>
      <span className="ct__price-save">
        Save £{difference} ({percent}%)
      </span>
    </div>
  );
};

export default WasPrice;
