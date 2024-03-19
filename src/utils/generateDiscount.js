export function generateDiscountCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let discountCode = '';
    for (let i = 0; i < 8; i++) {
        discountCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return discountCode;
}
