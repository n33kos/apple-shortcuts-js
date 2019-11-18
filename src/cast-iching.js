const {
  variable,
  actionOutput,
  withVariables,
} = require('@joshfarrant/shortcuts-js');
const {
  getContentsOfURL,
  URL,
  getTextFromInput,
  getDictionaryFromInput,
  setVariable,
  getVariable,
  getDictionaryValue,
  text,
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
  }),
  getTextFromInput({}, chineseTitle),

  // Number
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'number',
  }),
  getTextFromInput({}, number),

  // Title
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'title',
  }),
  getTextFromInput({}, title),

  // Upper Trigram
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'upperTrigram',
  }),
  getTextFromInput({}, upperTrigram),

  // Lower Trigram
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'lowerTrigram',
  }),
  getTextFromInput({}, lowerTrigram),

  // Image
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'image',
  }),
  getTextFromInput({}, image),

  // Judgement
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'judgement',
  }),
  getTextFromInput({}, judgement),

  // Lines
  getVariable({
    variable: variable('ReadingDictionary'),
  }),
  getDictionaryValue({
    get: 'Value',
    key: 'lines',
  }),
  getTextFromInput({}, lines),

  // Output final text
  text({
    text: withVariables`
      ${chineseTitle}, ${number}, ${title}.
      ${upperTrigram} above, ${lowerTrigram} below.
      ${image} ${judgement} ${lines}`,
  }),
];

module.exports = actions;