import DiscountCode from "@/models/discountCode";

export async function generateDiscountCode(user, expiredAt, discountPercentage) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let discountCode = '';
    for (let i = 0; i < 8; i++) {
        discountCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    if (user) {
        const newDiscountCode = await DiscountCode.create({
            user: user,
            code: discountCode,
            expiredAt,
            discountPercentage
        });
        return newDiscountCode
    }
    console.log("There is no recived user in this function")
}