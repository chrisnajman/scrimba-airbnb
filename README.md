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

For dynamic images paths, store images in the `/public/` folder.

### `Cards.jsx`

In `Cards.jsx` I'm using an array of objects to mimic a `JSON` file.

The image name is associated with the `image` key.

```jsx
const cards = [
  {
    // Other key/value pairs
    image: "life-lessons.png",
    // Other key/value pairs
  },
  // More objects...
]
```

I'm using the `src` `prop` in the `<Card />` component to display the image:

```jsx
<Card
  // Other props
  src={card.image}
  // Other props
/>
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
