const { test } = require('node:test');
const assert = require('node:assert/strict');
const { datasetTimeSeriesMap } = require('../dist/datasetTimeSeriesMap.js');

test('datasetTimeSeriesMap has expected series', () => {
  const mun = datasetTimeSeriesMap['Contas Regionais - Município do Rio de Janeiro'];
  const est = datasetTimeSeriesMap['Contas Regionais - Estado do Rio de Janeiro'];
  assert.deepStrictEqual(mun, ['Valores Correntes', 'Valores Deflacionados', 'Variação', 'Participação']);
  assert.deepStrictEqual(est, mun);
});
