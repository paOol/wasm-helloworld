module.exports = {
  webpack(config) {
    config.experiments = { asyncWebAssembly: true };
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
    return config;
  }
};
