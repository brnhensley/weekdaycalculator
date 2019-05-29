export class DateSolver {
  constructor(date) {
    this.date = date;
  }

  GetDay(input)
  {
    let date = new Date(input);
    let answer = "";
    let day = date.getDay();

    if(day % 7 === 6)
    {
      answer = "Sunday Fun Day";
    }
    if(day % 7 === 0)
    {
      answer = "I hate Mondays :(";
    }
    if(day % 7 === 1)
    {
      answer = "Taco Tuesday";
    }
    if(day % 7 === 2)
    {
      answer = "Wacky Wednesday";
    }
    if(day % 7 === 3)
    {
      answer = "Thursty Thursday";
    }
    if(day % 7 === 4)
    {
      answer = "Freaky Friday";
    }
    if(day % 7 === 5)
    {
      answer = "Stoned Saturday";
    }
    return answer;

  }
}
