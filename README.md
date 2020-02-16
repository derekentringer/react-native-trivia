## react-native-trivia

## state management
[reactn](https://github.com/CharlesStover/reactn#readme) was used as the state management system. ReactN provides the same state management system as Redux with a lot less boilerplate.

## navigation solution
I choose to use [React Navigation](https://github.com/react-navigation/react-navigation#readme) for the routing and navigation. React Navigation is a good standard for handling routing imho. Further work could be done in order to hook ReactN state management into the routing system which would allow me to get rid of the direct calls to `this.props.navigation` during routing.

## project organization
The trivia game file structure is broken down by feature.

## API
The api dir contains both a `Constants` class that defines the `baseUrl` for the api as well as a `Questions` class that wraps `fetch`. This could be futher abstracted to a single fetch call used by `Questions.get` as the game would scale.

## componentization
### `AnswerButton`
The `True` and `False` UI used in the quiz screen were setup as the `AnswerButton` component to share the functionality used to increment the quiz questions as well as the record the answers to those questions for use in the `ResultsScreen`.

### `TriviaButton`
The `TriviaButton` componentizes the buttons not using ReactN thoughout the application.

## enhancements
Because of the use of `setGlobal` in the initialization of state, a `SettingsScreen` could be created to allow users to choose their difficulty level, number of questions, and question types. During a `setGlobal` call, settings saved in local storage could be checked and used, with defaults to fall back on if the user has not changed the settings.

The UI/UX could be drastically improved.

## time spent on development
3.5hrs

## screenshots
![screen1](https://i.ibb.co/5ngzXzy/Screen-Shot-2019-06-14-at-6-23-10-PM.png "screenshot")
![screen2](https://i.ibb.co/JzSSNd6/Screen-Shot-2019-06-14-at-6-23-31-PM.png "screenshot")
![screen3](https://i.ibb.co/BGntMBZ/Screen-Shot-2019-06-14-at-6-23-57-PM.png "screenshot")
![screen4](https://i.ibb.co/nb48TKJ/Screen-Shot-2019-06-14-at-6-24-48-PM.png "screenshot")