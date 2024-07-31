const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

//// metro.config.js
//module.exports = {
//  transformer: {
//    babelTransformerPath: require.resolve('react-native-svg-transformer'),
//  },
//  resolver: {
//    assetExts: ['png', 'jpg', 'jpeg', 'svg'],
//    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'svg'],
//  },
//};
