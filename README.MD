# react-omit

This package lets you omit the second argument (props) when using `React.createElement()` instead of JSX.

It allows code like this:
```es6
import React from 'react'
import r from 'react-omit'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Home = () =>
  r(Grid,
    r(Row,
      r(Col, {xs: 6},
        r('h2', 'All Users'),
        r('ul', props.users.map((user, key) =>
          r('li', {key: key},
            r('b', 'Name: '),
            user.name,
            r('br'),
            r('b', 'Email: '),
            user.email
          )
        ))
      ),
      r(Col, {xs: 6},
        r('h2', 'All Projects'),
        r('ul', props.projects.map((project, key) =>
          r('li', {key: key},
            r('b', 'Title: '),
            project.title,
            r('br'),
            r('b', 'Owner: '),
            project.owner
          )
        ))
      )
    )
  )

export default Home
```

Or, using Coffeescript 2, allows you to write without closing tags, which looks very much like HAML or jade / pug:
```coffee
import React from 'react'
import r from 'react-omit'
import { Grid, Row, Col } from 'react-flexbox-grid'

const Home = () ->
  r Grid,
    r Row,
      r Col, {xs: 6},
        r 'h2', 'All Users'
        r 'ul', props.users.map (user, key) ->
          r 'li', {key: key},
            r 'b', 'Name: '
            user.name
            r 'br'
            r 'b', 'Email: '
            user.email
      r Col, {xs: 6},
        r 'h2', 'All Projects'
        r 'ul', props.projects.map (project, key) ->
          r 'li', {key: key},
            r 'b', 'Title: '
            project.title
            r 'br'
            r 'b', 'Owner: '
            project.owner

export default Home

```

This code is super naive and would love your feedback and PR's 🤠
