// console.log('module.js')

async function start() {
  // const header = document.createElement('div')
  // header.innerHTML = 'header'
  // console.log(header)
  // document.body.append(header)
  return await Promise.resolve('async working!')
}

start().then(console.log)