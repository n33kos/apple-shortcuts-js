const {
  text,
  speakText,
} = require('@joshfarrant/shortcuts-js/actions');

const actions = [
  // Output final text
  text({
    text: 'Test this mess',
  }),
  speakText({}),
];

module.exports = actions;
