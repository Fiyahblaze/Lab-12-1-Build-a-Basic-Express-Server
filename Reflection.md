# Reflection

## 1. What is the difference between `res.send()` and `res.sendFile()`?

`res.send()` sends content directly to the browser, such as text, HTML, or data. `res.sendFile()` sends an entire file from the server. I would use `res.send()` for a short response and `res.sendFile()` when I need to display a complete HTML page.

## 2. Why is the `path` module necessary when serving files?

The `path` module helps create the correct absolute path to a file. Using `path.join()` makes sure the server can find the file regardless of the operating system or the directory where the command was started. A relative path like `public/index.html` may not work if Node is started from a different location.

## 3. How would you add a third page?

To add a menu page, I would create `menu.html` inside the `public` folder. Then I would add a new `/menu` route in `server.js` and use `res.sendFile()` with `path.join()` to serve the file. I would also add a menu link to the navigation.