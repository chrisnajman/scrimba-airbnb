# Scrimba / AirBnb

A simple Scrimba React project, practising passing `props` from a parent to a child component.

---

## Scrimba Course Link

- [Build an AirBnb Experiences clone](https://scrimba.com/playlist/pqQgrcN)

> [!NOTE]
> (Free) subscription and login required to follow the course.

---

## Figma Design Link

- [AirBnb Experiences](https://www.figma.com/file/4YjrygFEXOcDp9AAnVFv7o/Airbnb-Experiences?type=design&node-id=2-2&mode=design&t=7jEF9WdeSe4zPuP0-0)

> [!NOTE]
> (Free) subscription and login required to view the file.

---

## Dynamic Image Paths

For dynamic image paths, store the images in the `/public/` folder. You can put them in a sub-folder, in this case `cards/`.

### `cardData.js`

This contains an array of objects, mimicking a `JSON` file:

```JavaScript
export default = [
  {
    // Other key/value pairs
    coverImg: "katie-zaferes.png",
    // Other key/value pairs
  },
  // More objects...
]
```

### `Card.jsx`

```jsx
import cardData from "../cardData"

function Cards() {
  const cards = cardData.map((card) => {
    return (
      <Card
        key={card.id}
        card={card}
      />
    )
  })

  return (
    // Other JSX
    <ul id="card-list">{cards}</ul>
    // Other JSX
  )
}
```

### `Card.jsx`

In `Card.jsx`, I've set the path to the image from `coverImg` as follows:

```jsx
function Card({ card }) {
  // Other ode

  return (
    // Other JSX
    // <img
      src={`/scrimba-airbnb/cards/${card.coverImg}`}
      // Other props and attributes
    // />
    // Other JSX
  )
}
```

### The `/public/` Folder

The images are stored in `/public/cards`.

> [!WARNING]
> You must NOT include `'/public/'` in the file path, or the images won't display.

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

Page tested in both browser and device views.
