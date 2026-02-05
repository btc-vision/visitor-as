import { SimpleParser, TransformVisitor } from "../index.js";
import {
    CallExpression,
    Expression,
    IdentifierExpression,
    Parser
} from "@btc-vision/assemblyscript/dist/assemblyscript.js";
import { isLibrary, not } from '../utils.js';

class FunctionCallTransform extends TransformVisitor {
    visitCallExpression(node: CallExpression): Expression {
        if (node.expression instanceof IdentifierExpression) {
            if (node.expression.text == "foo") {
                let res = SimpleParser.parseExpression('"hello world"');
                res.range = node.range;
                return res;
            }
        }
        return super.visitCallExpression(node);
    }

    afterParse(_: Parser): void {
        let sources = _.sources.filter(not(isLibrary));
        this.visit(sources);
    }
}

export default new FunctionCallTransform();
