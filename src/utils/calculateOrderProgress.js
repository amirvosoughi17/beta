import Order from "@/models/Order";

/**
 * @param {Order} order 
 */
export function calculateOrderProgress(order) {
    const completedFeatures = order.selectedFeatures.filter(feature => feature.status === "توسعه داده شده").length;
    const inProgressFeatures = order.selectedFeatures.filter(feature => feature.status === "در حال توسعه").length;
    const totalFeatures = order.totalFeature;
    const overallProgress = ((completedFeatures + (inProgressFeatures / 2)) / totalFeatures) * 100;
    return overallProgress;
}