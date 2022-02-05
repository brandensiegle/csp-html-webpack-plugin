import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Compilation } from 'webpack';
import { load } from 'cheerio';

export = CspHtmlWebpackPlugin;

declare class CspHtmlWebpackPlugin {
  constructor(policy?: CspPolicy, additionalOpts?: Options);
}

interface CspPolicy {
  [key: string]: string | string[];
}

interface Options {
  enabled: boolean;
  hashingMethod: 'sha256' | 'sha384' | 'sha256';
  hashEnabled: {
    'script-src'?: boolean;
    'style-src'?: boolean;
  };
  nonceEnabled: {
    'script-src'?: boolean;
    'style-src'?: boolean;
  };
  processFn: ProcessFunction;
}

type ProcessFunction = (
  builtPolicy: string,
  htmlPluginData: HtmlPluginData,
  $: typeof load,
  compilation: Compilation
) => void;

interface HtmlPluginData {
  html: string;
  outputName: string;
  plugin: HtmlWebpackPlugin;
}
