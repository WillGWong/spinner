
let animation = ['|', '/','-','\\','|', '/','-','\\','|']

let spinner2 = function(animArr) {
  let timer = 0
  let newlineTimer = animArr.length

  for (let elem of animArr) {
    setTimeout(() => {
      process.stdout.write('\r' + elem + '     ');
    }, timer * 200)
    timer ++
  }
  setTimeout(() => {
    process.stdout.write('\n');
  }, newlineTimer * 200)
}

spinner2(animation)