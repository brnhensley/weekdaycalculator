import { DateSolver } from './weekdaycalc';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    let date = $("input#date").val().toString();
    let datesolver = new DateSolver(date);
    let result = datesolver.GetDay(date);
    $(".date").text(result);

    $("#result").show();
  });
});
