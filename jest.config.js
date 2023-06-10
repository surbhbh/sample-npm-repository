module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: surefire/target/surefire-reports,
      outputName: output,
    } ]
  ]
};
