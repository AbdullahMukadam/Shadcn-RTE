import { EditorContent } from "@tiptap/react";
import { cn } from "./ui/utils";
import { useRichTextEditorContext } from "./rte-context";
import type { RichTextEditorContentProps } from "./types";

export function Content({ className }: RichTextEditorContentProps) {
  const { editor } = useRichTextEditorContext();

  return (
    <EditorContent
      editor={editor}
      className={cn(
        // layout
        "min-h-[160px] w-full px-4 py-3",
        // reset tiptap defaults
        "[&_.tiptap]:outline-none",
        "[&_.tiptap]:min-h-[140px]",

        // placeholder
        "[&_.tiptap_p.is-editor-empty:first-child::before]:content-[attr(data-placeholder)]",
        "[&_.tiptap_p.is-editor-empty:first-child::before]:text-muted-foreground",
        "[&_.tiptap_p.is-editor-empty:first-child::before]:float-left",
        "[&_.tiptap_p.is-editor-empty:first-child::before]:pointer-events-none",
        "[&_.tiptap_p.is-editor-empty:first-child::before]:h-0",

        // base text
        "[&_.tiptap_p]:leading-7 [&_.tiptap_p]:mb-3 last:[&_.tiptap_p]:mb-0",

        // headings
        "[&_.tiptap_h1]:text-2xl [&_.tiptap_h1]:font-bold [&_.tiptap_h1]:tracking-tight [&_.tiptap_h1]:mb-4 [&_.tiptap_h1]:mt-6 first:[&_.tiptap_h1]:mt-0",
        "[&_.tiptap_h2]:text-xl [&_.tiptap_h2]:font-semibold [&_.tiptap_h2]:tracking-tight [&_.tiptap_h2]:mb-3 [&_.tiptap_h2]:mt-5 first:[&_.tiptap_h2]:mt-0",
        "[&_.tiptap_h3]:text-lg [&_.tiptap_h3]:font-semibold [&_.tiptap_h3]:mb-2 [&_.tiptap_h3]:mt-4 first:[&_.tiptap_h3]:mt-0",
        "[&_.tiptap_h4]:text-base [&_.tiptap_h4]:font-semibold [&_.tiptap_h4]:mb-2 [&_.tiptap_h4]:mt-3 first:[&_.tiptap_h4]:mt-0",

        // lists
        "[&_.tiptap_ul]:list-disc [&_.tiptap_ul]:pl-6 [&_.tiptap_ul]:mb-3 [&_.tiptap_ul]:space-y-1",
        "[&_.tiptap_ol]:list-decimal [&_.tiptap_ol]:pl-6 [&_.tiptap_ol]:mb-3 [&_.tiptap_ol]:space-y-1",
        "[&_.tiptap_li]:leading-7",

        // blockquote
        "[&_.tiptap_blockquote]:border-l-[3px] [&_.tiptap_blockquote]:border-border",
        "[&_.tiptap_blockquote]:pl-4 [&_.tiptap_blockquote]:my-4",
        "[&_.tiptap_blockquote]:text-muted-foreground [&_.tiptap_blockquote]:italic",

        // inline code
        "[&_.tiptap_code]:bg-muted [&_.tiptap_code]:text-foreground",
        "[&_.tiptap_code]:rounded-sm [&_.tiptap_code]:px-1.5 [&_.tiptap_code]:py-0.5",
        "[&_.tiptap_code]:font-mono [&_.tiptap_code]:text-[0.875em]",
        "[&_.tiptap_code]:border [&_.tiptap_code]:border-border/50",

        // code block
        "[&_.tiptap_pre]:bg-muted [&_.tiptap_pre]:text-foreground",
        "[&_.tiptap_pre]:rounded-md [&_.tiptap_pre]:border [&_.tiptap_pre]:border-border",
        "[&_.tiptap_pre]:p-4 [&_.tiptap_pre]:my-4 [&_.tiptap_pre]:overflow-x-auto",
        "[&_.tiptap_pre_code]:bg-transparent [&_.tiptap_pre_code]:border-0",
        "[&_.tiptap_pre_code]:p-0 [&_.tiptap_pre_code]:font-mono [&_.tiptap_pre_code]:text-sm",

        // horizontal rule
        "[&_.tiptap_hr]:border-none [&_.tiptap_hr]:border-t [&_.tiptap_hr]:border-border [&_.tiptap_hr]:my-6",

        // links
        "[&_.tiptap_a]:text-primary [&_.tiptap_a]:underline [&_.tiptap_a]:underline-offset-4",
        "[&_.tiptap_a:hover]:text-primary/80",

        // text selection
        "[&_.tiptap_::selection]:bg-primary/15",

        className
      )}
    />
  );
}
