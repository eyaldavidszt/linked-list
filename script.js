function nodeMaker(data, next) {
  const node = { data, next };
  return node;
}

function linkedListMaker(array, n = 0) {
  function listConstructor(array, n = 0) {
    //base case:
    if (n == array.length - 1) {
      return nodeMaker(array[n], null);
    }
    //recursive case:
    return nodeMaker(array[n], listConstructor(array, (n += 1)));
  }
  const obj = listConstructor(array);

  // methods
  function prepender(object) {
    return {
      prepend: (item) => {
        object.next = nodeMaker(object.data, object.next);
        object.data = item;
      },
    };
  }
  function appender(object) {
    return {
      append: (item) => {
        let cur = object;
        while (cur.next !== null) {
          cur = cur.next;
        }
        cur.next = nodeMaker(item, null);
      },
    };
  }

  function sizer(object) {
    return {
      size: () => {
        // while next !== null
        let tmp = object;
        let count = 0;
        while (tmp !== null) {
          tmp = tmp.next;
          count += 1;
        }
        return count;
      },
    };
  }
  function header(object) {
    return {
      head: () => {
        return { data: object.data, next: object.next };
      },
    };
  }

  function tailer(object) {
    return {
      tail: () => {
        let cur = object;
        while (cur.next !== null) {
          cur = cur.next;
        }
        return cur;
      },
    };
  }
  function indexer(object) {
    return {
      at: (index) => {
        let count = 0;
        let cur = object;
        while (count < index) {
          try {
            cur = cur.next;
          } catch {
            return null;
          }
          count += 1;
        }
        if (cur) {
          return { data: cur.data, next: cur.next };
        } else return null;
      },
    };
  }
  function popper(object) {
    return {
      pop: () => {
        let cur = object;
        let prev = cur;
        while (cur.next !== null) {
          prev = cur;
          cur = cur.next;
        }
        prev.next = null;
      },
    };
  }
  function container(object) {
    return {
      contains: (value) => {
        let cur = object;
        while (cur != null) {
          if (cur.data == value) {
            return true;
          } else {
            cur = cur.next;
          }
        }
        return false;
      },
    };
  }
  function finder(object) {
    return {
      find: (value) => {
        let cur = object;
        let count = 0;
        while (cur != null) {
          if (cur.data == value) {
            return count;
          } else {
            cur = cur.next;
          }
          count += 1;
        }
      },
    };
  }
  function toStringer(object) {
    return {
      toString: () => {
        let cur = object;
        let string = "";
        while (cur != null) {
          string += `( ${cur.data} ) -> `;
          cur = cur.next;
        }
        console.log(string);
      },
    };
  }

  return Object.assign(
    obj,
    prepender(obj),
    appender(obj),
    sizer(obj),
    header(obj),
    tailer(obj),
    popper(obj),
    indexer(obj),
    container(obj),
    finder(obj),
    toStringer(obj)
  );
}

const myList = linkedListMaker(["A", "B", "C"]);
myList.prepend("before A");
myList.append("after C");
myList.pop();
console.log(myList.contains("D"));
myList.append("D");
console.log(myList.find("B"));
myList.toString();
myList.append("E");
myList.toString();
myList.prepend("before before A");
myList.toString();
