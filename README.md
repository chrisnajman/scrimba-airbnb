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
    image: "life-lessons.png",
    // Other key/value pairs
  },
  // More objects...
]
```

### `Cards.jsx`

In `Cards.jsx` I `map` the items in `cardData.js` to `const cards ...`:

- The image name is associated with the `image` key.
- I'm using the `src` `prop` in the `<Card />` component to display the image.

```jsx
import cardData from "./cardData"

const cards = cardData.map((card) => {
  return (
    <Card
      // Other props
      src={card.image}
      // Other props
    />
  )
})

return (
  <section
    className="cards"
    role="region"
    aria-labelledby="card-list"
    tabIndex="0"
  >
    <ul id="card-list">{cards}</ul>
  </section>
)
```

### `Card.jsx`

In `Card.jsx`, I've set the path to the image from `src` as follows:

```jsx
<img src={`/scrimba-airbnb/cards/${src}`} />
```

### The `/public/` Folder

The images are stored in `/public/cards`.

> [!WARNING]
> You must NOT include '/public/' in the file path, or the images won't display.

---

## Testing

Tested on Windows 10 with:

- Chrome
- Firefox
- Microsoft Edge

Page tested in both browser and device views.
