$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/calc.feature");
formatter.feature({
  "line": 1,
  "name": "My Calculator",
  "description": "",
  "id": "my-calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Should add two positive numbers",
  "description": "",
  "id": "my-calculator;should-add-two-positive-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "my calculator is running",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I add 1 and 2",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "result should be equal to 3",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 8,
  "name": "Should subtract two positive numbers",
  "description": "",
  "id": "my-calculator;should-subtract-two-positive-numbers",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@wip"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "my calculator is running",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I subtract 3 and 1",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "result should be equal to 2",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});