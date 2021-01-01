Function.prototype.myApply = function (content, arr) {
  if (typeof this !== 'function') {
    throw new Error();
  }

  const type = typeof content;

  if (content === null || content === undefined) {
    content = window;
  } else if (type === 'number') {
    content = new Number(content);
  } else if (type === 'string') {
    content = new String(content);
  } else if (type === 'boolean') {
    content = new Boolean(content);
  } else if (type === 'symbol') {
    console.error("can't symbol");
    return;
  } else {
    // todo 其他类型（bigint）
  }

  // 如果不能使用symbol，可用其他方法生成一个唯一key，并判断不在传入content中
  const uuid = Symbol();

  content[uuid] = this;

  const result = content[uuid](...(arr || []));

  delete content[uuid];

  return result;
};
