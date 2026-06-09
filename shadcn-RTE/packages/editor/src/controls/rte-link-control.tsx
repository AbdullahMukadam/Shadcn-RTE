import * as React from "react";
import { useState } from "react";
import { useEditorState } from "@tiptap/react";
import { Link } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../ui/src/components/popover";
import { Input } from "../../../ui/src/components/input";
import { Button } from "../../../ui/src/components/button";
import { Toggle } from "../../../ui/src/components/toggle";
import { useRichTextEditorContext } from "../rte-context";

export function LinkControl() {
  const { editor, labels } = useRichTextEditorContext();
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(false);

  const active = useEditorState({
    editor: editor ?? null,
    selector: (ctx) =>
      ctx.editor && !ctx.editor.isDestroyed
        ? ctx.editor.isActive("link")
        : false,
  });

  const handleOpen = (isOpen: boolean) => {
    if (isOpen) {
      const linkData = editor?.getAttributes("link");
      setUrl(linkData?.href || "");
    } else {
      setUrl("");
    }
    setOpen(isOpen);
  };

  const handleSave = () => {
    if (!editor || editor.isDestroyed) return;
    if (url === "") {
      editor.chain().focus().extendMarkRange("link", { href: "" });
    } else {
      editor.chain().focus().extendMarkRange("link", { href: url }).run();
    }
    setOpen(false);
    setUrl("");
  };

  const handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    }
  };

  return (
    <Popover open={open} onOpenChange={handleOpen}>
      <PopoverTrigger>
        <Toggle
          size="sm"
          pressed={active ?? false}
          aria-label={labels.linkControlLabel}
          title={labels.linkControlLabel}
          className="h-8 w-8 p-0"
          onMouseDown={(e) => e.preventDefault()}
        >
          <Link className="h-4 w-4" />
        </Toggle>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-3">
        <div className="flex gap-2">
          <Input
            type="url"
            placeholder={labels.linkEditorInputPlaceholder}
            aria-label={labels.linkEditorInputLabel}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-8 text-sm"
          />
          <Button
            size="sm"
            variant="default"
            onClick={handleSave}
            className="h-8"
          >
            {labels.linkEditorSave}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
