import { useConfig, useTheme } from "nextra-theme-docs";
import s from "./fiddle.module.scss"

export function Fiddle({ url }: { url: string }) {
  const theme = useTheme();

  let fullURL = url;
  if (theme.resolvedTheme === "dark") {
    fullURL += "dark/?menuColor=2a363d&bodyColor=1e2428";
  } else {
    fullURL += "?menuColor=eaf0f9&bodyColor=f4f7fc";
  }

  return <div className="rounded-xl translate-y-0 mt-6 overflow-hidden">
    <iframe key={theme.resolvedTheme} width="100%" height="300" src={fullURL} frameBorder="0"></iframe>
  </div>
  ;
}