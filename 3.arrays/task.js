function compareArrays(arr1, arr2) {
    let compare = arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
    return compare;
  };

  function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).reduce((acc, item, i, arr) => {
        acc+=item.age;
        if (i === arr.length - 1){
            return (acc / arr.length);
        }
        return acc;
    }, 0);
    return result;
};


  
  