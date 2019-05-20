
const favBooks = [
    {
        title: 'The Great Gatsby',
        authors: ['F. Scott Fitzgerald', 'S. Fritz Scottgerald'],
        'number of pages': 189,
        'publish year': 1925,
        borrow: 'view-only',
        present: false
    },
    {
        title: "The Handmaid's Tale",
        authors: ['Margaret Atwood', 'Anette Margaret'],
        'number of pages': 254,
        'publish year': 1985,
        borrow: 'yes',
        present: true
    },
    {
        title: 'The Little Prince',
        authors: ['Antoine de Saint-Exupéry', 'Exuper de Saint-Antoine'],
        'number of pages': 303,
        'publish year': 1943,
        borrow: 'view-only',
        present: true
    }
]

const books = document.querySelector('.books');

const update = () => {

    books.innerHTML = '';

    for (i=0; i < favBooks.length; i++) {
        
        const bookItem = document.createElement('ul');

        bookItem.innerHTML = `<li>${favBooks[i].title}</li>
        <ul>
        <li>Authors:</li>
            <ul>
            <li>${favBooks[i].authors[0]}</li>
            <li>${favBooks[i].authors[1]}</li>
            </ul>
        </ul>
        <ul>
        <li>Number of pages:</li>
            <ul>
            <li>${favBooks[i]['number of pages']}</li>
            </ul>
        </ul>
        <ul>
        <li>Publish year:</li>
        <ul>
        <li>${favBooks[i]['publish year']}</li>
        </ul>
        </ul>
        <ul>
        <li>Can be borrowed:</li>
        <ul>
        <li>${favBooks[i].borrow}</li>
        </ul>
        </ul>
        <ul>
        <li>Present:</li>
        <ul>
        <li>${favBooks[i].present}</li>
        </ul>
        </ul>
        `
        bookItem.className = 'book-item';
    
        books.appendChild(bookItem);

    }
}

const addItem = () => {
    const bookTitle = document.querySelector('#title').value;
    const author1 = document.querySelector('#author1').value;
    const author2 = document.querySelector('#author2').value;
    const pages = document.querySelector('#pages').value;
    const year = document.querySelector('#year').value;
    const borrow = document.querySelector('#borrow').value;
    const present = document.querySelector('#present').value;
    
    let newBookItem = document.createElement('ul');

    newBookItem.innerHTML = `<li>${bookTitle}</li>
    <ul>
    <li>Authors:</li>
        <ul>
        <li>${author1}</li>
        <li>${author2}</li>
        </ul>
    </ul>
    <ul>
    <li>Number of pages:</li>
        <ul>
        <li>${pages}</li>
        </ul>
    </ul>
    <ul>
    <li>Publish year:</li>
    <ul>
    <li>${year}</li>
    </ul>
    </ul>
    <ul>
    <li>Can be borrowed:</li>
    <ul>
    <li>${borrow}</li>
    </ul>
    </ul>
    <ul>
    <li>Present:</li>
    <ul>
    <li>${present}</li>
    </ul>
    </ul>
    `

    newBookItem.className = 'book-item';
    
    books.appendChild(newBookItem);
}

document.addEventListener('DOMContentLoaded', () => {
    update();

    const button = document.querySelector('#button');

    button.addEventListener('click', () => {
        addItem();
    })
})





