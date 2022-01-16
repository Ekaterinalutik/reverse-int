module.exports = function reverse (n) {
    var number = Math.abs(n);
    var nnum = number.toString();
    var nStr = "";
  for (var i=nnum.length-1; i >=0;i --) { 
    nStr += nnum[i]}
    return nStr;
}

