package steps
import calc.MyCalculator
import cucumber.api.PendingException
import cucumber.api.scala.{EN, ScalaDsl}
import com.codeborne.selenide.Condition._
import com.codeborne.selenide.Selenide._

class StepDefinitions extends ScalaDsl with EN {
  Given("""^my calculator is running$"""){ () =>
    println("Hi!")
    //// Write code here that turns the phrase above into concrete actions
//    throw new PendingException()
  }
//  var calc: MyCalculator = _
//  var result: Int = _
//  Given("""^my calculator is running$"""){ () =>
//    calc = new MyCalculator
//  }
//  When("""^I add (\d+) and (\d+)$"""){ (firstNum:Int, secondNum:Int) =>
//    result = calc.add(firstNum, secondNum)
//  }
//  Then("""^result should be equal to (\d+)$"""){ (expectedResult:Int) =>
//    assert(result == expectedResult, "Incorrect result of calculator computation")
//  }
//  When("""^I subtract (\d+) and (\d+)$"""){ (firstNum:Int, secondNum:Int) =>
//    result = calc.sub(firstNum, secondNum)
//  }
}