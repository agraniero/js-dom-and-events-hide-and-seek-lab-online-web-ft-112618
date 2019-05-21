function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const lists = document.querySelectorAll('.ranked-list');
  for (let counter = 0, l = lists.length; counter < l; counter++){
    let kids = lists[counter].children;
    for (let i = 0, x = kids.length; i < x; i++){
      kids[i].innerHTML = parseInt(kids[i].innerHTML) + n;
    }
  }
}

function deepestChild(){
  let n = document.getElementById('grand-node');
  let nextN = n.children[0];
  while (nextN){
    n = nextN;
    nextN = n.children[0]
  }
  return n
}