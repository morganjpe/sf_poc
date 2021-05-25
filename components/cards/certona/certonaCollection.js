import getEffectiveMultipleDocumentParameters from '../../utils';
import CertonaCard from './certonaCard';

const CertonaGroup = ({ component, page }) => {
  const models = component.getModels();
  const docParams = getEffectiveMultipleDocumentParameters(page, models, 6);

  return (
    <div
      style={{
        display: 'flex',
        padding: '20px 0',
      }}
    >
      {docParams.map(({ document }) => {
        const { description, sku } = document.getData();
        return <CertonaCard description={description} sku={sku} />;
      })}
    </div>
  );
};

export default CertonaGroup;
