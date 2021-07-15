# Project 3 Evaluation

## Back-end Technology
**3: Excelling**
>Includes many well-structured models, and advanced functionality such as authorization, 3rd-party API integration, or other technology not covered in class

## Front-end Technology
**3: Excelling**
>In addition to appropriate Angular use, includes 1 Angular topic not covered in class. Makes use of multiple custom directives

## Code Quality
**3: Excelling**
>No major code quality issues, makes use of Ruby best practices appropriately, and follows techniques such as separation of concerns, abstraction, and encapsulation

## Deployment and Functionality
**3: Excelling**
>App has advanced functionality that works with minimal errors, and may make use of advanced tools such as APIs, plugins, etc. App may be deployed to a service other than Heroku (e.g. Digital Ocean).

## Planning / Process / Submission
**2: Performing**
>Submission contains clear evidence of planning, adequate documentation, include all from previous category, as well as additional information such as unsolved issues.


#### Notes
Nice work team! You've built a focused, nicely styled web app. You've made the best of a slightly awkward api, which came without many id's for it's data.

#### Room for improvement
DRYness issue

There is a DRYness issue where there exists very similar code in moments/show.controller.js and services/momentsHandler.js for retrieving and parsing Moment data. We should keep data manipulation in one place. Instead of having this repeated code inside the show controller, we can allow the momentsHandler to manage retrieving and checking for api data. Leaving the show controller to only worry about displaying that data.

Cacheing opportunity

When `random` is clicked we get 2 API calls for the same data before displaying that moment. First `check()` is fired which launches at least one query to verify that the randomly selected date exists on the api. If so then `$state.go` is fired to visit that page where the same api call is made again to retrieve the data for display. This is redundant. Better would be to locally store the successfully pulled data of that initial check request, then read it from our local storage in order to display it on the `show` page.

To handle caching, inside `momentsHandler` we can create an object to store values mapped to keys for month and date:

```js
var moments = {}

// example
{
  // April
  '4': {
    // day-of-month
    '1': { date:/*...*/, events:/*...*/},
    '3': { date:/*...*/, events:/*...*/},
    '4': { date:/*...*/, events:/*...*/},
    '23': { date:/*...*/, events:/*...*/},
    '30': { date:/*...*, events::/*...*/}
  },
  // October
  '10': {
    // day-of-month
    '3': { date:/*...*/, events:/*...*/},
    '12': { date:/*...*/, events:/*...*/},
    '22': { date:/*...*, events::/*...*/}
  }
}
```

Then create some functions to handle searching/retrieving and adding:

```js
let storeMoment = (date, moment) => {
  moments[date.month] = moments[date.month] || []
  if (!moments[date.month][date.day]) {
    moments[date.month][date.day] = moment
  }
  return moments[date.month][date.day]
}

let findMoment = (date) => {
  if (moments[date.month] && moments[date.month][date.day]) {
    return moments[date.month][date.day]
  } else {
    return null
  }
}
```

All that's left to do is ask the local storage for a moment before reaching out over the api:

```js
  function check (date) {
    // see if the date was previously loaded before making an API call
    let moment = findMoment(date)
    if (moment && momentHasYear(moment, date.year)) {
      return new Promise((resolve, reject) => {
        resolve(true)
      })
    }
    // make a request if we don't have the moment cached
    // get all data for the specific date
    return Moment.get({ month: date.month, day: date.day }).$promise.then(
        function (data) {
          // store whole moment without trimming years
          let moment = storeMoment(date, cleanRawMomentData(data))
          // return whether moment has the requested year
          return momentHasYear(moment, date.year)
        },
        function (error) {
          console.log(error)
        }
      )
  } // end check
```

Because the expected functionality is to return a promise for the show controller to chain against we need to also return a promise if we found the moment locally. So if the moment was saved, we create a new Promise, resolve it immediately, and return it. Otherwise the original API call is made and it's promise returned.


#### Team Collaboration
You've taken great use of git's branching to isolate separate feature development.

The [team contributions](https://github.com/jessamarie/Moments/graphs/contributors) seem to be skewed rather heavily towards Jessa, in terms of both total commits and lines added. This is not necessarily a problem for Project3 grading, but be prepared to account for this when discussing this project as a portfolio piece in front of interviewers.