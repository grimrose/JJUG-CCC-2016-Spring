import * as m from "mithril";

export namespace Sample {

    export class SampleModel {
        public hello(arg: string): string {
            return `Hello, ${arg}!`;
        }

        public requestMesssge() {
            return m.request({
                method: "GET",
                url: "/api/message",
                initialValue: null
            })
                .then((data) => {
                    return new SampleMessage(data.value);
                });
        }
    }

    export class SampleMessage {
        message: Mithril.BasicProperty<string>;

        constructor(input: string) {
            this.message = m.prop(input);
        }
    }

    export class SampleController implements Mithril.Controller {
        vm: SampleModel;
        message: Mithril.BasicProperty<string>;

        constructor() {
            this.vm = new SampleModel();
            this.message = m.prop("");
        }

        public init() {
            this.vm.requestMesssge().then((result) => {
                this.message = result.message;
                m.redraw();
            });
        }
    }

    export class SampleComponent implements Mithril.Component<SampleController> {
        controller: () => SampleController;
        view: (ctrl?: SampleController, ...args: any[]) => Mithril.VirtualElement;

        constructor() {
            this.controller = () => {
                let ctrl = new SampleController();
                ctrl.init();
                return ctrl;
            };
            this.view = (ctrl) => {
                let message = ctrl.message();

                if (message) {
                    return m("div",
                        m("p", [
                            m("i", { className: "fa fa-coffee fa-3x fa-border", "aria-hidden": "true" })
                        ]),
                        m("p", ctrl.vm.hello(message))
                    );
                }
                return m("div",
                    m("p", [
                        m("i", { className: "fa fa-hourglass-half fa-3x", "aria-hidden": "true" })
                    ]),
                    m("p", "waiting...")
                );
            };
        }
    }

}
