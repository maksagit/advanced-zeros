module.exports = function getZerosCount(number, base) {

  var zeroCount = number;

  for (var i = 2; i <= base; i++) {
    if (base % i == 0) {
      var pow = 0;

      while (base % i == 0) {
        pow++;
        base = Math.floor(base/i)
      }

      var c = 0;
      var x = number;

      while (x/i > 0) {
        c += Math.floor(x/i);
        x = Math.floor(x/i);
      }

      zeroCount = Math.min(zeroCount, Math.floor(c/pow));
    }
  }

  return zeroCount;
}