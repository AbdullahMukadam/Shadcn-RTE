import { EditorContent } from '@tiptap/react';
import { cn } from "../../ui/src/lib/utils";
import { useRichTextEditorContext } from './rte-context';
import type { RichTextEditorContentProps } from './types';

export function Content({ className }: RichTextEditorContentProps) {
  const { editor } = useRichTextEditorContext();

  return (
    <EditorContent
      editor={editor}
      className={cn(
        'prose prose-sm dark:prose-invert max-w-none',
        'p-3 focus-within:outline-none',
        '[&_.tiptap]:outline-none',
        '[&_.tiptap_p]:leading-7',
        '[&_.tiptap_h1]:text-2xl [&_.tiptap_h1]:font-bold',
        '[&_.tiptap_h2]:text-xl [&_.tiptap_h2]:font-semibold',
        '[&_.tiptap_h3]:text-lg [&_.tiptap_h3]:font-semibold',
        '[&_.tiptap_h4]:text-base [&_.tiptap_h4]:font-semibold',
        '[&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6',
        '[&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6',
        '[&_.tiptap_blockquote]:border-l-2 [&_.tiptap_blockquote]:border-muted-foreground [&_.tiptap_blockquote]:pl-4 [&_.tiptap_blockquote]:italic',
        '[&_.tiptap_code]:bg-muted [&_.tiptap_code]:rounded [&_.tiptap_code]:px-1 [&_.tiptap_code]:font-mono [&_.tiptap_code]:text-sm',
        '[&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:rounded [&_.tiptap_pre]:p-3 [&_.tiptap_pre]:font-mono [&_.tiptap_pre]:text-sm',
        '[&_.tiptap_hr]:border-border',
        className
      )}
    />
  );
}