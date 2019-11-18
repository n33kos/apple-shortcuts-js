const {
  variable,
  actionOutput,
  withVariables,
} = require('@joshfarrant/shortcuts-js');
const {
  getContentsOfURL,
  showResult,
  URL,
  getTextFromInput,
  getDictionaryFromInput,
  setVariable,
  text,
  getVariable,
  getDictionaryValue,
  addToVariable,
  nothing,
} = require('@joshfarrant/shortcuts-js/actions');

const chineseTitle = actionOutput('chineseTitle');
const number = actionOutput('number');
const title = actionOutput('title');
const upperTrigram = actionOutput('upperTrigram');
const lowerTrigram = actionOutput('lowerTrigram');
const image = actionOutput('image');
const judgement = actionOutput('judgement');
const lines = actionOutput('lines');

const actions = [
  // Get dictionary
  URL({
    url: 'http://suskitech.org/ichingapi/?cast=yarrow',
  }),
  getContentsOfURL({
    headers: {},
    method: 'POST',
    requestBodyType: 'JSON',
    requestBody: {},
  }),
  getTextFromInput(),
  getDictionaryFromInput(),
  setVariable({
    variable: variable('ReadingDictionary'),
  }),

  // Chinese title
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'chineseTitle',
  }, chineseTitle),

  // Number
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'number',
  }, number),

  // Title
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'title',
  }, title),

  // Upper Trigram
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'upperTrigram',
  }, upperTrigram),

  // Lower Trigram
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'lowerTrigram',
  }, lowerTrigram),

  // Image
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'image',
  }, image),

  // Judgement
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'judgement',
  }, judgement),

  // Lines
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'lines',
  }, lines),

  nothing(),

  // Show result
  showResult({
    text: withVariables`${chineseTitle}, ${number}, ${title} ${upperTrigram} above, ${lowerTrigram} below. ${image} ${judgement} ${lines}`,
  }),
];

module.exports = actions;