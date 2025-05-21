const { test } = require('node:test');
const assert = require('node:assert/strict');
const { datasetData } = require('../dist/datasetData.js');

const iae = datasetData["Índice de Atividade Econômica (IAE-Rio)"];
const pmsVolume = datasetData["Pesquisa Mensal de Serviços (PMS) - Volume"];

test('shared datasets reference the same array', () => {
  assert.strictEqual(iae, pmsVolume);
});

test('dataset has 12 months starting with Jan', () => {
  assert.strictEqual(iae.length, 12);
  assert.deepStrictEqual(iae[0], { month: 'Jan', value: 10 });
});
