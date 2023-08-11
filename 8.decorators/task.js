function cachingDecoratorNew(func) {
    let cache = {}

    return (...args) => {
        const hash = md5(args);
        if (hash in cache) {
        return 'Из кэша: ' + cache[hash];
      }

      const result = func(...args);
      if (Object.keys(cache).length > 4) {
        cache[hash] = result;
        let extraElem = Object.keys(cache)[0];
        delete cache[extraElem];
        return 'Вычисляем: ' + result;
      }
      cache[hash] = result;
      return 'Вычисляем: ' + result;
    }
  }
  

function debounceDecoratorNew(func, delay) {
  let timerID= null;
  function wrapper(... args){
    if(!timerID){
        func(...args);
        wrapper.count++;
    }

    wrapper.allCount++;

    clearTimeout(timerID);
    timerID = setTimeout(() => {
        func(...args);
        wrapper.count++;
    }, delay)
  }
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}