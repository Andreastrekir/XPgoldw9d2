//Exercise.
//Use Promise.all to fetch all the characters from the array above with only one request.
//Console.log the output and make sure it has a catch block as well.

const urls = [
  'https://swapi.dev/api/people/1',
  'https://swapi.dev/api/people/2',
  'https://swapi.dev/api/people/3',
  'https://swapi.dev/api/people/4'
];

const fetchData = async () => {
  try {
    const response = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    )
    console.log(response)
  } catch (error) {
    console.log("Error", error)
  }
}
fetchData()


























































