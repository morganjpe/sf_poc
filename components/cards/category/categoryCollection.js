import CategoryBlock from './categoryBlock';

const CategoryCollection = ({ component, page }) => {
  const params = component.getParameters();

  if (params.blocks === '') {
    return <div />;
  }

  const { blocks } = params; // columns
  const categoryBlocks = page.getContent(blocks);

  return (
    <div className="cat-block-height width-wrap brand-pages">
      <div className="row">
        <div className="row-wrp--mod">
          {categoryBlocks.getData().categoryBlocks.map(({ $ref }) => {
            const { id, ...rest } = page.getContent($ref).getData();
            return (
              <div key={id} className="lg-8 md-8 sm-12 cols">
                <CategoryBlock {...rest} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryCollection;
