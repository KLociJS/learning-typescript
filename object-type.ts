// Inferred type: { born: number, name: string }
const poet = {
  born: 1935,
  name: "Mary Oliver",
};

// Explicit type
let poetLater: {
  born: number;
  name: string;
};

poetLater = {
  born: 1935,
  name: "Mary Oliver",
};

// Type alias
type Poet = {
  born: number;
  name: string;
};

const poetAgain: Poet = {
  born: 1935,
  name: "Mary Oliver",
};

// Structurally typed, if it has the same structure, its assignable
// Types can be assigned to existing types if they have the same structure even with excess properties
const poetYetAgain = {
  born: 1935,
  name: "Mary Oliver",
  died: 2019,
};

let poetAgain2: Poet = poetYetAgain;

// Excess property not present in poetAgain2
poetAgain2.born;
poetAgain2.name;

// Excess property present in poetAgain2 after property check
if ("died" in poetAgain2) {
  poetAgain2.died;
}

// Nested objects

type PoetWithAddress = {
  born: number;
  name: string;
  address: {
    city: string;
    state: string;
  };
};

const poetWithAddress: PoetWithAddress = {
  born: 1935,
  name: "Mary Oliver",
  address: {
    city: "Maple Heights",
    state: "Ohio",
  },
};

// Extracting nested properties

type Name = {
  first: string;
  last: string;
};

type PoetWithFirstAndLastName = {
  born: number;
  name: Name;
};

const poetWithFirstAndLastName: PoetWithFirstAndLastName = {
  born: 1935,
  name: {
    first: "Mary",
    last: "Oliver",
  },
};

// Optional properties
// Optional properties are properties that may or may not be present
// Difference between undefined and optional properties is that optional properties are not required to be present

type PoetWithOptionalAddress = {
  born: number;
  name: string;
  address?: {
    city: string;
    state: string;
  };
};

const poetWithOptionalAddress: PoetWithOptionalAddress = {
  born: 1935,
  name: "Mary Oliver",
};

// Optional chaining
poetWithOptionalAddress.address?.city; // undefined | string
poetWithOptionalAddress.address; // undefined

// Object type union
// Object type union is a union of object types

//Inferred object union type

const poem =
  Math.random() > 0.5
    ? { name: "The Double Image", pages: 7 }
    : { name: "Her Kind", rhymes: true };

poem.name; // string
poem.pages?.toFixed(); // number | undefined
poem.rhymes?.valueOf(); // boolean | undefined

// Explicit object union type

type poemLater =
  | { name: string; rhymes: boolean; pages?: number }
  | { name: string; pages: number; rhymes?: boolean };

const poemLater: poemLater =
  Math.random() > 0.5
    ? { name: "The Double Image", rhymes: true }
    : { pages: 7, name: "Her Kind" };

poemLater.name; // string | undefined
poemLater.pages?.toFixed(); // number | undefined
poemLater.rhymes?.valueOf(); // boolean | undefined

// Intersection types
// Intersection types are types that are a combination of two or more types
// Both types must be satisfied

type Artwork = {
  genre: string;
  name: string;
};

type Writing = {
  pages: number;
  name: string;
};

type WrittenArt = Artwork & Writing;

const writtenArt: WrittenArt = {
  genre: "poetry",
  name: "The Double Image",
  pages: 7,
};
