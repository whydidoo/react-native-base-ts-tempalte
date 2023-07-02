function templateFunc({ imports, componentName, props, jsx, exports }, { tpl }) {
  // add in parser an ability to insert children
  const child = {
    type: 'JSXExpressionContainer',
    expression: { type: 'JSXText', value: 'props.children' },
  };

  jsx.children.push(child);

  return tpl`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
}

module.exports = templateFunc;
