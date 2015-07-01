Package.describe({
  name: 'jrudio:videojs',
  summary: 'VideoJS v4.12.7',
  version: '4.12.7',
  git: 'https://github.com/jrudio/meteor-videojs.git'
});

Package.onUse(function(api) {
  api.versionsFrom('WINDOWS-PREVIEW@0.0.10');
  api.use('jquery', 'client');

  var path = Npm.require('path');

  var assetPath = path.join('videojs');

  // Library
  api.addFiles(path.join(assetPath, 'lib', 'video-js.min.css'), 'client');
  api.addFiles(path.join(assetPath, 'lib', 'video.js'), 'client');
  api.addFiles(path.join(assetPath, 'lib', 'video-js.swf'), 'client');

  // Fonts
  api.addFiles(path.join(assetPath, 'fonts', 'vjs.eot'), 'client', { isAsset: true });
  api.addFiles(path.join(assetPath, 'fonts', 'vjs.svg'), 'client', { isAsset: true });
  api.addFiles(path.join(assetPath, 'fonts', 'vjs.ttf'), 'client', { isAsset: true });
  api.addFiles(path.join(assetPath, 'fonts', 'vjs.woff'), 'client', { isAsset: true });

  api.addFiles(path.join('video-js-override.css'), 'client');
});