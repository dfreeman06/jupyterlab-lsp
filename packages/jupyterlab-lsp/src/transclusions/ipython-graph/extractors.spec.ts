import { VirtualDocument } from '../../virtual/document';
import { expect } from 'chai';
import { foreign_code_extractors } from './extractors';
import { extract_code, get_the_only_virtual } from '../../extractors/testutils';

describe('IPython Graph extractors', () => {
  let document: VirtualDocument;

  function extract(code: string) {
    return extract_code(document, code);
  }

  beforeEach(() => {
    document = new VirtualDocument({
      language: 'python',
      path: 'test.ipynb',
      overrides_registry: {},
      foreign_code_extractors: foreign_code_extractors,
      standalone: false,
      file_extension: 'py',
      has_lsp_supported_file: false
    });
  });

  afterEach(() => {
    document.clear();
  });

  describe('%%sparql cell magic', () => {
    it('extracts simple commands', () => {
      let code = '%%sparql\nselect ?s where {?s ?p ?o}';
      let { cell_code_kept, foreign_document_map } = extract(code);

      expect(cell_code_kept).to.equal(code);
      let document = get_the_only_virtual(foreign_document_map);
      expect(document.language).to.equal('sparql');
      expect(document.value).to.equal('select ?s where {?s ?p ?o}\n');
    });
  });

  describe('%%ttl cell magic', () => {
    it('extracts simple commands', () => {
      let code = '%%ttl\n<#me> rdf:type contact:Person .';
      let { cell_code_kept, foreign_document_map } = extract(code);

      expect(cell_code_kept).to.equal(code);
      let document = get_the_only_virtual(foreign_document_map);
      expect(document.language).to.equal('turtle');
      expect(document.value).to.equal('<#me> rdf:type contact:Person .\n');
    });
  });

  describe('%%graphql cell magic', () => {
    it('extracts simple commands', () => {
      let code = '%%graphql\n{jediHero: hero(episode: JEDI) {name}}';
      let { cell_code_kept, foreign_document_map } = extract(code);

      expect(cell_code_kept).to.equal(code);
      let document = get_the_only_virtual(foreign_document_map);
      expect(document.language).to.equal('graphql');
      expect(document.value).to.equal(
        '{jediHero: hero(episode: JEDI) {name}}\n'
      );
    });
  });
});
