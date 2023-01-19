async function getBooks() {
  const res = await fetch('http://localhost:5500/book');
  return await res.json();
}

getBooks().then(console.log);
