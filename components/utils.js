const getEffectiveMultipleDocumentParameters = (page, models, maxCount) =>
  [...Array(maxCount).keys()]
    .map((n) => {
      const parameterName = `card${n + 1}`;
      const ref = models[`card${n + 1}`];
      return {
        parameterName,
        document: ref && page.getContent(ref),
      };
    })
    .filter((docParam) => !!docParam.document);

const diffPercent = (v1, v2) =>
  Math.floor((Math.abs(v1 - v2) / ((v1 + v2) / 2)) * 100);

export const getSavings = (currentPrice, wasPrice) => {
  console.log(currentPrice, wasPrice);

  return {
    percent: diffPercent(currentPrice, wasPrice),
    difference: (currentPrice - wasPrice).toFixed(2),
  };
};

export default getEffectiveMultipleDocumentParameters;
