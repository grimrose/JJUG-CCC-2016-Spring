package sample.controllers

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.ResponseBody

import sample.domain.Message

@Controller
class MainController {

    @RequestMapping("/message")
    public @ResponseBody Message message() {
        new Message("JJUG-CCC")
    }

}
