Package.describe({
  name: 'videojs',
  summary: ' /* Fill me in! */ ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('WINDOWS-PREVIEW@0.0.8');
  api.addFiles('videojs.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('videojs');
  api.addFiles('videojs-tests.js');
});
