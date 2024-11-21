// 1.parentNode, parentElement, removeChild
const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentElement);
// selector.parentNode hoac selector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);

// 2. nextElementSibling vs previousElementSibling

const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previousLink = span.previousSibling;
console.log(previousLink);
// 3. chillNode : tra ve 1 mang cac Node ben trong bao gom textNode vs children: tra ve cac Node ko bao gom textNode
console.log(span.childNodes); // text strong text
console.log(span.children);

// 4. firstChild vs firstElementChild
console.log(span.firstChild); //text
console.log(span.firstElementChild); // strong

// 5. lastChild vs lastElementChild
console.log(span.lastChild); //text
console.log(span.lastElementChild); // strong

// 6. nextSibling vs previousSibling
console.log(span.nextSibling);
console.log(span.previousSibling);
