# HTML and CSS Documentation

## Introduction
HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are the fundamental technologies for building web pages. HTML provides the structure of a webpage, while CSS controls its visual appearance and layout.

---

## HTML: Structure of Web Pages

### Basic Structure of an HTML Document
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Webpage</title>
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>
```

### Common HTML Elements
- **Headings**: `<h1>` to `<h6>`
- **Paragraph**: `<p>`
- **Links**: `<a href="URL">Text</a>`
- **Images**: `<img src="image.jpg" alt="description">`
- **Lists**:
  - Unordered: `<ul><li>Item</li></ul>`
  - Ordered: `<ol><li>Item</li></ol>`
- **Tables**: `<table><tr><td>Cell</td></tr></table>`
- **Forms**: `<form><input type="text"></form>`

---

## CSS: Styling Web Pages

### Basic CSS Syntax
```css
selector {
    property: value;
}
```

### Applying CSS to HTML
1. **Inline CSS** (within an HTML tag)
   ```html
   <p style="color: blue;">This text is blue.</p>
   ```
2. **Internal CSS** (inside a `<style>` block in the HTML `<head>`)
   ```html
   <style>
       p { color: red; }
   </style>
   ```
3. **External CSS** (separate `.css` file)
   ```css
   p {
       color: green;
   }
   ```
   Linked in HTML as:
   ```html
   <link rel="stylesheet" href="styles.css">
   ```

### CSS Selectors
- **Element Selector**: `p { color: blue; }`
- **Class Selector**: `.myClass { font-size: 20px; }`
- **ID Selector**: `#myId { background-color: yellow; }`
- **Group Selector**: `h1, h2, h3 { text-align: center; }`
- **Descendant Selector**: `div p { color: purple; }`

### CSS Box Model
The box model consists of:
- **Margin**: Space outside the element
- **Border**: Surrounds the padding and content
- **Padding**: Space between the content and the border
- **Content**: The actual text or image

Example:
```css
div {
    margin: 10px;
    border: 2px solid black;
    padding: 15px;
    width: 200px;
}
```

### CSS Flexbox (For Layouts)
```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### CSS Grid (For Layouts)
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
}
```

---

## Conclusion
HTML and CSS are the core building blocks of web development. While HTML structures the content, CSS enhances the visual appeal, making websites more user-friendly and responsive.

