interface Book {
  title: string;
  subtitle?: string | null;
  author: string;
  yearPublished: number;
  tag: string;
}

const demoBooks: Book[] = [
  {
    title: "Beyond Good and Evil",
    subtitle: "Prelude to a Philosophy of the Future",
    author: "Friedrich Nietzsche",
    yearPublished: 1886,
    tag: "saved",
  },
  {
    title: "12 Rules for Life",
    subtitle: "An antidote to chaos",
    author: "Jordan B. Peterson",
    yearPublished: 2018,
    tag: "saved",
  },
  {
    title: "Chaos",
    subtitle: "Making a new science",
    author: "James GLeick",
    yearPublished: 1987,
    tag: "inProgress",
  },
  {
    title: "A Brief History of Time",
    subtitle: null,
    author: "Stephen W. Hawking",
    yearPublished: 1988,
    tag: "read",
  },
  {
    title: "Crime and Punishment",
    subtitle: null,
    author: "Fyodor Dostoevsky",
    yearPublished: 1866,
    tag: "saved",
  },
  {
    title: "The Interpretation of Dreams",
    subtitle: null,
    author: "Sigmund Freud",
    yearPublished: 1899,
    tag: "inProgress",
  },
  {
    title: "Man and his Symbols",
    subtitle: null,
    author: "Carl G. Jung",
    yearPublished: 1964,
    tag: "inProgress",
  },
  {
    title: "A little History of Economics",
    subtitle: null,
    author: "Niall Kishtainy",
    yearPublished: 2017,
    tag: "inProgress",
  },
  {
    title: "Elon Musk, Tesla, SpaceX",
    subtitle: "and the quest for a fantastic future",
    author: "Ashlee Vance",
    yearPublished: 2015,
    tag: "read",
  },
  {
    title: "Albert Einstein: And the Frontiers of Physics",
    author: "Jeremy Berstein",
    yearPublished: 1996,
    tag: "inProgress",
  },
  {
    title: "Ecce Homo",
    subtitle: "How One Becomes What One Is",
    author: "Friedrich Nietzsche",
    yearPublished: 1906,
    tag: "saved",
  },
  {
    title: "The science of Rick and Morty ",
    subtitle: "The unofficial guide to eath's stupidest show",
    author: "Matt Brady",
    yearPublished: 2019,
    tag: "read",
  },
];

export default demoBooks;
