export class DateSolver {
  constructor(date) {
    this.date = new Date(date);
  }

  GetDay()
  {
    // let date = new Date(this.date);
    let answer = "";
    let day = this.date.getUTCDay();
    if(day === 0)
    {
      answer = "Sunday Fun Day";

    }
    if(day === 1)
    {
      answer = "I hate Mondays :(";
    }
    if(day === 2)
    {
      answer = "Taco Tuesday";
    }
    if(day === 3)
    {
      console.log(day + " FUUUUUUUCJKKCKCKKCKaJSFHOUHAQEOUFHKJEHGK");
      answer = "Wacky Wednesday";
    }
    if(day === 4)
    {
      answer = "Thursty Thursday";
    }
    if(day === 5)
    {
      answer = "Freaky Friday";
    }
    if(day === 6)
    {
      answer = "Stoned Saturday";
    }
    return answer;

  }
}
