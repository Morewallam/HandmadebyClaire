

export function toPlainText(block:any) {
    if (block._type !== 'block' || !block.children) {
        return ''
        }
      // loop through the children spans, and join the
      // text strings
      return block.children.map((child: { text: any }) => child.text).join('')
  
}