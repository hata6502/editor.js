describe('should initialize editorjs instance correctly with default holder property', () => {
  it('create editor js instance with empty object', () => {
    cy.window().then(window => {
      assert.isFunction(window.EditorJS, 'window.EditorJS is a function');
    });

    /**
     * create a div element for holding editor
     */
    cy.document().then((document) => {
      const editorContainer = document.createElement('div');

      editorContainer.id = 'editorjs';
      editorContainer.dataset.cy = 'editorjs';

      /**
       * Prepend the editor container div, so that it will be above the script tag.
       */
      document.body.prepend(editorContainer);
    });

    cy.window().then((window) => {
      const editor = new window.EditorJS({});

      /**
       * Assert the created editor instance.
       */
      expect(editor).to.be.instanceOf(window.EditorJS);
    });

    /**
     * Assert if create editor instance is visible or not.
     */
    cy.get('[data-cy=editorjs]')
      .get('div.codex-editor')
      .should('be.visible');
  });
});