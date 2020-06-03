function matchElement(element, selector) {
  if (selector === '*') {
    return true;
  }
  let selectors = selector.match(/^(\w+)|(\.\w+)|(#\w+)|(\[.+\])/g) || [];
  let classNameSet = new Set(
    element.getAttribute('class')
      ? element.getAttribute('class').trim().replace(/\s+/, ' ').split(' ')
      : [],
  );
  for (let index = 0; index < selectors.length; index++) {
    const selector = selectors[index];

    if (selector.startsWith('#')) {
      if (
        !(selector.substr(1, selector.length) === element.getAttribute('id'))
      ) {
        return false;
      }
    } else if (selector.startsWith('.')) {
      if (!classNameSet.has(selector.substr(1, selector.length))) {
        return false;
      }
    } else if (selector.startsWith('[')) {
      if (selector.match('=')) {
        const matchedAttr = selector.match(/\[(.+)=\"(.+)\"\]/) || [];

        if (element.getAttribute(matchedAttr[1]) !== matchedAttr[2]) {
          return false;
        }
      } else {
        const matchedAttr = selector.match(/\[(.+)\]/) || [];

        if (typeof element.getAttribute(matchedAttr[1]) !== 'string') {
          return false;
        }
      }
    } else {
      if (!(selector === element.tagName.toLocaleLowerCase())) {
        return false;
      }
    }
  }
  return true;
}

function recursionElement(element, selectorArr, selectorIndex) {
  if (selectorArr[selectorIndex] === '>') {
    let isMatchedParent = matchElement(element, selectorArr[++selectorIndex]);
    if (!isMatchedParent) {
      return false;
    }
    if (
      element.parentNode.nodeName === '#document' ||
      selectorIndex === selectorArr.length - 1
    ) {
      return isMatchedParent;
    }
    return recursionElement(element.parentNode, selectorArr, ++selectorIndex);
  }
  const isMatched = matchElement(element, selectorArr[selectorIndex]);
  if (!selectorIndex && !isMatched) {
    return false;
  }
  if (element.parentNode.nodeName === '#document') {
    return isMatched;
  }
  if (isMatched) {
    if (selectorIndex === selectorArr.length - 1) {
      return isMatched;
    }
    return recursionElement(element.parentNode, selectorArr, ++selectorIndex);
  }
  return recursionElement(element.parentNode, selectorArr, selectorIndex);
}

function match(selector, element, realResult) {
  const selectorArr = selector.split(' ').reverse();
  const result = recursionElement(element, selectorArr, 0);
  console.log(
    realResult === result ? '测试OK' : '测试Fail',
    selector,
    element,
    result,
  );

  return result;
}