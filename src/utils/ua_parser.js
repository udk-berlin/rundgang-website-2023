import { useMemo } from 'react';
import * as UAParser from 'ua-parser-js';
import { isMobile, isTouchDevice } from './mobile';

const uaParser = new UAParser.UAParser();

function useUA(uaString = null) {
    if (uaString === null)
        uaString = window.navigator.userAgent;

    return useMemo(() => {
        try {
            uaParser.setUA(uaString);
            return {
                os: uaParser.getOS(),
                browser: uaParser.getBrowser(),
                cpu: uaParser.getCPU(),
                device: uaParser.getDevice(),
                engine: uaParser.getEngine(),
            };
        } catch (err) {
            return null;
        }
    }, [uaString]);
}

function useDevice(uaString = null) {
    if (uaString === null)
        uaString = window.navigator.userAgent;

    return useMemo(() => {
        try {
            uaParser.setUA(uaString);
            return uaParser.getDevice();
        } catch (err) {
            return null;
        }
    }, [uaString]);
}

function useBrowser(uaString = null) {
    if (uaString === null)
        uaString = window.navigator.userAgent;

    return useMemo(() => {
        try {
            uaParser.setUA(uaString);
            return uaParser.getBrowser();
        } catch (err) {
            return null;
        }
    }, [uaString]);
}

function useCPU(uaString = null) {
    if (uaString === null)
        uaString = window.navigator.userAgent;

    return useMemo(() => {
        try {
            uaParser.setUA(uaString);
            return uaParser.getCPU();
        } catch (err) {
            return null;
        }
    }, [uaString]);
}

function useEngine(uaString = null) {
    if (uaString === null)
        uaString = window.navigator.userAgent;

    return useMemo(() => {
        try {
            uaParser.setUA(uaString);
            return uaParser.getEngine();
        } catch (err) {
            return null;
        }
    }, [uaString]);
}

export { useUA, useDevice, useBrowser, useCPU, useEngine, isMobile, isTouchDevice };