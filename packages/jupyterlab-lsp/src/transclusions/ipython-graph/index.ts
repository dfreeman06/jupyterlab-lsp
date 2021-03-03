import { JupyterFrontEndPlugin } from '@jupyterlab/application';
import { ILSPCodeExtractorsManager, PLUGIN_ID } from '../../tokens';
import { foreign_code_extractors } from './extractors';

export const IPYTHON_GRAPH_TRANSCLUSIONS: JupyterFrontEndPlugin<void> = {
  id: PLUGIN_ID + ':ipython-graph',
  requires: [ILSPCodeExtractorsManager],
  activate: (app, extractors_manager: ILSPCodeExtractorsManager) => {
    for (let language of Object.keys(foreign_code_extractors)) {
      for (let extractor of foreign_code_extractors[language]) {
        extractors_manager.register(extractor, language);
      }
    }
  },
  autoStart: true
};
