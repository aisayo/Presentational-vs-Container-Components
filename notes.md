# Presentational vs Container Components :art:

`Per Dan Abramov: "I suggest you to start building your app with just presentational components first. Eventually you’ll realize that you are passing too many props down the intermediate components. When you notice that some components don’t use the props they receive but merely forward them down and you have to rewire all those intermediate components any time the children need more data, it’s a good time to introduce some container components."`

- Not a requirement to follow this pattern, just a common pattern for application organization

____________________________________________________________________________

## Container Components

- Concerned with how things work
- Class components can contain state and lifecycle methods
- `render()` required
- Goes through a series of lifecycle checks
- Responsible for data-fetching and rendering its subcomponents
- i.e. `Brews`(container) renders `BrewsList`(presentational)
- Typically a parent component


### Benefits of Containers?

- Separation of concerns => data-fetching/rendering separated
- Allows for other render responsible components to be reusable
- Better error catching

____________________________________________________________________________

## Pure Components

- Similar to class components with one slight difference: No shouldComponentUpdate lifecycle method
- Automatically performs a shallow comparison of old and new props/state
- Use `PureComponent` when defining component instead of `Component`
- Pure means, when given same props/state, it should always behave the same way
- Allows for unnecessary updates to be avoided  

____________________________________________________________________________

## Presentational Components

- Concerned with how things look
- Receive data via props or callbacks
- Written as functional components
- Only need a `return`, no `render()`
- `props` must be passed in as an argument
- 'Simple, lightweight components'
- Update based on props or parent component re-renders
- Can not alter data

### Good candidates for Presentational components 