import { DateSolver } from './../src/weekdaycalc.js';

describe('DateSolver', function() {
  it('should give us a day', function() {
    let letsGetDay = new DateSolver('2019-05-29')
    // let date = new Date ('2019-05-29 T00:00:00');
    //console.log(letsGetDay.GetDay());
    expect(letsGetDay.GetDay()).toEqual("Wacky Wednesday");
  });
});
