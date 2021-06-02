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

export default getEffectiveMultipleDocumentParameters;
