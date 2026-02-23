/*
getElementsByTagName
getElementsByTagName() is a method which exists on the Document and Element objects and returns an HTMLCollection of descendant elements within the Document/Element given a tag name.

Let's implement our own Element.getElementsByTagName() that is similar but slightly different:

It is a pure function which takes in an element and a tag name string. E.g. getElementsByTagName(document.body, 'div').
Similar to Element.getElementsByTagName(), only descendants of the element argument are searched, not the element itself.
Return an array of Elements, instead of an HTMLCollection of Elements.
Do not use document.querySelectorAll() which will otherwise make the problem trivial.
*/

/**
 * @param {Element} el
 * @param {string} tagName
 * @return {Array<Element>}
 */
export default function getElementsByTagName(el, tagName) {
  let elements = [];
  const searchTagName = tagName.toUpperCase();

  function dfs(element) {
    if (element === null || el === undefined) {
      return;
    }

    if (element.tagName === searchTagName) {
      elements.push(element);
    }

    for (const child of element.children){
      dfs(child);
    }
  }

  for (const child of el.children) {
    dfs(child);
  }
  return elements;
}
