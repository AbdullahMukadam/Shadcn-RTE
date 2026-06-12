import { cn } from "./ui/utils";
import type { RichTextEditorToolbarProps } from './types';

export function Toolbar({
  children,
  className,
  sticky,
  stickyOffset = 0,
}: RichTextEditorToolbarProps) {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-1 border-b border-input bg-background p-1',
        sticky && 'sticky z-10',
        className
      )}
      style={sticky ? { top: stickyOffset } : undefined}
    >
      {children}
    </div>
  );
}