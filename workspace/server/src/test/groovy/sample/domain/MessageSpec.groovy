package sample.domain

import spock.lang.Specification

class MessageSpec extends Specification {
    def "equal"() {
        setup: "Messageオブジェクトに「Hello, JJUG-CCC!」を渡してインスタンスを生成する"
        def message = new Message(value: "Hello, JJUG-CCC!")

        expect: "「Hello, JJUG-CCC!」がvalueにセットされている"
        message.value == "Hello, JJUG-CCC!"
    }

}
