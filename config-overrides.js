const {
    override,
    useBabelRc
} = require("customize-cra");



module.exports = override(
    useBabelRc()
);


//file .babelrc không tự động nạp vào webpack, nên mới phải customize tại đây để add vào webpack