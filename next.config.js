const path = require('path');
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

const getBuildConfig = () => {
    const cssOptions = {
        sassOptions: {
            includePaths: [path.join(process.cwd(), 'src', 'styles')],
        }
    }

    const nextConfig = {
        webpack(config) {
            config.devtool = 'eval-source-map';
            return config;
        }
    }

    return withPlugins([[cssOptions]], nextConfig);
}

module.exports = (phase, ...rest) => {
    const shouldAddBuildConfig = phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD;
    return shouldAddBuildConfig ? getBuildConfig(phase) : {}
}