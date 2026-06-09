export interface RichTextEditorLabels {
    boldControlLabel: string;
    italicControlLabel: string;
    underlineControlLabel: string;
    strikeControlLabel: string;
    clearFormattingControlLabel: string;
    codeControlLabel: string;
    codeBlockControlLabel: string;
    h1ControlLabel: string;
    h2ControlLabel: string;
    h3ControlLabel: string;
    h4ControlLabel: string;
    bulletListControlLabel: string;
    orderedListControlLabel: string;
    blockquoteControlLabel: string;
    hrControlLabel: string;
    linkControlLabel: string;
    unlinkControlLabel: string;
    undoControlLabel: string;
    redoControlLabel: string;
    // link editor
    linkEditorInputLabel: string;
    linkEditorInputPlaceholder: string;
    linkEditorExternalLink: string;
    linkEditorInternalLink: string;
    linkEditorSave: string;
  }
  
  export const DEFAULT_LABELS: RichTextEditorLabels = {
    boldControlLabel: 'Bold',
    italicControlLabel: 'Italic',
    underlineControlLabel: 'Underline',
    strikeControlLabel: 'Strikethrough',
    clearFormattingControlLabel: 'Clear formatting',
    codeControlLabel: 'Code',
    codeBlockControlLabel: 'Code block',
    h1ControlLabel: 'Heading 1',
    h2ControlLabel: 'Heading 2',
    h3ControlLabel: 'Heading 3',
    h4ControlLabel: 'Heading 4',
    bulletListControlLabel: 'Bullet list',
    orderedListControlLabel: 'Ordered list',
    blockquoteControlLabel: 'Blockquote',
    hrControlLabel: 'Horizontal rule',
    linkControlLabel: 'Link',
    unlinkControlLabel: 'Remove link',
    undoControlLabel: 'Undo',
    redoControlLabel: 'Redo',
    linkEditorInputLabel: 'Enter URL',
    linkEditorInputPlaceholder: 'https://example.com',
    linkEditorExternalLink: 'Open in new tab',
    linkEditorInternalLink: 'Open in same tab',
    linkEditorSave: 'Save',
  };