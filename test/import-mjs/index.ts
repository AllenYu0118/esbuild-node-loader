import foo from 'foo'
import notIndex from 'foo/not-index'
// import notIndex from 'foo/not-index.js' # 等待官方修復中 https://github.com/swc-project/swc/pull/3194
import { a } from '../fixture.export'
import { hello } from 'with-dts/hello'

console.log(foo)
console.log(notIndex)
console.log(a)
console.log(hello)
