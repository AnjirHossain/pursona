// NEEDS TO BE ENTIRELY DYNAMIC AND WELL TESTED

/*
  for (length of pieces)
    replace the next occurrance of placeholder with current piece
*/

function construct(base, pieces) {
  // look for a map/reduce sol || verify that forEach is higher order
  pieces.forEach((piece) => {
    base = base.replace('placeholder', piece);
  });
  return base.split(' ').join('+');
}

export default construct;
