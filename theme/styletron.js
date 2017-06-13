const isServer = typeof window === 'undefined';

let styletron;

export default function getStyletron() {
  if (isServer) {
    const Styletron = require('styletron-server');
    styletron = new Styletron();
  }
  else if (!styletron) {
    const Styletron = require('styletron-client');
    const styleElements = document.getElementsByClassName('_styletron_hydrate_');
    styletron = new Styletron(styleElements);
  }

  return styletron;
}
if (typeof window !== 'undefined') {window.global = {}; window.global['getStyletron'] = getStyletron;}

export function flush() {
  const styletron_ = styletron;
  styletron = null;
  return styletron_;
}
