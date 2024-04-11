import Order from "@/models/Order";

/**
 * @param {Order} order 
 */
export function calculateOrderProgress(order) {
    try {
        const completedFeatures = order.selectedFeatures.filter(feature => feature.status === "توسعه داده شده").length;
        const inProgressFeatures = order.selectedFeatures.filter(feature => feature.status === "در حال توسعه").length;
        const totalFeatures = order.selectedFeatures.length;

        const overallProgress = (completedFeatures + (inProgressFeatures * 0.5)) / totalFeatures * 100;
        console.log(overallProgress)
        return overallProgress;
    } catch (error) {
        console.log("ERROR FROM ORDER PROGRESS CALCULATOR", error.message)
    }
}