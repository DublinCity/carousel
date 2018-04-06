export default (...fns) => data =>
  fns.reduce((composed, fn) => fn(composed), data);
