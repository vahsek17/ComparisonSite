(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/firebase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
;
;
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCiqtadS6kJeT9DP5vg8hNikqdgCQ74Gfs",
    authDomain: "site-9686c.firebaseapp.com",
    projectId: "site-9686c",
    storageBucket: "site-9686c.appspot.com",
    messagingSenderId: "529711415178",
    appId: "1:529711415178:web:cf5e62aac730009e389273",
    measurementId: "G-VK8M10QC65"
};
const app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeApp"])(firebaseConfig);
const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getFirestore"])(app);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/useCatalogue.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCatalogue",
    ()=>useCatalogue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/esm/index.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/firebase.ts [app-client] (ecmascript)"); // make sure this path is correct
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useCatalogue() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCatalogue.useEffect": ()=>{
            const load = {
                "useCatalogue.useEffect.load": async ()=>{
                    try {
                        const database = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "dev"; //our database names are same as the branch 
                        //main branch would make changes to main/prod database, and dev branch would make changes to dev database
                        const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$firebase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["db"], database));
                        //Catalogue, dev, or main - here catalogue has the older mobile data, but the main & dev are the databases of prod & dev environments respectively
                        setItems(snap.docs.map({
                            "useCatalogue.useEffect.load": (d)=>d.data()
                        }["useCatalogue.useEffect.load"]));
                    } catch (err) {
                        console.error("Error fetching catalogue:", err);
                    }
                }
            }["useCatalogue.useEffect.load"];
            load();
        }
    }["useCatalogue.useEffect"], []);
    return items;
}
_s(useCatalogue, "E85yb7BhBnl3/OpymRdjFiQJ97s=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "attributeNames",
    ()=>attributeNames,
    "sections",
    ()=>sections
]);
const attributeNames = {
    architecture: "Architecture",
    aspectRatio: "Aspect Ratio",
    audioFeatures: "Audio Features",
    audioJack: "Audio Jack",
    availableStorage: "Available Storage",
    battery: "Battery",
    batteryCapacity: "Battery Capacity",
    batteryRemovable: "Removable Battery",
    batteryTalkTime: "Battery Talk Time",
    batteryType: "Battery Type",
    benchMarks: "Benchmarks",
    bezelLessDisplay: "Bezel-less Display",
    bluetooth: "Bluetooth",
    chipset: "Chipset",
    colours: "Colors",
    comparePrices: "Compare Prices",
    cpu: "CPU",
    customUi: "Custom UI",
    dimensions: "Dimensions",
    displayType: "Display Type",
    expandable: "Expandable Storage",
    expertRating: "Expert Rating",
    fingerpringType: "Fingerprint Type",
    fingerprintPosition: "Fingerprint Position",
    fingerprintSensor: "Fingerprint Sensor",
    fmRadio: "FM Radio",
    frontAutofocus: "Front Autofocus",
    frontCamera: "Front Camera",
    frontCameraSetup: "Front Camera Setup",
    frontFlash: "Front Flash",
    frontResolution: "Front Resolution",
    frontVideo: "Front Video",
    gps: "GPS",
    graphics: "Graphics",
    hdr: "HDR",
    imageURL: "Image URL",
    internalMemory: "Internal Memory",
    launchDate: "Launch Date",
    loudSpeaker: "Loudspeaker",
    material: "Material",
    networkSupport: "Network Support",
    nfc: "NFC",
    operatingSystem: "Operating System",
    otg: "OTG Support",
    otherSensors: "Other Sensors",
    peakBrightness: "Peak Brightness",
    performance: "Performance",
    pixelDensity: "Pixel Density",
    priceList: "Price List",
    quickCharging: "Quick Charging",
    ram: "RAM",
    rearAutoFocus: "Rear Autofocus",
    rearCamera: "Rear Camera",
    rearCameraFeatures: "Rear Camera Features",
    rearCameraSetup: "Rear Camera Setup",
    rearFlash: "Rear Flash",
    rearImageResolution: "Rear Image Resolution",
    rearOis: "Rear OIS",
    rearResolution: "Rear Resolution",
    rearSettings: "Rear Settings",
    rearShootingModes: "Rear Shooting Modes",
    rearVideoFeatures: "Rear Video Features",
    rearVideoRecording: "Rear Video Recording",
    refreshRate: "Refresh Rate",
    resolution: "Resolution",
    ruggedness: "Ruggedness",
    sar: "SAR",
    screenProtection: "Screen Protection",
    screenSize: "Screen Size",
    screenToBodyRatio: "Screen-to-Body Ratio",
    sim1: "SIM1",
    sim2: "SIM2",
    simSize: "SIM Size",
    simSlot: "SIM Slot",
    stereoSpeakers: "Stereo Speakers",
    storage: "Storage",
    touchScreen: "Touch Screen",
    usbConnectivity: "USB Connectivity",
    usbType: "USB Type",
    userRatings: "User Ratings",
    voLte: "VoLTE",
    waterproofing: "Waterproofing",
    weight: "Weight",
    wifi: "WiFi",
    wifiFeatures: "WiFi Features"
};
const sections = {
    summary: [
        "performance",
        "Display",
        "rearCamera",
        "frontCamera",
        "battery",
        "Storage",
        "expertRating",
        "userRatings",
        "benchMarks",
        "comparePrices"
    ],
    general: [
        "launchDate",
        "operatingSystem",
        "customUi"
    ],
    designKeys: [
        "dimensions",
        "weight",
        "material",
        "colours",
        "waterproofing",
        "ruggedness"
    ],
    performance: [
        "chipset",
        "cpu",
        "architecture",
        "graphics",
        "ram"
    ],
    display: [
        "displayType",
        "screenSize",
        "resolution",
        "aspectRatio",
        "pixelDensity",
        "screenToBodyRatio",
        "screenProtection",
        "bezelLessDisplay",
        "touchScreen",
        "peakBrightness",
        "refreshRate",
        "hdr"
    ],
    cameraRear: [
        "rearCameraSetup",
        "rearCamera",
        "rearAutoFocus",
        "rearOis",
        "rearFlash",
        "rearImageResolution",
        "rearSettings",
        "rearShootingModes",
        "rearCameraFeatures",
        "rearVideoRecording",
        "rearVideoFeatures"
    ],
    cameraFront: [
        "frontCameraSetup",
        "frontCamera",
        "frontAutofocus",
        "frontFlash",
        "frontResolution",
        "frontVideo"
    ],
    battery: [
        "battery",
        "batteryCapacity",
        "batteryRemovable",
        "quickCharging",
        "usbConnectivity",
        "usbType",
        "batteryType",
        "batteryTalkTime"
    ],
    storageKeys: [
        "internalMemory",
        "expandable",
        "otg",
        "storage",
        "availableStorage"
    ],
    nwcKeys: [
        "simSlot",
        "simSize",
        "networkSupport",
        "voLte",
        "sim1",
        "sim2",
        "sar",
        "wifi",
        "wifiFeatures",
        "bluetooth",
        "gps",
        "nfc",
        "usbConnectivity"
    ],
    multimediaKeys: [
        "fmRadio",
        "stereoSpeakers",
        "loudSpeaker",
        "audioJack",
        "audioFeatures"
    ],
    sensorsKeys: [
        "fingerprintSensor",
        "fingerprintPosition",
        "fingerprintType",
        "otherSensors"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/compareTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompareTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useCatalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/useCatalogue.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ─── Small UI-only helpers (no data logic) ───────────────────────────────────
function SiteHeader({ menuOpen, onToggleMenu }) {
    const NAV = [
        "Compare",
        "Top Phones",
        "Rankings",
        "News",
        "About"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 bg-gray-950 border-b border-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 h-14 flex items-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "📱"
                            }, void 0, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white font-bold text-lg tracking-tight",
                                children: [
                                    "Spec",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "Arena"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 21,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden md:flex items-center gap-1 flex-1",
                        children: NAV.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "px-3 py-1.5 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors",
                                children: link
                            }, link, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 ml-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "hidden md:flex items-center justify-center w-8 h-8 rounded-md border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors text-sm",
                                "aria-label": "Search",
                                children: "🔍"
                            }, void 0, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "md:hidden flex items-center justify-center w-8 h-8 rounded-md border border-gray-700 text-gray-400 hover:text-white transition-colors",
                                onClick: onToggleMenu,
                                "aria-label": "Toggle menu",
                                children: menuOpen ? "✕" : "☰"
                            }, void 0, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden bg-gray-950 border-t border-gray-800",
                children: NAV.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#",
                        className: "block px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 border-b border-gray-800 transition-colors",
                        children: link
                    }, link, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 61,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/compareTable.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = SiteHeader;
function AdSlot({ label, minHeight, accent = "blue" }) {
    const colors = {
        blue: "bg-blue-950/40 border-blue-800/50 text-blue-400",
        green: "bg-emerald-950/40 border-emerald-800/50 text-emerald-400",
        amber: "bg-amber-950/40 border-amber-800/50 text-amber-400"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `w-full flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed ${colors[accent]}`,
        style: {
            minHeight
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-bold tracking-widest uppercase opacity-60",
                children: "Advertisement"
            }, void 0, false, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs opacity-40",
                children: label
            }, void 0, false, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/compareTable.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c1 = AdSlot;
function SiteFooter() {
    const cols = [
        [
            "Compare",
            [
                "Compare Phones",
                "Top 10 Phones",
                "Best Camera Phones",
                "Best Battery Phones"
            ]
        ],
        [
            "Company",
            [
                "About Us",
                "Contact",
                "Privacy Policy",
                "Terms of Use"
            ]
        ],
        [
            "More",
            [
                "Advertise",
                "API Access",
                "Submit a Phone",
                "Sitemap"
            ]
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gray-950 border-t border-gray-800 mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 py-10 flex flex-wrap gap-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 w-44",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-white font-bold text-base mb-2",
                                children: [
                                    "Spec",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "Arena"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 113,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 leading-relaxed",
                                children: "Unbiased mobile specifications & comparisons."
                            }, void 0, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-8 flex-1",
                        children: cols.map(([heading, links])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-1.5 min-w-[110px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1",
                                        children: heading
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this),
                                    links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#",
                                            className: "text-xs text-gray-500 hover:text-gray-200 transition-colors leading-loose",
                                            children: l
                                        }, l, false, {
                                            fileName: "[project]/app/components/compareTable.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this))
                                ]
                            }, heading, true, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 119,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-gray-800 px-4 py-3 max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-gray-600",
                        children: [
                            "© ",
                            new Date().getFullYear(),
                            " SpecArena — specs for informational purposes only."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            "Privacy",
                            "Terms",
                            "Cookies"
                        ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "text-[11px] text-gray-600 hover:text-gray-400 transition-colors",
                                children: l
                            }, l, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/compareTable.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
_c2 = SiteFooter;
function CompareTable() {
    _s();
    // ── All original state & data logic, untouched ───────────────────────────
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useCatalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogue"])();
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        null,
        null
    ]);
    const [dropdownCount, setDropdownCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [expandedRows, setExpandedRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const availableOptions = items.map((item)=>({
            value: item.model,
            label: item.model
        })).filter((option)=>!selected.some((s)=>s?.value === option.value));
    const handleChange = (opt, index)=>{
        const copy = [
            ...selected
        ];
        copy[index] = opt;
        const activeSelections = [];
        for(let i = 0; i < dropdownCount; i++){
            if (copy[i] !== null) activeSelections.push(copy[i]);
        }
        const newCount = Math.max(2, activeSelections.length);
        const newSelected = Array(4).fill(null);
        for(let i = 0; i < newCount; i++)newSelected[i] = activeSelections[i];
        setSelected(newSelected);
        setDropdownCount(newCount);
    };
    const addDropdown = ()=>{
        if (dropdownCount < 4) setDropdownCount(dropdownCount + 1);
    };
    // ── New UI-only state ─────────────────────────────────────────────────────
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [highlightDiff, setHighlightDiff] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Derived: which spec keys have differing values across selected phones
    const diffKeys = new Set();
    if (highlightDiff) {
        const activePhones = selected.slice(0, dropdownCount).filter(Boolean).map((s)=>items.find((item)=>item.model === s.value));
        if (activePhones.length > 1) {
            Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attributeNames"]).forEach((key)=>{
                const vals = activePhones.map((p)=>p?.[key] ?? "");
                if (new Set(vals).size > 1) diffKeys.add(key);
            });
        }
    }
    const hasSelection = selected.some((s)=>s !== null);
    if (items.length === 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-950 flex items-center justify-center text-gray-400 text-sm",
        children: "Loading phones…"
    }, void 0, false, {
        fileName: "[project]/app/components/compareTable.tsx",
        lineNumber: 211,
        columnNumber: 7
    }, this);
    // ── react-select shared styles (dark theme) ───────────────────────────────
    const selectWidth = dropdownCount === 2 ? "100%" : dropdownCount === 3 ? "240px" : "190px";
    const rsStyles = {
        control: (base)=>({
                ...base,
                backgroundColor: "#111827",
                borderColor: "#374151",
                color: "white",
                width: selectWidth,
                minHeight: "40px",
                boxShadow: "none",
                "&:hover": {
                    borderColor: "#60a5fa"
                }
            }),
        menu: (base)=>({
                ...base,
                backgroundColor: "#111827",
                border: "1px solid #374151",
                width: selectWidth
            }),
        singleValue: (base)=>({
                ...base,
                color: "white",
                fontWeight: 600,
                fontSize: "13px"
            }),
        placeholder: (base)=>({
                ...base,
                color: "#6b7280",
                fontSize: "13px"
            }),
        valueContainer: (base)=>({
                ...base,
                padding: "2px 10px"
            }),
        input: (base)=>({
                ...base,
                color: "white"
            }),
        clearIndicator: (base)=>({
                ...base,
                color: "#6b7280",
                "&:hover": {
                    color: "#d1d5db"
                }
            }),
        dropdownIndicator: (base)=>({
                ...base,
                color: "#6b7280"
            }),
        option: (base, state)=>({
                ...base,
                backgroundColor: state.isSelected ? "#1d4ed8" : state.isFocused ? "#1f2937" : "transparent",
                color: "white",
                fontSize: "13px"
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-950 text-gray-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteHeader, {
                menuOpen: menuOpen,
                onToggleMenu: ()=>setMenuOpen(!menuOpen)
            }, void 0, false, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 pt-5 pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                    label: "Leaderboard · 728×90",
                    minHeight: 80,
                    accent: "blue"
                }, void 0, false, {
                    fileName: "[project]/app/components/compareTable.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 pt-6 pb-4 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-bold tracking-widest uppercase text-blue-400 mb-2",
                        children: "Mobile Comparison Tool"
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2",
                        children: "Compare Any Phone, Side by Side"
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400",
                        children: [
                            "Full specifications for ",
                            items.length,
                            " smartphones — pick up to 4 devices."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "max-w-7xl mx-auto px-4 pb-10 flex flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-end gap-4 px-5 py-5 border-b border-gray-800",
                                children: [
                                    Array.from({
                                        length: dropdownCount
                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-1.5",
                                            style: {
                                                flex: "1 1 180px",
                                                maxWidth: 300
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[10px] font-bold uppercase tracking-widest text-gray-500",
                                                            children: [
                                                                "Phone ",
                                                                i + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/compareTable.tsx",
                                                            lineNumber: 290,
                                                            columnNumber: 19
                                                        }, this),
                                                        i >= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                const copy = [
                                                                    ...selected
                                                                ];
                                                                copy.splice(i, 1);
                                                                copy.push(null);
                                                                setSelected(copy);
                                                                setDropdownCount(dropdownCount - 1);
                                                            },
                                                            className: "text-gray-600 hover:text-red-400 text-xs transition-colors",
                                                            title: "Remove slot",
                                                            children: "✕ Remove"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/compareTable.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/compareTable.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                                                    options: availableOptions,
                                                    value: selected[i] || null,
                                                    onChange: (opt)=>handleChange(opt, i),
                                                    classNamePrefix: "compare-select",
                                                    placeholder: `Select phone ${i + 1}…`,
                                                    isClearable: true,
                                                    styles: rsStyles
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/compareTable.tsx",
                                                    lineNumber: 310,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/components/compareTable.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this)),
                                    dropdownCount < 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: addDropdown,
                                        className: "flex flex-col items-center justify-center gap-1 px-5 py-3 rounded-xl border border-dashed border-gray-700 text-gray-500 hover:border-blue-500 hover:text-blue-400 transition-colors text-xs font-medium self-stretch min-w-[90px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-lg leading-none",
                                                children: "＋"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/compareTable.tsx",
                                                lineNumber: 328,
                                                columnNumber: 17
                                            }, this),
                                            "Add Phone"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 324,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between flex-wrap gap-3 px-5 py-3 border-b border-gray-800 bg-gray-950/50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: hasSelection ? `Comparing ${selected.filter(Boolean).length} phone${selected.filter(Boolean).length > 1 ? "s" : ""} · ${Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attributeNames"]).length} specs` : "Select phones above to compare specs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 336,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 cursor-pointer select-none group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-medium text-gray-400 group-hover:text-gray-200 transition-colors",
                                                children: "Highlight Differences"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/compareTable.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                role: "switch",
                                                "aria-checked": highlightDiff,
                                                onClick: ()=>setHighlightDiff(!highlightDiff),
                                                className: `relative w-9 h-5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${highlightDiff ? "bg-blue-500" : "bg-gray-700"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `absolute top-0.5 w-4 h-4 rounded-full bg-white shadow transition-transform duration-200 ${highlightDiff ? "translate-x-[18px]" : "translate-x-0.5"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/compareTable.tsx",
                                                    lineNumber: 353,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/compareTable.tsx",
                                                lineNumber: 345,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 341,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 335,
                                columnNumber: 11
                            }, this),
                            !hasSelection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center gap-3 py-16 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-5xl",
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base font-semibold text-gray-300",
                                        children: "Select phones to start comparing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: "Choose up to 4 devices using the dropdowns above"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/compareTable.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm table-fixed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "border-b border-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "sticky left-0 z-20 bg-gray-900 w-[22%] px-5 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-gray-500 border-r border-gray-800",
                                                        children: "Specification"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/compareTable.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 21
                                                    }, this),
                                                    Array.from({
                                                        length: dropdownCount
                                                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            className: "px-4 py-3 text-center bg-gray-900 border-l border-gray-800",
                                                            children: selected[i] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-bold text-white leading-tight block",
                                                                children: selected[i].label
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/compareTable.tsx",
                                                                lineNumber: 383,
                                                                columnNumber: 27
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-xs text-gray-600 italic",
                                                                children: "Not selected"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/compareTable.tsx",
                                                                lineNumber: 387,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/app/components/compareTable.tsx",
                                                            lineNumber: 378,
                                                            columnNumber: 23
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/compareTable.tsx",
                                                lineNumber: 373,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/compareTable.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["attributeNames"]).map(([key, label], index)=>{
                                                const isDiff = diffKeys.has(key);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: `border-b border-gray-800/60 transition-colors group ${isDiff ? "bg-blue-950/30 hover:bg-blue-950/50" : index % 2 === 0 ? "bg-gray-900 hover:bg-gray-800/70" : "bg-gray-950 hover:bg-gray-800/70"}`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "sticky left-0 z-10 bg-inherit px-5 py-2.5 font-medium text-gray-300 border-r border-gray-800 whitespace-nowrap",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex items-center gap-2",
                                                                children: [
                                                                    String(label),
                                                                    isDiff && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[9px] font-bold uppercase tracking-wider text-blue-400 bg-blue-900/50 px-1.5 py-0.5 rounded",
                                                                        children: "differs"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/compareTable.tsx",
                                                                        lineNumber: 413,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/compareTable.tsx",
                                                                lineNumber: 410,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/compareTable.tsx",
                                                            lineNumber: 409,
                                                            columnNumber: 25
                                                        }, this),
                                                        Array.from({
                                                            length: dropdownCount
                                                        }).map((_, phoneIndex)=>{
                                                            const phoneModel = selected[phoneIndex]?.value;
                                                            const val = phoneModel ? items.find((item)=>item.model === phoneModel)?.[key] ?? "N/A" : "";
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "px-4 py-2.5 text-center text-gray-200 border-l border-gray-800 font-mono text-xs leading-relaxed",
                                                                children: String(val)
                                                            }, `${key}-${phoneIndex}`, false, {
                                                                fileName: "[project]/app/components/compareTable.tsx",
                                                                lineNumber: 427,
                                                                columnNumber: 29
                                                            }, this);
                                                        })
                                                    ]
                                                }, key, true, {
                                                    fileName: "[project]/app/components/compareTable.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/compareTable.tsx",
                                            lineNumber: 394,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/compareTable.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-[300px]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                                label: "Rectangle · 300×250",
                                minHeight: 250,
                                accent: "green"
                            }, void 0, false, {
                                fileName: "[project]/app/components/compareTable.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/components/compareTable.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AdSlot, {
                        label: "Leaderboard · 728×90",
                        minHeight: 90,
                        accent: "amber"
                    }, void 0, false, {
                        fileName: "[project]/app/components/compareTable.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SiteFooter, {}, void 0, false, {
                fileName: "[project]/app/components/compareTable.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/compareTable.tsx",
        lineNumber: 257,
        columnNumber: 5
    }, this);
}
_s(CompareTable, "UwGJSG8YZHMNknS2zbBFofme6S0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$useCatalogue$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCatalogue"]
    ];
});
_c3 = CompareTable;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "SiteHeader");
__turbopack_context__.k.register(_c1, "AdSlot");
__turbopack_context__.k.register(_c2, "SiteFooter");
__turbopack_context__.k.register(_c3, "CompareTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_0cbe10f9._.js.map