module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
          '@/constants': ['./src/constants'],
          '@/screens': ['./src/app/screens'],
          '@/app': ['./src/app'],
          '@/navigation': ['./src/app/navigation']
        }
      }
    ],
  ]
};
