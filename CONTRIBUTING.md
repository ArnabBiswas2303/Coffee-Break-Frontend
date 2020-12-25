# Contribution Guidelines

Coffee Break Frontend is an open source project, and contributions of any kind are welcome and appreciated.

## Pull Requests

Inorder to create a pull request follow the steps given below.

1. Fork the Project
2. Create your Branch (git checkout -b Component)
3. Commit your Changes (git commit -m 'Add Component')
4. Push to the Branch (git push origin Component)
5. Open a Pull Request

## Folder Structure

While making new components follow the below folder structure.

```bash
  ├── src/
  │   ├── Components/
  │     ├── Outter Component/
  │       ├── Inner Component/
```

## Styleguide

Coding conventions are enforced by [ESLint](.eslintrc.js) and [Prettier](.prettierrc).

- Double quotes
- One Tab or Two space indentation
- No Trailing commas in arrays and objects
- React: functional style with Hooks (no classes)
- `const` preferred over `let`
