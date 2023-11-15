function findSmallestInt(args) {
  let sort = args.sort((a, b) => a - b);
  return sort[0];
}
