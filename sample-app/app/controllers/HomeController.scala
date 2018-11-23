package controllers

import javax.inject._
import play.api.mvc._

/**
 * This controller creates an `Action` to handle HTTP requests to the
 * application's home page.
 */
@Singleton
class HomeController @Inject()(messagesAction: MessagesActionBuilder, cc: ControllerComponents) extends AbstractController(cc) {

  def index() = Action { implicit req =>
    Ok(views.html.index())
  }

  def vote() = Action { implicit req =>
    Ok(views.html.vote())
  }
}
