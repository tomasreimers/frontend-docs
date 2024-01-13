import { type ExcalidrawInitialDataState } from "@excalidraw/excalidraw/types/types";
import { useTheme } from "nextra-theme-docs";
import { useEffect, useRef } from "react";

export function Excalidraw({
  contents,
  widthClass
}: {
  contents: ExcalidrawInitialDataState;
  widthClass: string;
}) {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    void (async () => {
      const excalidraw = await import("@excalidraw/excalidraw");
      const data = await excalidraw.exportToSvg({
        elements: contents.elements || [],
        files: contents.files || null,
        exportPadding: 16,
        renderEmbeddables: true,
        appState: {
          ...contents.appState,
          exportWithDarkMode: theme.resolvedTheme === "dark",
        },
      });
      data.classList.add(widthClass || "w-full");
      data.classList.add("h-auto");
      ref.current?.replaceChildren(data);
    })();
  }, [contents, theme]);

  return <div className="mt-6 flex justify-center" ref={ref}></div>;
}
