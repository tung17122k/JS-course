// Viet 1 function kiem tra dau vao co phai object hay ko
function isObject(value) {
  if (typeof value === "object" && !Array.isArray(value) && value !== null) {
    return true;
  }
  return false;
}
console.log(isObject({}));
// 2.  { a: 1, b: 2} -> [["a",1],["b", 2]]
function objectToArray(object) {
  // check neu k phai obj thi dung
  if (!isObject(object)) return;
  // neu la obj thi xu ly
  // return Object.entries(object);
  // [a,b]
  //object[key]
  // const values = Object.keys(object).map((key) => [key, object[key]]);
  // return values;
  let result = [];
  for (let key in object) {
    // hasOwnProperty(key) - > neu object chua key tra ve true nguoc lai tra ve false
    if (object.hasOwnProperty(key)) {
      result.push([key, object[key]]);
    }
  }
  return result;
}
console.log(objectToArray({ a: 1, b: 2 }));

// 3. without ({a: 1, b : 2} ,'b') => {a: 1}
function without(object, ...key) {
  const newObject = { ...object };
  key.forEach((item) => {
    delete object[item];
  });
  return object;
  // key.forEach(item);
  // delete object[key];
  // return object;
}
console.log(without({ a: 1, b: 2 }, "b"));

// 4. {a: 1, b: 2}, {a: 1, b: 2} -> true
// 4. {a: 1, b: 2}, {a: 1, b: 2, c: 3} -> false
function isEqualObject(obj1, obj2) {
  // check keys length of two objects
  const objkey1 = Object.keys(obj1);
  const objkey2 = Object.keys(obj2);
  if (objkey1.length !== objkey2.length) return false;
  // check values of two object
  //  [a, b] -> object[a] || object[b]
  const result = objkey1.every((key) => obj1[key] === obj2[key]);
  return result;
}
console.log(isEqualObject({ a: 1 }, { a: 1, b: 2 }));
