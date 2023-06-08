function isMobile(details) {
    return details.type === 'mobile';
}

function isTouchDevice(details) {
    return ['mobile', 'tablet', 'wearable'].includes(details.type || '');
}

export { isMobile, isTouchDevice };