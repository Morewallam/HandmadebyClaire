import { toHTML } from "@portabletext/to-html";
import type { PortableTextBlock } from "sanity";


export function toPlainText(block:PortableTextBlock) {
   const html=  toHTML(block, {
  components: {
    block: ({ children, value }) => {
      const hasContent = value.children?.some(
        (child) => child.text?.trim() !== "",
      );
      if (!hasContent) return "<br>";
      return `<p>${children}</p>`;
    },
  },
});
return html.toString()
  
}



