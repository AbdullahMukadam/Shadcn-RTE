import { cn } from "../../ui/src/lib/utils";
import type { RichTextEditorControlsGroupProps } from './types';

export function ControlsGroup({
  children,
  className,
}: RichTextEditorControlsGroupProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-0.5',
        'border-r border-input pr-1 mr-1 last:border-r-0 last:pr-0 last:mr-0',
        className
      )}
    >
      {children}
    </div>
  );
}