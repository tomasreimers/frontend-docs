import { useEffect, useId, useRef, useState } from "react";
import mermaid, { MermaidConfig } from 'mermaid';
import { useTheme } from "nextra-theme-docs";
import s from "./Mermaid.module.scss";
import resolveConfig from 'tailwindcss/resolveConfig'
import rawTailwindConfig from '../../tailwind.config.js'

const tailwindConfig = resolveConfig(rawTailwindConfig)

/**
 * While Nextra technically has support for Mermaid charts 
 * (https://nextra.site/docs/guide/advanced/mermaid), their
 * built-in support (https://github.com/the-guild-org/docs/blob/main/packages/remark-mermaid/src/mermaid.tsx) 
 * has a few issues: 
 *  - It is hard to globally configure (b/c it calls initialize on 
 *    every render, overriding whatever you set)
 *  - Rendering with a custom font (Inter) causes text to be truncated 
 *    (https://github.com/mermaid-js/mermaid/issues/1540)
 * 
 * I've submitted a PR for the second one (https://github.com/the-guild-org/docs/pull/1348),
 * but don't believe I can change the first without some refactoring.
 * 
 * If Mermaid was more prevalent (or I was using a CMS), I would look
 * into one of:
 *  - monkey-patching the inline support 
 *    (via https://www.npmjs.com/package/@theguild/remark-mermaid and
 *     https://github.com/shuding/nextra/pull/1930/files),
 *  - providing a custom Nextra remark plugin for this (via 
 *    https://nextra.site/docs/guide/syntax-highlighting#custom-themes
 *    and nextra({ mdxOptions: { remarkPlugins: [ ... ]} }))
 *  - providing a custom code component to MDX
 *    (https://nextra.site/docs/docs-theme/theme-configuration#mdx-components)
 * 
 * However, because we only use it sporadically I'm going to just write 
 * my own component to render Mermaid. If this changes, this should 
 * be an easy approach to update.
 */
export function Mermaid({ chart }: { chart: string }) {
  const id = useId();
  const theme = useTheme();
  const [svg, setSvg] = useState('');
  const testBoxRef = useRef(null);

  useEffect(() => {
    const renderChart = async () => {
      const isDarkMode = theme.resolvedTheme === "dark";

      const mermaidConfig: MermaidConfig = {
        startOnLoad: false,
        securityLevel: 'loose',
        fontFamily: 'inherit',
        fontSize: 12,
        theme: 'base',
        // https://mermaid.js.org/config/theming.html#theme-variables
        themeVariables: {
          darkMode: isDarkMode,
          fontFamily: 'inherit',
          fontSize: "16px",
          background: isDarkMode ? tailwindConfig.theme!.colors!.black : tailwindConfig.theme!.colors!.white,
          primaryColor: isDarkMode ? tailwindConfig.theme!.colors!.neutral["800"] : tailwindConfig.theme!.colors!.neutral["200"],
          primaryTextColor: isDarkMode ? tailwindConfig.theme!.colors!.white : tailwindConfig.theme!.colors!.black,
          noteBkgColor: tailwindConfig.theme!.colors!.red["900"],
          noteTextColor: tailwindConfig.theme!.colors!.red["900"],
        }
      };

      try {
        mermaid.initialize(mermaidConfig);
        const { svg } = await mermaid.render(
          // strip invalid characters for `id` attribute
          id.replaceAll(':', ''),
          chart,
          // This is the critical line
          testBoxRef.current || undefined
        );
        setSvg(svg);
      } catch (error) {
        // eslint-disable-next-line no-console -- show error
        console.error('Error while rendering mermaid', error);
      }
    };
    
    void renderChart();
  }, [theme, chart]);

  return <div className={`mt-6 ${s.chart}`} ref={testBoxRef} dangerouslySetInnerHTML={{ __html: svg }} />;

}