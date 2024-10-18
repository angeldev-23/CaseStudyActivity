<!DOCTYPE html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Library Management</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <!-- Header with Logo and Title -->
    <header>
        <img src="logo.jpg" alt="PnC Library Logo">
        <h1>University of Cabuyao</h1>
    </header>

    <div class="container">
        <h2>PnC eLibrary</h2>

        <!-- Add or Edit Book Form -->
        <div class="form-section">
            <h3 id="formTitle">Add New Book</h3>
            <form id="addBookForm" method="POST">
                <input type="text" name="title" placeholder="Title" required>
                <input type="text" name="author" placeholder="Author" required>
                <input type="number" name="publication_year" placeholder="Publication Year" required>
                <input type="text" name="genre" placeholder="Genre" required>
                <input type="hidden" name="id" id="bookId">
                <button type="submit" id="formButton">Add Book</button>
            </form>
        </div>

        <!-- Book List -->
        <div class="book-list">
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publication Year</th>
                        <th>Genre</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="bookList"></tbody>
            </table>
        </div>
    </div>

    <!-- Landscape Contact Page Image -->
    <img src="contact_img.png" alt="Contact Image" class="contact-image">

    <script>
        let books = [];
        let nextId = 1;

       
        $('#addBookForm').submit(function(event) {
            event.preventDefault();
            const title = $('input[name="title"]').val();
            const author = $('input[name="author"]').val();
            const publicationYear = $('input[name="publication_year"]').val();
            const genre = $('input[name="genre"]').val();

            const book = {
                id: nextId++,
                title,
                author,
                publicationYear,
                genre
            };
            books.push(book);
            updateBookList();
            this.reset();
        });

        function updateBookList() {
            const bookList = $('#bookList');
            bookList.empty(); // Clear previous content

            books.forEach((book) => {
                const row = `
                    <tr>
                        <td>${book.id}</td>
                        <td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.publicationYear}</td>
                        <td>${book.genre}</td>
                        <td>
                            <button class="deleteButton" data-id="${book.id}">Delete</button>
                        </td>
                    </tr>
                `;
                bookList.append(row);
            });

            $('.deleteButton').click(function() {
                const bookId = $(this).data('id');
                deleteBook(bookId);
            });
        }

        function deleteBook(id) {
            books = books.filter(book => book.id !== id);
            updateBookList();
        }
    </script>
</body>
</html>
