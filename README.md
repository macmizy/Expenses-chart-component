# Frontend Mentor - Expenses chart component solution

This is a solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
  - [Author](#author)




### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day
- See the current day’s bar highlighted in a different colour to the other bars
- View the optimal layout for the content depending on their device’s screen size
- See hover states for all interactive elements on the page
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart

### Screenshot

![](Screenshot%202022-07-19%20151517.png)


### Links

- Solution URL: [https://github.com/macmizy/Expenses-chart-component]
- Live Site URL: [https://Expenses-chart-component.rufairahim.repl.co]

### Built with

- HTML
- CSS 
- JAVASCRIPT


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
async function Graph(){
    const result = await fetch('./data.json');
    const data = await result.json();

    let i = 0;
    bars.forEach(bar => {
        let amnt = data[i].amount;
        let height = `${amnt * 3}px`;
        bar.style.height = height;
        amtArray[i] = amnt;
        i++;

        if(today.getDay() == i){
            bar.classList.add('active')
        }
        
    });
}
```

### Useful resources

- The Frontend mentor Slack channel


## Author

- Frontend Mentor - [@macmizy](https://www.frontendmentor.io/profile/macmizy)
- Twitter - [@rahim_moyo](https://www.twitter.com/rahim_moyo)
