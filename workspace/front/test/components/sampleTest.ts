import * as assert from "power-assert";

import { Sample } from "../../src/components/sample";

describe("Sample", function() {
    context("Model", function() {
        const model = new Sample.SampleModel();

        it("should be equal.", function() {
            assert.equal(model.hello("World"), "Hello, World!");
        });
    });
});
