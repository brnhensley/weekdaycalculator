import { DateSolver } from './../src/weekdaycalc.js';

describe('DateSolver', function() {
  it('should give us a date', function() {
    let letsGetDate = new DateSolver('May 30, 2019')
    expect(letsGetDate.GetDay("May 30, 2019")).toEqual("Freaky Friday");
  });
});
