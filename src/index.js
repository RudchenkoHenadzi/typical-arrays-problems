
exports.min = function min (array) {

  function minSortArr(a, b) {
    return a - b;
  }

  if(array === undefined || array.length === 0) {
    return 0;
  } else {
      let minValue = array.sort(minSortArr);
      return array[0];
  }

}

exports.max = function max (array) {

  function maxSortArr(a, b) {
    return a - b;
  }

  if(array === undefined || array.length === 0) {
    return 0;
  } else {
    let maxValue = array.sort(maxSortArr);
    return array[array.length -1];
  }

}

exports.avg = function avg (array) {
  let sumArr = 0;

    if(array === undefined || array.length === 0) {
      return 0;
    } else {

    for(let i = 0; i < array.length; i++) {
        sumArr = sumArr + array[i];
    }

    return sumArr / array.length;
    }
}
