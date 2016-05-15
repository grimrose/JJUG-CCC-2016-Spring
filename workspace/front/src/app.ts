import * as m from "mithril";

import { Sample } from "./components/sample";

m.module(document.getElementById("app"), new Sample.SampleComponent());
