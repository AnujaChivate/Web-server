import url from 'url'

const myUrl = new URL('http://www.mywebsite.com:8000/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

// Host (root domain)
console.log(`Host: ${myUrl.host}`)

// Hostname (does not get port)
console.log(`Hostname: ${myUrl.hostname}`)

// Pathname
console.log(`Pathname: ${myUrl.pathname}`)

// Serialized query
console.log(`Query: ${myUrl.search}`)

// Params object
console.log(myUrl.searchParams)

// Add custom params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

// Loop through params
myUrl.searchParams.forEach((value, name) => {
    console.log(`${name}: ${value}`)
})

