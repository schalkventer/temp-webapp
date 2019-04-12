# ResourceList

**⚠️ In order to view or edit this component run `yarn start:storybook` to open it in a sandbox environment.**

## `index.tsx`

This component contains a list of cards containing the following content:

- Heading
- Size and formats of a file (as subheadings)
- Link to a download button
- An additional call to action card if required

Custom styling added to Material UI components namely:

- Typography
- Card
- CardContent
- Button

```ts
/**
 * Array of strings that displays information on each resource card
 */
type Tresources = {
  heading: string;
  size: string | null;
  format: string;
  link: string;
};
```
