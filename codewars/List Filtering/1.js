function filter_list(l) {
    if(l === null) return 0;
  //   return l.filter(function(n) {return  typeof n == 'number'});
    return l.filter( n => typeof n == 'number');
}