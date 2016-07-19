Package.describe({
  name: 'lifefilm:videojs',
  summary: 'VideoJS v5.10.4',
  version: '5.10.4',
  git: 'https://github.com/fortunto2/meteor-videojs.git'
})

Package.onUse(function(api) {
  api.versionsFrom('1.2.1')

  api.use('jquery', 'client')

  const npmPath = Npm.require('path')

  const client = {
    arch: 'client',
    files: [],
    add: function (basePath) {
      var args = Array.prototype.slice.call(arguments, 1)

      arguments = basePath.concat(args)

      var _path = npmPath.join.apply(npmPath, arguments)

      this.files.push(_path)

      return this
    }
  }

  const assets = {
    arch: 'client',
    files: [],
    add: function (basePath) {
      var args = Array.prototype.slice.call(arguments, 1)

      arguments = basePath.concat(args)

      var _path = npmPath.join.apply(npmPath, arguments)

      this.files.push(_path)

      return this
    }
  }

  // Library
  const baseLibPath = ['videojs', 'lib']

  client.add(baseLibPath, 'video-js.min.css')
  client.add(baseLibPath, 'video.min.js')

  // Assets
  const baseAssetPath = ['videojs', 'fonts']

  assets.add(baseLibPath, 'video.min.js.map')
  assets.add(baseLibPath, 'video-js.swf')
  assets.add(baseAssetPath, 'VideoJS.eot')
  assets.add(baseAssetPath, 'VideoJS.svg')
  assets.add(baseAssetPath, 'VideoJS.ttf')
  assets.add(baseAssetPath, 'VideoJS.woff')

  api.addFiles(client.files, client.arch)
  api.addFiles('video-js-override.css', 'client')
  api.addAssets(assets.files, assets.arch)
})
