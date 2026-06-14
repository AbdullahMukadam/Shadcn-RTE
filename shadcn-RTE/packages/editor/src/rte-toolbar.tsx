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
        'rte-toolbar',
        sticky && 'sticky z-10',
        className
      )}
      data-sticky={sticky ? '' : undefined}
      style={sticky ? { top: stickyOffset } : undefined}
    >
      {children}
    </div>
  );
}