const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('yes, it is resolved')
  }, 4000)
})

const prom = Promise.resolve('success').then(value => {
  console.log(value)
})

const prom1 = Promise.reject()

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/todo',
  'https://jsonplaceholder.typicode.com/photos',
  'https://jsonplaceholder.typicode.com/albums'
]

// Promises
Promise.all(
  urls.map(url => {
    return fetch(url).then(res => res.json())
  })
)
  .then(res1 => {
    console.log(res1)
  })
  .catch(err => console.log('ughhhh fix it!', err))

async function fetchUsers () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data)
}

const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/albums'
]

// asyn await
async function getUsers () {
  try {
    const [users, todos, albums] = await Promise.all(
      urls.map(url => {
        return fetch(url).then(resp => resp.json())
      })
    )
    console.log(users[0])
    console.log(todos[0])
    console.log(albums[0])
  } catch (err) {
    console.log('ooops!', err)
  }
}

// for await of
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/todos',
  'https://jsonplaceholder.typicode.com/albums'
]

async function getUsers2 () {
  try {
    const arrayofurls = urls.map(url => fetch(url)) // --> fetch is a promise to array of urls receives a promise and we can use await with it then
    for await (let request of arrayofurls) {
      const data = await request.json()
      console.log(data)
    }
  } catch (err) {
    console.log('ooops!', err)
  }
}
