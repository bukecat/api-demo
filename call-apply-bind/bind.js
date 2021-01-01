Function.prototype.myBind = function (content) {
  if (typeof this !== 'function') {
    throw new Error('');
  }
  const _this = this;
  const params = [...arguments].slice(1);

  return function() {
    const theParams = [...arguments];
    return _this.myApply(content, params.concat(theParams));
    // return _this.apply(content, params.concat(theParams));
  };
}
