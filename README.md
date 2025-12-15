# shigerian-translator-js
Translate any text to shigerian.

# How to use
```js
import { translateAny2Shigerian, translateShigerian2Any } from "shigerian-translator";

const inputText = "hello world";
const shigerianText = translateAny2Shigerian(inputText);
const translatedShigerianText = translateShigerian2Any(shigerianText);

console.log(inputText === translatedShigerianText); // true
```
