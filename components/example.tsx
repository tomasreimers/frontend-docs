import { Sandpack } from "@codesandbox/sandpack-react"
import { useTheme } from "nextra-theme-docs";

export function Example({ files, template, console, visibleFiles }: { template: "static" | "react", files: Record<string, string>, console?: boolean, visibleFiles?: string[] }) {
  const theme = useTheme();

  return <Sandpack
    options={{
      classes: {
        "sp-layout": "mt-6"
      },
      showConsole: console,
      visibleFiles
    }}
    files={files}
    template={template}
    theme={theme.resolvedTheme === "dark" ? "dark" : "light"}
    />
}