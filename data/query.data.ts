export default {
  tutorial: {
    where: [{
      _path: /^\/tutorial/,
      draft: false,
    }],
  },
  post: {
    where: [{
      _path: /^\/blog/,
      draft: false,
    }],
  },
};
