interface Book {
    title: string;
    subtitle?: string | null;
    author: string;
    yearPublished: number;
    tags: string[];

}


const demoBooks: Book[] = [
    {
        title: "Beyond Good and Evil",
        subtitle: "Prelude to a Philosophy of the Future",
        author: "Friedrich Nietzsche",
        yearPublished: 1886,
        tags: ['inProgress', 'saved']
    },
    {
        title: "12 Rules for Life",
        subtitle: "An antidote to chaos",
        author: "Jordan B. Peterson",
        yearPublished: 2018,
        tags: ['saved']
    },
    {
        title: "Chaos",
        subtitle: "Making a new science",
        author: "James GLeick",
        yearPublished: 1987,
        tags: ['inProgress']
    },
    {
        title: "A Brief History of Time",
        subtitle: null,
        author: "Stephen W. Hawking",
        yearPublished: 1988,
        tags: ['read'] 
    },
    {
        title: "Crime and Punishment",
        subtitle: null,
        author: "Fyodor Dostoevsky",
        yearPublished: 1866,
        tags: ['saved']
    },
    {
        title: "The Interpretation of Dreams",
        subtitle: null,
        author: "Sigmund Freud",
        yearPublished: 1899,
        tags: ['inProgress', 'saved']
    },
    {
        title: "Man and his Symbols",
        subtitle: null,
        author: "Carl G. Jung",
        yearPublished: 1964,
        tags: ['inProgress']
    },
    {
        title: "A little History of Economics",
        subtitle: null,
        author: "Niall Kishtainy",
        yearPublished: 2017,
        tags: ['inProgress']
    },
    {
        title: "Elon Musk, Tesla, SpaceX",
        subtitle: "and the quest for a fantastic future",
        author: "Ashlee Vance",
        yearPublished: 2015,
        tags: ['read']
    },
    {
        title: "Albert Einstein: And the Frontiers of Physics",
        author: "Jeremy Berstein",
        yearPublished: 1996,
        tags: ['inProgress']
    },
    {
        title: "Ecce Homo",
        author: "Friedrich Nietzsche",
        yearPublished: 1906,
        tags: ['saved']
    },
    {
        title: "The science of Rick and Morty ",
        subtitle: "The unofficial guide to eath's stupidest show",
        author: "Matt Brady",
        yearPublished: 2019,
        tags: ['read']
    },
    
];

export default demoBooks;