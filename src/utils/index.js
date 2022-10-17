const PrimitiveRE = /^\[object (Number|BigInt|Boolean|String|Null|Undefined|Symbol|Function)\]$/;
const CtrRE = /^\[object (Date|RegExp|Error)\]$/;

export function cloneDeep(obj, memory = new WeakMap()) {
  let target;

  // if (!memory) memory = new WeakMap();

  const type = Object.prototype.toString.call(obj);

  if (PrimitiveRE.test(type)) {
    target = obj;
  } else if (CtrRE.test(type)) {
    target = new obj.constructor(obj);
  } else if (type === '[object Array]') {
    target = [];
    for (const value of obj) target.push(cloneDeep(value, memory));
  } else if (type === '[object Set]') {
    target = new Set();
    for (const value of obj) target.add(cloneDeep(value, memory));
  } else if (type === '[object Map]') {
    target = new Map();
    for (const [key, value] of obj) target.set(key, cloneDeep(value, memory));
  } else {
    if (memory.has(obj)) {
      target = memory.get(obj);
    } else {
      target = Object.create(null);
      memory.set(obj, target);
      for (let key in obj) target[key] = cloneDeep(obj[key], memory);
    }
  }

  return target;
}

export function once(func) {
  let once = true;

  return () => {
    if (!once) return;
    once = false;

    if (typeof func === 'function') func();
  };
}

export function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
