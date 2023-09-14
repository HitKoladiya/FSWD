public_users.get("/title/:title", function (req, res) {
  //Write your code here
  const title = req.params.title.toLowerCase();
  const filteredBooks = Object.values(books).filter((book) => {
    book.title.toLowerCase().includes(title);
  });
  if (filteredBooks.length > 0) {
    res.status(404).json({ message: "Book not found" });
  } else {
    res.status(200).json(filteredBooks);
  }
});
